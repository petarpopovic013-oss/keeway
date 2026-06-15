"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <section className="w-full bg-white text-black py-12 md:py-20 lg:py-32 flex justify-center px-6 font-saira not-italic normal-case">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#F54308]"></div>
            <h2 className="text-sm uppercase tracking-widest text-[#F54308] font-normal ![text-shadow:none] ![-webkit-text-stroke:0]">KONTAKT</h2>
            <div className="w-12 h-[2px] bg-[#F54308]"></div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-black" style={{ WebkitTextStroke: "0.42px currentColor" }}>
            IMATE PITANJE? <br />
            STUPITE U KONTAKT SA NAMA.
          </h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mt-6">
            Popunite formu ispod i naš tim će vam odgovoriti u najkraćem mogućem roku.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative pt-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="IME I PREZIME"
                required
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase"
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
                className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase"
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
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer uppercase"
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
              className="w-full bg-transparent border-b border-gray-300 py-2 text-lg focus:outline-none focus:border-[#F54308] transition-colors placeholder-transparent peer resize-none uppercase"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#F54308] cursor-text uppercase"
            >
              VAŠA PORUKA
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-12 py-4 bg-black text-white overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 w-full h-full bg-[#F54308] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 text-sm uppercase tracking-widest flex items-center gap-2">
                POŠALJI PORUKU
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
