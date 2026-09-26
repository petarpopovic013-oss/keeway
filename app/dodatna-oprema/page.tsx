import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EquipmentCatalogue, { type EquipmentCategory, type EquipmentProduct } from "./EquipmentCatalogue";
import StructuredData from "../components/StructuredData";
import { absoluteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "Dodatna oprema za motocikle",
  description: "Pogledajte kacige, centralne i bočne kofere i nosače kofera za Keeway motocikle u Srbiji.",
  alternates: { canonical: "/dodatna-oprema" },
  openGraph: { url: "/dodatna-oprema", title: "Dodatna oprema za Keeway motocikle", description: "Kacige, koferi i nosači kofera namenjeni Keeway motociklima i skuterima.", images: [{ url: "/dodatna-oprema/kacige/Airoh%20Commander%202%20Carbon.jpg", alt: "Dodatna oprema za Keeway motocikle" }] },
};

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function encodePublicPath(relativePath: string) {
  return `/${relativePath.split(path.sep).map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function getProducts(directory: string, publicDirectory: string): EquipmentProduct[] {
  const absoluteDirectory = path.join(process.cwd(), "public", directory);
  return readdirSync(absoluteDirectory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => {
      const relativePath = path.relative(absoluteDirectory, path.join(entry.parentPath, entry.name));
      const model = path.dirname(relativePath) === "." ? undefined : path.dirname(relativePath);
      return {
        name: path.basename(entry.name, path.extname(entry.name)).replace(/\s+/g, " ").replace(/\bjet\b/gi, "Jet").trim(),
        image: encodePublicPath(path.join(publicDirectory, relativePath)),
        model: model?.replaceAll(path.sep, " / "),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, "sr"));
}

const categories: EquipmentCategory[] = [
  { id: "kacige", label: "Kacige", eyebrow: "Zaštita i stil", description: "Integralne, modularne, Jet i enduro kacige za svaki stil vožnje.", cover: "/dodatna-oprema/kacige/Airoh%20Commander%202%20Carbon.jpg", products: getProducts("dodatna-oprema/kacige", "dodatna-oprema/kacige") },
  { id: "koferi", label: "Koferi", eyebrow: "Prostor za svaki put", description: "Centralni i bočni koferi za svakodnevnu vožnju i duge avanture.", cover: "/dodatna-oprema/koferi/TOP%20CASE%20TR48%20TERRA%20.webp", products: getProducts("dodatna-oprema/koferi", "dodatna-oprema/koferi") },
  { id: "nosaci", label: "Nosači kofera", eyebrow: "Za Keeway modele", description: "Nosači centralnih i bočnih kofera namenjeni Keeway motociklima i skuterima.", cover: "/dodatna-oprema/nosaci/VIESTE%20125%3A300%20XDV/TOP%20CASE%20FITTING%20KIT%20KEEWAY%20VIESTE%20XDV%20125%3A300.webp", products: getProducts("dodatna-oprema/nosaci", "dodatna-oprema/nosaci") },
];

const equipmentStructuredData = {
  "@context": "https://schema.org", "@type": "ItemList", "@id": `${absoluteUrl("/dodatna-oprema")}#oprema`, name: "Dodatna oprema za Keeway motocikle",
  numberOfItems: categories.reduce((total, category) => total + category.products.length, 0),
  itemListElement: categories.flatMap((category) => category.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", name: product.name, image: absoluteUrl(product.image), category: category.label, brand: category.id === "nosaci" ? { "@type": "Brand", name: "Keeway" } : undefined } }))),
};

export default function EquipmentPage() {
  return (
    <>
      <StructuredData data={equipmentStructuredData} />
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[84px] lg:pt-[96px]">
        <section className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:px-6 md:py-24 lg:px-12 lg:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[480px] w-[480px] rounded-full border-[88px] border-white/[0.035] md:h-[700px] md:w-[700px] md:border-[125px]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-[linear-gradient(135deg,transparent_20%,rgba(245,67,8,0.18)_100%)]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="mb-7 h-1.5 w-24 -skew-x-[45deg] bg-keeway-gradient md:w-32" />
            <p className="mb-4 font-saira text-xs font-bold uppercase tracking-[0.24em] text-keeway-orange-light">Keeway kolekcija</p>
            <h1 className="max-w-5xl break-words font-zuume text-[48px] font-bold italic uppercase leading-[0.88] tracking-[0.01em] text-white sm:text-7xl md:text-8xl lg:text-[112px]">Dodatna oprema</h1>
            <div className="mt-9 flex max-w-5xl flex-col gap-7 border-t border-white/15 pt-7 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl font-saira text-base leading-relaxed text-white/70 md:text-lg">Izaberi kategoriju i pronađi opremu za gradsku vožnju, putovanja i svaki sledeći kilometar.</p>
              <p className="shrink-0 font-saira text-[10px] font-bold uppercase tracking-[0.2em] text-keeway-orange-light">03 kategorije</p>
            </div>
          </div>
        </section>
        <EquipmentCatalogue categories={categories} />
      </main>
      <Footer />
    </>
  );
}
