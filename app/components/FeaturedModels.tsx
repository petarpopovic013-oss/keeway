"use client";

import { Play } from "lucide-react";

export default function FeaturedModels() {
  return (
    <section className="w-full flex flex-col italic">
      {/* Row 1: Two 50/50 cards */}
      <div className="flex flex-col md:flex-row w-full h-[350px] sm:h-[400px] md:h-[600px]">
        {/* Card 1 */}
        <div className="relative w-full md:w-1/2 h-full flex items-end p-8 md:p-16 group cursor-pointer overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          <div className="relative z-20 text-white transition-transform duration-700 group-hover:-translate-y-2">
            <h2 className="leading-[0.95] mb-1 text-white font-normal ![text-shadow:none] ![-webkit-text-stroke:0]" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>IT'S NOT DIFFERENT</h2>
            <p className="text-white/90 mt-2 mb-4" style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)" }}>THE ALL-NEW ICON125I, IT'S ORIGINAL</p>
            <div className="flex items-center gap-2">
              <span className="btn-view-more text-white/80" style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.3rem)" }}>VIEW MORE &gt;&gt;</span>
            </div>
            <button className="mt-4 bg-white/20 hover:bg-white/40 transition-colors w-12 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Play fill="white" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full md:w-1/2 h-full flex items-end p-8 md:p-16 group cursor-pointer overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          <div className="relative z-20 text-white transition-transform duration-700 group-hover:-translate-y-2">
            <h2 className="leading-[0.95] mb-1 text-white font-normal ![text-shadow:none] ![-webkit-text-stroke:0]" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>URBAN WITH A WILD SOUL</h2>
            <p className="text-white/90 mt-2 mb-4" style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)" }}>ALL NEW KEEWAY'S XDV125 EVO PRO</p>
            <div className="flex items-center gap-2">
              <span className="btn-view-more text-white/80" style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.3rem)" }}>VIEW MORE &gt;&gt;</span>
            </div>
            <button className="mt-4 bg-white/20 hover:bg-white/40 transition-colors w-12 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Play fill="white" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: One full-width card */}
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[700px] flex items-center justify-center text-center p-8 md:p-12 group cursor-pointer overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
        <div className="relative z-20 text-white transition-transform duration-700 group-hover:scale-105">
          <h2 className="leading-[0.95] mb-2 text-white drop-shadow-md font-normal ![text-shadow:none] ![-webkit-text-stroke:0]" style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>RKR 250</h2>
          <p className="text-white/90 mt-2 mb-4 drop-shadow-md" style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)" }}>OWN THE ROAD, FEEL THE RUSH</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="btn-view-more text-white/80" style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.3rem)" }}>VIEW MORE &gt;&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
