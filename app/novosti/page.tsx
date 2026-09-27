import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { getNews } from '@/app/actions/news'
import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, ArrowRight } from 'lucide-react'
import InnerPageHero from '@/app/components/InnerPageHero'

export const metadata: Metadata = {
  title: 'Novosti',
  description: 'Najnovije Keeway vesti iz Srbije: novi motocikli i skuteri, predstavljanja, događaji, ponude i priče iz sveta vožnje.',
  alternates: { canonical: '/novosti' },
  openGraph: { url: '/novosti', title: 'Keeway novosti', description: 'Novi modeli, događaji i aktuelnosti iz sveta Keeway motocikala i skutera.' },
}

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  const newsList = await getNews()

  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[84px] lg:pt-[96px]">
        <InnerPageHero eyebrow="Aktuelnosti" title="Novosti" description="Pratite najnovije Keeway vesti iz Srbije — nove modele, predstavljanja, događaje, ponude i priče iz sveta vožnje." summary={
          <div><strong className="block font-zuume text-5xl font-bold italic leading-none text-white">{newsList.length.toString().padStart(2, '0')}</strong><span className="font-saira text-[10px] uppercase tracking-[0.16em] text-white/50">{newsList.length === 1 ? 'Objavljena vest' : 'Objavljenih vesti'}</span></div>
        } />
        <section className="w-full bg-[#f3f3f1] px-4 py-14 md:px-6 md:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 md:mb-12"><span className="mb-3 block font-saira text-xs font-bold uppercase tracking-[0.2em] text-keeway-orange">Keeway priče</span><h2 className="font-zuume text-4xl font-bold italic leading-[0.95] text-black md:text-6xl">Najnovije iz našeg sveta</h2></div>

          {newsList.length === 0 ? (
            <div className="flex flex-col items-center justify-center border border-black/10 bg-white px-6 py-20 text-center">
              <Newspaper aria-hidden="true" className="mb-6 h-12 w-12 text-gray-300" />
              <h2 className="text-3xl font-zuume font-normal italic mb-4 uppercase tracking-tight text-black ![text-shadow:none] ![-webkit-text-stroke:0]">Trenutno nema vesti</h2>
              <p className="text-gray-500 font-saira text-sm max-w-md mx-auto leading-relaxed">
                Pratite našu stranicu, uskoro ćemo objaviti nove informacije i događaje!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsList.map((item) => (
                <article key={item.id} className="group flex flex-col border border-black/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-keeway-orange/60 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]">
                  <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                    {item.images && item.images.length > 0 ? (
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper aria-hidden="true" className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-keeway-orange font-saira tracking-widest text-[9px] font-bold uppercase mb-4 block">
                      {new Date(item.date).toLocaleDateString('sr-RS')}
                    </span>
                    <h3 className="text-2xl font-zuume font-normal italic mb-4 group-hover:text-keeway-orange transition-colors uppercase tracking-tight text-black line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-saira text-sm mb-6 line-clamp-3">
                      {item.content}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <Link 
                        href={`/novosti/${item.slug}`}
                        className="flex items-center gap-2 text-black hover:text-keeway-orange font-zuume font-normal italic uppercase tracking-widest text-[10px] font-bold transition-all duration-300"
                      >
                        PROČITAJ VIŠE
                        <ArrowRight aria-hidden="true" className="w-3 h-3 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
import type { Metadata } from 'next'
