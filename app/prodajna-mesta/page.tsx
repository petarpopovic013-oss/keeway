import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreLocator from "./StoreLocator";
import { getLocationLabel, locations } from "./locations";
import StructuredData from "../components/StructuredData";
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
        <section className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:px-6 md:py-24 lg:px-12 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-36 h-[480px] w-[480px] rounded-full border-[88px] border-white/[0.035] md:h-[700px] md:w-[700px] md:border-[125px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_20%,rgba(245,67,8,0.12)_100%)]"
          />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-7 h-1.5 w-24 -skew-x-[45deg] bg-keeway-gradient md:w-32" />
            <p className="mb-4 font-saira text-xs font-bold not-italic uppercase tracking-[0.24em] text-keeway-orange-light">
              Keeway Srbija
            </p>
            <h1 className="max-w-5xl break-words font-zuume text-[46px] font-bold italic leading-[0.88] tracking-[0.01em] text-white sm:text-6xl md:text-8xl lg:text-[104px]">
              Prodajna mesta i lokacije servisa
            </h1>
            <div className="mt-9 flex max-w-5xl flex-col gap-8 border-t border-white/15 pt-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl font-saira text-base leading-relaxed text-white/70 md:text-lg">
                Pronađite ovlašćenog prodavca ili servis u svojoj blizini. Izaberite tip lokacije,
                pregledajte kontakte i pokrenite navigaciju.
              </p>
              <div className="flex shrink-0 gap-8 not-italic">
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
            </div>
          </div>
        </section>

        <StoreLocator />
      </main>
      <Footer />
    </>
  );
}
