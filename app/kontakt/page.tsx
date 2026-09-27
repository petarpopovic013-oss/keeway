import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";
import InnerPageHero from "../components/InnerPageHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte Keeway Srbija za informacije o motociklima, skuterima, cenama, dostupnosti, dodatnoj opremi, prodaji i ovlašćenom servisu.",
  alternates: { canonical: "/kontakt" },
  openGraph: { url: "/kontakt", title: "Kontaktirajte Keeway Srbija", description: "Pošaljite upit Keeway Srbija timu za modele, opremu, prodaju i servis." },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[84px] lg:pt-[96px]">
        <InnerPageHero eyebrow="Keeway Srbija" title="Kontakt" description="Imate pitanje o modelima, cenama, dostupnosti, dodatnoj opremi ili servisu? Pošaljite nam upit i naš tim će vam odgovoriti u najkraćem mogućem roku." summary={
          <div><strong className="block font-zuume text-5xl font-bold italic leading-none text-white">01</strong><span className="font-saira text-[10px] uppercase tracking-[0.16em] text-white/50">Mesto za sve upite</span></div>
        } />
        <section className="w-full bg-[#f3f3f1] px-4 py-14 md:px-6 md:py-20 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1440px]"><ContactPageForm /></div></section>
      </main>
      <Footer />
    </>
  );
}
