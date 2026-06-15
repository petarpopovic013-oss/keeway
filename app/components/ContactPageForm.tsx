"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forma poslata", formData);
    alert("Hvala na poruci! Kontaktiraćemo vas uskoro.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full flex-grow bg-white font-saira not-italic normal-case">
      
      {/* Leva kolona: Forma (Stroga leva polovina sa unutrašnjim container-om) */}
      <div className="w-full lg:w-1/2 flex justify-end">
        {/* Unutrašnji container koji drži formu poravnatu sa ostatkom sajta ali samo na levoj polovini */}
        <div className="w-full max-w-[720px] px-6 py-16 lg:py-24 lg:pr-16 lg:pl-6 xl:pr-24 flex flex-col justify-center">
          
          <div className="text-left mb-16">
            <div className="flex items-center justify-start gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#F54308]"></div>
              <h2 className="text-xl uppercase tracking-widest text-[#F54308] font-normal ![text-shadow:none] ![-webkit-text-stroke:0]">KONTAKT</h2>
            </div>
            <h3 className="text-4xl md:text-5xl mb-4 leading-tight text-black font-zuume italic uppercase font-normal">
              IMATE PITANJE? <br />
              STUPITE U KONTAKT SA NAMA.
            </h3>
            <p className="text-lg text-gray-600 mt-6 uppercase">
              POPUNITE FORMU ISPOD I NAŠ TIM ĆE VAM ODGOVORITI U NAJKRAĆEM MOGUĆEM ROKU.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              <div className="relative pt-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="IME I PREZIME"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase text-black"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#F54308] cursor-text uppercase"
                >
                  IME I PREZIME
                </label>
              </div>

              <div className="relative pt-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADRESA"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase text-black"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#F54308] cursor-text uppercase"
                >
                  EMAIL ADRESA
                </label>
              </div>
            </div>

            <div className="relative pt-4">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="NASLOV PORUKE"
                required
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase text-black"
              />
              <label
                htmlFor="subject"
                className="absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#F54308] cursor-text uppercase"
              >
                NASLOV PORUKE
              </label>
            </div>

            <div className="relative pt-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="VAŠA PORUKA"
                required
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer resize-none uppercase text-black"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#F54308] cursor-text uppercase"
              >
                VAŠA PORUKA
              </label>
            </div>

            <div className="flex justify-start mt-6">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center px-12 py-4 bg-black text-white overflow-hidden transition-all hover:shadow-lg w-full md:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-[#F54308] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 text-xl font-zuume font-normal italic uppercase tracking-widest flex items-center gap-2">
                  POŠALJI PORUKU
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Desna kolona: Slika (Puna visina, lepi se do ivice ekrana) */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] relative">
        <Image
          src="/photos/contact page.png"
          alt="Kontakt"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

    </div>
  );
}
