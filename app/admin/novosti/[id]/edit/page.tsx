import { NewsForm } from '@/app/admin/components/NewsForm'
import { getNewsById } from '@/app/actions/news'
import { notFound } from 'next/navigation'

export default async function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const newsItem = await getNewsById(resolvedParams.id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <div className="mb-12 border-b-2 border-black pb-8">
        <span className="text-track-cyan font-saira tracking-widest text-xs font-bold uppercase mb-2 block">
          Administracija / Novosti
        </span>
        <h1 className="text-5xl font-zuume font-normal italic text-black uppercase tracking-tight ![text-shadow:none] ![-webkit-text-stroke:0]">
          Izmeni Vest
        </h1>
      </div>
      <NewsForm initialData={newsItem} />
    </div>
  )
}
