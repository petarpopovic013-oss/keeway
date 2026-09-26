import Header from "./components/Header";
import Hero from "./components/Hero";
import ParallaxBanner from "./components/ParallaxBanner";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";

import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Keeway motocikli i skuteri u Srbiji",
  description: "Otkrijte Keeway motocikle i skutere u Srbiji — moderne modele, pristupačnu mobilnost, dodatnu opremu i ovlašćenu prodajno-servisnu mrežu.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Keeway motocikli i skuteri u Srbiji", description: "Istražite Keeway modele, dodatnu opremu, prodajna mesta i ovlašćene servise u Srbiji." },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col w-full bg-white">
        <Hero />
        <ParallaxBanner />
        <AboutUs />
        <ContactForm />

      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
