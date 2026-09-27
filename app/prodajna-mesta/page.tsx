import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreLocator from "./StoreLocator";
import { getLocationLabel, locations } from "./locations";
import StructuredData from "../components/StructuredData";
import InnerPageHero from "../components/InnerPageHero";
import { absoluteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "Prodajna mesta i ovlašćeni servisi",
  description: "Pronađite ovlašćena Keeway prodajna mesta i servisne lokacije širom Srbije.",
  alternates: { canonical: "/prodajna-mesta" },
  openGraph: { url: "/prodajna-mesta", title: "Keeway prodajna mesta i servisi u Srbiji", description: "Adrese, telefoni i navigacija do ovlašćenih Keeway prodavaca i servisera širom Srbije." },
};

const locationsStructuredData = {
  "@context": "https://schema.org", "@type": "ItemList", "@id": `${absoluteUrl("/prodajna-mesta")}#lokacije`, name: "Keeway prodajna mesta i ovlašćeni servisi u Srbiji", numberOfItems: locations.length,
  itemListElement: locations.map((location, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "LocalBusiness", name: `${location.name} — ${getLocationLabel(location.type)}`, parentOrganization: { "@id": `${absoluteUrl("/")}#organization` }, address: { "@type": "PostalAddress", streetAddress: location.address, addressLocality: location.city, addressCountry: "RS" }, telephone: location.phoneHref, email: location.email, geo: { "@type": "GeoCoordinates", latitude: location.coordinates[0], longitude: location.coordinates[1] } } })),
};

export default function StoresPage() {
  return (
    <>
      <StructuredData data={locationsStructuredData} />
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[84px] lg:pt-[96px]">
        <InnerPageHero eyebrow="Keeway Srbija" title="Prodajna mesta i lokacije servisa" description="Pronađite ovlašćenog prodavca ili servis u svojoj blizini. Izaberite tip lokacije, pregledajte kontakte i pokrenite navigaciju." summary={
            <div className="flex gap-8">
                <div>
                  <strong className="block font-zuume text-5xl font-bold italic leading-none text-white">05</strong>
                  <span className="font-saira text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Prodajnih mesta
                  </span>
                </div>
                <div>
                  <strong className="block font-zuume text-5xl font-bold italic leading-none text-white">06</strong>
                  <span className="font-saira text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Servisnih lokacija
                  </span>
                </div>
            </div>
        } />

        <StoreLocator />
      </main>
      <Footer />
    </>
  );
}
