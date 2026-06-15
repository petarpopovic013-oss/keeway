"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-teaser.mp4" type="video/mp4" />
      </video>

      {/* Very subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 z-10"></div>

      {/* Content — centered, matches original keeway.com exactly */}
      <div className="relative z-20 text-center text-white flex flex-col items-center px-4 md:px-8">
        {/* Main title — Zuume Light Italic, large */}
        <h1
          className="leading-[0.95] text-white font-normal ![-webkit-text-stroke:0.42px_currentColor] ![text-shadow:0_0_20px_rgba(245,67,8,0.7),0_4px_4px_rgba(0,0,0,0.5)]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          DOMINIRAJ GRADOM
        </h1>

        {/* Subtitle — Zuume Light Italic, small uppercase */}
        <p
          className="text-white/90 mt-2 mb-1 font-zuume italic uppercase tracking-[0.01em] font-normal"
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}
        >
          Vožnja bez kompromisa uz potpuno novi RKS125
        </p>

        {/* View More link — Saira italic */}
        <a
          href="/motocikli"
          className="btn-view-more text-white/80 mb-3"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
        >
          otkrij više &gt;&gt;
        </a>

        {/* YouTube play button */}
        <button
          onClick={() => setIsVideoOpen(true)}
          className="group transition-transform hover:scale-110"
          aria-label="Play video"
        >
          <svg
            viewBox="0 0 68 48"
            className="w-[50px] h-[35px] opacity-80 group-hover:opacity-100 transition-opacity"
          >
            {/* YouTube rounded rectangle */}
            <path
              d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
              fill="rgba(255,255,255,0.2)"
            />
            <path d="M27 14l16 10-16 10z" fill="white" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/4D3cK-z3rr4?si=zj_isAivt-w0O7Bw&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
