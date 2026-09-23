"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-keeway-gradient text-white py-16 overflow-hidden italic">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1440px]">
        
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-white/20 pb-8">
          <Link href="/">
            <Image
              src="/logos/Keeway-Icon-Logo-Slogan-White-White.png"
              alt="Keeway Logo"
              width={200}
              height={50}
              className="object-contain w-[150px] md:w-[200px] h-auto"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="font-saira text-xs mr-4 uppercase">Pronađite nas na društvenim mrežama:</span>
            <a
              href="https://www.instagram.com/ddmcompany.ns/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-primary rounded-sm"
              aria-label="Instagram @ddmcompany.ns"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 max-w-5xl mx-auto uppercase">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KEEWAY SRBIJA</h4>
            <Link href="/novosti" className="text-xs font-saira text-white/90 hover:text-white transition-colors">NOVOSTI</Link>
            <Link href="/stores" className="text-xs font-saira text-white/90 hover:text-white transition-colors">PRODAJNA MESTA</Link>
            <Link href="/contact" className="text-xs font-saira text-white/90 hover:text-white transition-colors">POSTANITE DISTRIBUTER</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">DDM GRUPA</h4>
            <a href="https://ddmcompany.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-saira text-white/90 hover:text-white transition-colors">DDM COMPANY</a>
            <a href="https://ddmrentacar.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-saira text-white/90 hover:text-white transition-colors">DDM RENT A CAR</a>
            <a href="https://povuci.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-saira text-white/90 hover:text-white transition-colors">POVUCI.RS</a>
            <a href="https://morbidelli.rs" target="_blank" rel="noopener noreferrer" className="text-xs font-saira text-white/90 hover:text-white transition-colors">MORBIDELLI</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KOMPANIJA</h4>
            <Link href="/about" className="text-xs font-saira text-white/90 hover:text-white transition-colors">O NAMA</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KORISNIČKA PODRŠKA</h4>
            <Link href="/contact" className="text-xs font-saira text-white/90 hover:text-white transition-colors">KONTAKTIRAJTE NAS</Link>
          </div>
        </div>

        {/* Center Logo - LET'S RIDE TOGETHER */}
        <div className="flex justify-center mb-16 border-b border-white/20 pb-12">
          <div className="text-center font-zuume text-4xl lg:text-5xl text-white uppercase tracking-wider">
            <span className="font-light">LET&apos;S RIDE </span>
            <span className="font-bold">TOGETHER</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <div className="text-xs md:text-[11px] font-saira text-white/80 text-center">
            <p>Keeway © Copyright {new Date().getFullYear()} Keeway — Član DDM Grupe. Sva prava zadržana.</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/60">
              Developed by <span className="text-white">Petar Popović</span>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
