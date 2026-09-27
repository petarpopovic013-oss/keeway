"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <div className="grid grid-cols-1 items-stretch gap-6 font-saira not-italic normal-case lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.82fr)]">
      
      {/* Leva kolona: Forma (Stroga leva polovina sa unutrašnjim container-om) */}
      <div className="w-full border border-black/10 bg-white">
        {/* Unutrašnji container koji drži formu poravnatu sa ostatkom sajta ali samo na levoj polovini */}
        <div className="flex w-full flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
          
          <div className="mb-10 border-b border-black/10 pb-8 text-left">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-keeway-orange">Pošaljite upit</span>
            <h2 className="font-zuume text-4xl font-bold italic uppercase leading-[0.95] text-black md:text-6xl">Stupite u kontakt sa nama</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
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
                className="group relative inline-flex min-h-12 w-full items-center justify-center overflow-hidden bg-black px-12 py-4 text-white transition-all hover:shadow-lg md:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-[#F54308] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 text-xl font-zuume font-normal italic uppercase tracking-widest flex items-center gap-2">
                  POŠALJI PORUKU
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Desna kolona: Slika (Puna visina, lepi se do ivice ekrana) */}
      <div className="relative min-h-[420px] w-full overflow-hidden border border-black/10 sm:min-h-[520px] lg:min-h-full">
        <Image
          src="/photos/contact page.png"
          alt="Keeway motocikl — kontakt Keeway Srbija"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>
  );
}
