import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="o-nama" className="w-full bg-white text-black flex flex-col lg:flex-row overflow-hidden font-saira not-italic normal-case">
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative min-h-[250px] md:min-h-[400px] lg:min-h-[600px] group">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-700"></div>
        <div
          className="absolute inset-0 bg-cover transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: 'url("/photos/aboutus.jpg")', backgroundPosition: '75% center' }}
        ></div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-24 xl:p-32 bg-white relative">
        <div className="relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#F54308]"></div>
            <h2 className="text-sm uppercase tracking-widest text-[#F54308] font-normal ![text-shadow:none] ![-webkit-text-stroke:0]">O NAMA</h2>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight text-black" style={{ WebkitTextStroke: "0.42px currentColor" }}>
            URBANA MOBILNOST. <br />
            GLOBALNA VIZIJA.
          </h3>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
            Keeway nije samo prevozno sredstvo, on je tvoj pouzdan partner u svakodnevnom životu.
            Sa prisustvom u preko 80 zemalja, Keeway kombinuje inovativnu tehnologiju, moderan dizajn i pouzdanost.
            Bilo da se probijaš kroz gradsku gužvu ili istražuješ nove puteve, naši motocikli i skuteri pružaju slobodu kretanja prilagođenu tvom stilu života.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
            <div>
              <span className="text-2xl md:text-3xl lg:text-4xl text-black block mb-1">
                25+
              </span>
              <span className="text-[11px] text-gray-500 uppercase tracking-widest">
                GODINA SA VAMA
              </span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl lg:text-4xl text-black block mb-1">
                KREDIT
              </span>
              <span className="text-[11px] text-gray-500 uppercase tracking-widest">
                MOGUĆNOST KUPOVINE
              </span>
            </div>
          </div>

          <Link href="#" className="inline-flex items-center gap-4 group">
            <span className="btn-view-more text-sm uppercase tracking-wider group-hover:text-[#F54308] transition-colors">OTKRIJTE NAŠU PRIČU</span>
            <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#F54308] group-hover:bg-[#F54308]/10 transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:text-[#F54308] transform group-hover:translate-x-1 transition-all duration-300">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F54308]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}
