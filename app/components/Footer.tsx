"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

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
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-primary rounded-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-primary rounded-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-primary rounded-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.4 5.3 3.1 4.5c1-1.1 2.2-1.1 2.7-1.2 3.8-.3 7.6-.3 7.6-.3s3.8 0 7.6.3c.5.1 1.7.1 2.7 1.2.7.8.6 2.6.6 2.6s.1 2.1.1 4.2v2c0 2.1-.1 4.2-.1 4.2s.1 1.8-.6 2.6c-1 1.1-2.4 1.1-3 1.2-2.1.2-7.4.3-7.4.3s-3.8 0-7.6-.3c-.5-.1-1.7-.1-2.7-1.2-.7-.8-.6-2.6-.6-2.6s-.1-2.1-.1-4.2v-2c0-2.1.1-4.2.1-4.2z"/><path d="M9.8 14.5l6.4-3.6-6.4-3.6v7.2z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-primary rounded-sm">
              {/* TikTok Icon placeholder using SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.71a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.57z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 max-w-4xl mx-auto uppercase">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KEEWAY SRBIJA</h4>
            <Link href="/novosti" className="text-xs font-saira text-white/90 hover:text-white transition-colors">NOVOSTI</Link>
            <Link href="/stores" className="text-xs font-saira text-white/90 hover:text-white transition-colors">PRODAJNA MESTA</Link>
            <Link href="/contact" className="text-xs font-saira text-white/90 hover:text-white transition-colors">POSTANITE DISTRIBUTER</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KOMPANIJA</h4>
            <Link href="/about" className="text-xs font-saira text-white/90 hover:text-white transition-colors">O NAMA</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h4 className="font-zuume text-white font-bold text-lg mb-2">KORISNIČKA PODRŠKA</h4>
            <Link href="/contact" className="text-xs font-saira text-white/90 hover:text-white transition-colors">KONTAKTIRAJTE NAS</Link>
          </div>
        </div>

        {/* Center Logo - LET'S RIDE TOGETHER */}
        <div className="flex justify-center mb-16 border-b border-white/20 pb-12">
          <div className="text-center font-zuume text-4xl lg:text-5xl text-white uppercase tracking-wider">
            <span className="font-light">LET'S RIDE </span>
            <span className="font-bold">TOGETHER</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          
          
          <div className="text-xs md:text-[10px] font-saira text-white text-center flex-1">
            <p className="mb-2">Keeway © Copyright - 2026 Keeway - Sva prava zadržana</p>
            <div className="flex gap-4 justify-center">
              <Link href="#" className="hover:text-white/80 transition-colors">Uslovi korišćenja</Link>
              <Link href="#" className="hover:text-white/80 transition-colors">Politika privatnosti</Link>
              <Link href="#" className="hover:text-white/80 transition-colors">Politika kolačića</Link>
            </div>
          </div>


        </div>
        
      </div>
    </footer>
  );
}
