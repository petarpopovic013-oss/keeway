"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export type EquipmentProduct = { name: string; image: string; model?: string };
export type EquipmentCategory = { id: "kacige" | "koferi" | "nosaci"; label: string; eyebrow: string; description: string; cover: string; products: EquipmentProduct[] };

export default function EquipmentCatalogue({ categories }: { categories: EquipmentCategory[] }) {
  const [activeId, setActiveId] = useState<EquipmentCategory["id"]>(categories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<EquipmentProduct | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const productTriggerRef = useRef<HTMLButtonElement | null>(null);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  useEffect(() => {
    if (!selectedProduct) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProduct(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      productTriggerRef.current?.focus();
    };
  }, [selectedProduct]);

  const openProduct = (product: EquipmentProduct, trigger: HTMLButtonElement) => {
    productTriggerRef.current = trigger;
    setSelectedProduct(product);
  };

  return (
    <section className="px-4 py-16 md:px-6 md:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div><span className="mb-3 block font-saira text-[10px] font-bold uppercase tracking-[0.24em] text-keeway-orange">Izaberi kategoriju</span><h2 className="font-zuume text-5xl font-bold italic uppercase leading-none text-black md:text-7xl">Šta tražiš?</h2></div>
          <p className="max-w-md font-saira text-sm leading-relaxed text-gray-500 md:text-right">Ponuda izabrane kategorije prikazaće se odmah ispod.</p>
        </div>
        <fieldset aria-label="Kategorije dodatne opreme" className="grid min-w-0 gap-3 md:grid-cols-3 md:gap-5">
          <legend className="sr-only">Izaberite kategoriju dodatne opreme</legend>
          {categories.map((category, index) => {
            const isActive = category.id === activeId;
            return (
              <label key={category.id} className={`group relative min-h-[220px] min-w-0 cursor-pointer overflow-hidden border p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-keeway-orange focus-within:ring-offset-2 md:min-h-[300px] md:p-8 ${isActive ? "border-black bg-white text-white shadow-[0_18px_55px_rgba(245,67,8,0.18)]" : "border-black/15 bg-[#f5f5f3] text-black hover:border-keeway-orange"}`}>
                <input type="radio" name="equipment-category" value={category.id} checked={isActive} onChange={() => setActiveId(category.id)} className="sr-only" />
                <Image src={category.cover} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className={`object-contain object-right-bottom transition-all duration-500 group-hover:scale-105 ${isActive ? "opacity-100" : "opacity-55 mix-blend-multiply"}`} />
                <div aria-hidden="true" className={`absolute inset-0 ${isActive ? "bg-gradient-to-r from-[#101010] via-[#101010]/90 to-[#101010]/10" : "bg-gradient-to-r from-[#f5f5f3] via-[#f5f5f3]/85 to-transparent"}`} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-5"><span className={`font-saira text-[10px] font-bold tracking-[0.2em] ${isActive ? "text-keeway-orange-light" : "text-gray-500"}`}>0{index + 1}</span><span aria-hidden="true" className={`grid h-6 w-6 place-items-center rounded-full border ${isActive ? "border-keeway-orange" : "border-black/30"}`}><span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-keeway-orange" : "bg-transparent"}`} /></span></div>
                  <div className="mt-14 max-w-[270px]"><p className={`mb-2 font-saira text-[9px] font-bold uppercase tracking-[0.18em] ${isActive ? "text-white/55" : "text-gray-500"}`}>{category.eyebrow}</p><h3 className="font-zuume text-4xl font-bold italic uppercase leading-none md:text-5xl">{category.label}</h3><p className={`mt-4 font-saira text-[11px] ${isActive ? "text-white/70" : "text-gray-600"}`}>{category.products.length.toString().padStart(2, "0")} proizvoda</p></div>
                </div>
              </label>
            );
          })}
        </fieldset>
        <div key={activeCategory.id} className="animate-fadeInUp pt-20 md:pt-28">
          <div className="mb-8 grid gap-6 border-b-2 border-black pb-8 md:mb-0 md:grid-cols-[1fr_auto] md:items-end md:pb-10"><div><span className="mb-3 block font-saira text-[10px] font-bold uppercase tracking-[0.24em] text-keeway-orange">Trenutno prikazano</span><h2 className="font-zuume text-6xl font-bold italic uppercase leading-none text-black md:text-8xl">{activeCategory.label}</h2><p className="mt-4 max-w-xl font-saira text-sm leading-relaxed text-gray-500 md:text-base">{activeCategory.description}</p></div><span className="font-saira text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{activeCategory.products.length.toString().padStart(2, "0")} proizvoda</span></div>
          <div>
            {activeCategory.products.map((product, index) => (
              <article
                key={`${product.image}-${product.name}`}
                className="group relative grid grid-cols-[96px_1fr] items-center gap-5 border-b border-black/10 py-5 transition-colors duration-300 hover:bg-[#f7f7f5] sm:grid-cols-[150px_1fr] sm:gap-8 sm:py-7 md:grid-cols-[220px_1fr_auto] md:gap-12 md:px-6 lg:grid-cols-[280px_1fr_auto]"
              >
                <button
                  type="button"
                  aria-label={`Uvećaj sliku: ${product.name}`}
                  onClick={(event) => openProduct(product, event.currentTarget)}
                  className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-keeway-orange"
                >
                  <span className="sr-only">Uvećaj sliku: {product.name}</span>
                </button>
                <div className="relative aspect-square w-full overflow-hidden bg-[#f3f3f1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 96px, (max-width: 767px) 150px, 280px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04] md:p-4"
                  />
                </div>
                <div className="min-w-0 py-2">
                  {product.model && (
                    <p className="mb-2 font-saira text-[9px] font-bold uppercase tracking-[0.2em] text-keeway-orange md:text-[10px]">
                      Keeway {product.model}
                    </p>
                  )}
                  <h3 className="break-words font-zuume text-2xl font-bold italic uppercase leading-tight text-black sm:text-3xl md:max-w-3xl md:text-4xl">
                    {product.name}
                  </h3>
                </div>
                <div className="hidden items-center gap-5 md:flex">
                  <span className="flex items-center gap-2 font-saira text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    <ZoomIn aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
                    Uvećaj
                  </span>
                  <span className="font-saira text-[10px] font-bold tracking-[0.2em] text-gray-400">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="equipment-lightbox-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null);
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6 md:p-10"
        >
          <div className="relative flex h-full max-h-[900px] w-full max-w-[1200px] flex-col bg-white shadow-2xl">
            <div className="flex min-h-16 items-center justify-between gap-5 border-b border-black/10 px-4 sm:px-6">
              <div className="min-w-0 py-3">
                {selectedProduct.model && (
                  <p className="mb-1 font-saira text-[9px] font-bold uppercase tracking-[0.2em] text-keeway-orange">
                    Keeway {selectedProduct.model}
                  </p>
                )}
                <h2 id="equipment-lightbox-title" className="truncate font-zuume text-2xl font-bold italic uppercase text-black sm:text-3xl">
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Zatvori uvećanu sliku"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/15 text-black transition-colors hover:border-keeway-orange hover:bg-keeway-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-keeway-orange focus-visible:ring-offset-2"
              >
                <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-[#f3f3f1]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 1200px"
                className="object-contain p-3 sm:p-6 md:p-10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
