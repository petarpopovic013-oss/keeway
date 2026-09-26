import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";

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
      <main className="flex-grow flex flex-col w-full bg-white pt-24 min-h-screen">
        <ContactPageForm />
      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
