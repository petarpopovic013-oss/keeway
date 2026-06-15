"use client";

import { Play } from "lucide-react";

export default function ParallaxBanner() {
  return (
    <section className="w-full flex flex-col">
      {/* Parallax Banner */}
      <div 
        className="relative w-full h-[350px] md:h-[500px] lg:h-[700px] flex items-center justify-center group"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <div 
          className="fixed inset-0 w-full h-full bg-center bg-cover z-0 pointer-events-none"
          style={{ backgroundImage: 'url("/photos/parllax-2100x1252-8f1cd56b-7ec8-43d8-bdca-293081ffdf23.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-700 z-10"></div>
        
        <div className="relative z-20 text-center px-6 transition-transform duration-1000 group-hover:scale-105">
          <h2 className="text-sm md:text-base tracking-[0.3em] text-[#F54308] mb-4 font-zuume italic uppercase font-normal ![text-shadow:none] ![-webkit-text-stroke:0]">DOŽIVI PUT</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 uppercase tracking-tight drop-shadow-[0_0_20px_rgba(245,67,8,0.7)] font-normal" style={{ WebkitTextStroke: "0.42px currentColor" }}>
            POMERI <span className="text-white">GRANICE</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-zuume italic uppercase tracking-[0.01em] font-normal">
            GDE PRESTAJE ASFALT, POČINJE TVOJA PRIČA. OTKRIJ POTPUNO NOVU DIMENZIJU VOŽNJE I OSETI PRAVU SLOBODU NA DVA TOČKA.
          </p>
          <div className="flex flex-col items-center gap-4 cursor-pointer">
            <span className="btn-view-more text-white hover:text-[#F54308] transition-colors uppercase tracking-widest">SAZNAJ VIŠE &gt;&gt;</span>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 transition-colors w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md group-hover:border-[#F54308] group-hover:bg-[#F54308]/20">
              <Play fill="white" className="w-6 h-6 ml-1 group-hover:fill-[#F54308]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
