'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { requireAdmin } from '@/app/utils/admin-session'

const ALLOWED_IMAGE_TYPES = new Map([
  ['image/jpeg', 'jpg'],
  ['image/png', 'png'],
  ['image/webp', 'webp'],
])
const MAX_IMAGE_BYTES = 8 * 1024 * 1024

export async function uploadNewsImage(formData: FormData) {
  await requireAdmin()

  const file = formData.get('file')
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Nije priložen fajl.' }
  }

  const extension = ALLOWED_IMAGE_TYPES.get(file.type)
  if (!extension) {
    return { error: 'Dozvoljeni formati su JPEG, PNG i WEBP.' }
  }

  if (file.size > MAX_IMAGE_BYTES) {
    return { error: 'Slika može imati najviše 8 MB.' }
  }

  try {
    const buffer = await file.arrayBuffer()
    const fileName = `${crypto.randomUUID()}.${extension}`
    const filePath = `${fileName}` // in bucket keeway_news_images

    const { error } = await supabaseAdmin.storage
      .from('keeway_news_images')
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false
      })

    if (error) {
      console.error('Error uploading news image:', error)
      return { error: error.message }
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from('keeway_news_images')
      .getPublicUrl(filePath)

    return { publicUrl: publicUrlData.publicUrl, path: filePath }
  } catch (err: unknown) {
    console.error('Error processing news image:', err)
    return { error: 'Greška pri obradi slike. ' + (err instanceof Error ? err.message : String(err)) }
  }
}

export async function deleteNewsImage(path: string) {
  await requireAdmin()

  // Ako je prosleđen puni URL, izvuci samo putanju unutar bucketa
  let filePath = path
  const searchString = '/storage/v1/object/public/keeway_news_images/'
  if (path.includes(searchString)) {
    filePath = path.split(searchString)[1]
  }

  if (!filePath || filePath.includes('..')) {
    return { error: 'Neispravna putanja slike.' }
  }

  const { error } = await supabaseAdmin.storage
    .from('keeway_news_images')
    .remove([filePath])

  if (error) {
    console.error('Error deleting news image:', error)
    return { error: error.message }
  }

  return { success: true }
}
