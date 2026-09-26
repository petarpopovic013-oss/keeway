import { getMotorcycleBySlug, getMotorcycles } from '@/app/actions/motorcycles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TechSpecsAccordion from './TechSpecsAccordion';
import GallerySlideshow from './GallerySlideshow';
import ExpandableDescription from './ExpandableDescription';
import { Metadata } from 'next';
import StructuredData from '@/app/components/StructuredData';
import { absoluteUrl, truncateDescription } from '@/app/lib/seo';

export async function generateStaticParams() {
  const motorcycles = await getMotorcycles();
  return motorcycles.map((moto) => ({
    slug: moto.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const motorcycle = await getMotorcycleBySlug(resolvedParams.slug);

  if (!motorcycle) {
    return { title: 'Model nije pronađen', robots: { index: false, follow: false } };
  }
  const description = truncateDescription(motorcycle.short_description || `Saznajte cenu, specifikacije, opremu i karakteristike modela ${motorcycle.name}.`);
  const pathname = `/motocikli/${motorcycle.slug}`;
  return {
    title: motorcycle.name,
    description,
    alternates: { canonical: pathname },
    openGraph: { url: pathname, title: `${motorcycle.name} — cena i specifikacije`, description, images: motorcycle.image_url ? [{ url: motorcycle.image_url, alt: `${motorcycle.name} motocikl` }] : undefined },
    twitter: { card: 'summary_large_image', title: motorcycle.name, description, images: motorcycle.image_url ? [motorcycle.image_url] : undefined },
  };
}

export default async function MotorcyclePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const motorcycle = await getMotorcycleBySlug(resolvedParams.slug);

  if (!motorcycle) {
    notFound();
  }

  // Utility to conditionally add item if value exists
  const addItem = (label: string, value: string | number | null | undefined, suffix = '') => {
    if (value !== null && value !== undefined && value !== '') {
      return { label, value: `${value}${suffix}` };
    }
    return null;
  };

  // 1. Prepare base categories in Serbian
  const baseCategories = [
    {
      title: 'Informacije o modelu',
      items: [
        addItem('Naziv modela', motorcycle.name),
        addItem('Kategorija', motorcycle.category),
        addItem('Godina modela', motorcycle.model_year),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Motor',
      items: [
        addItem('Zapremina', motorcycle.displacement, ' cc'),
        addItem('Tip motora', motorcycle.engine_type),
        addItem('Prečnik x Hod klipa', motorcycle.bore_stroke),
        addItem('Snaga', motorcycle.power),
        addItem('Maks. obrtni moment', motorcycle.max_torque),
        addItem('Stepen kompresije', motorcycle.compression_ratio),
        addItem('Sistem ubrizgavanja goriva', motorcycle.fuel_system),
        addItem('Razvodni mehanizam', motorcycle.valve_train),
        addItem('Sistem paljenja', motorcycle.ignition_system),
        addItem('Starter', motorcycle.starter),
        addItem('Sistem podmazivanja', motorcycle.lubrication_system),
        addItem('Sistem hlađenja', motorcycle.cooling_system),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Prenos',
      items: [
        addItem('Tip menjača', motorcycle.gear_shifting_type),
        addItem('Finalni prenos', motorcycle.transmission_type),
        addItem('Tip kvačila', motorcycle.clutch_type),
        addItem('Kontrola proklizavanja (TCS)', motorcycle.tcs),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Šasija i vešanje',
      items: [
        addItem('Ram / Okvir', motorcycle.frame),
        addItem('Prednji točak', motorcycle.front_wheel),
        addItem('Prednje vešanje', motorcycle.front_suspension),
        addItem('Hod prednjeg vešanja', motorcycle.front_suspension_travel, ' mm'),
        addItem('Prednja guma', motorcycle.front_tyre),
        addItem('Zadnji točak', motorcycle.rear_wheel),
        addItem('Zadnje vešanje', motorcycle.rear_suspension),
        addItem('Hod zadnjeg vešanja', motorcycle.rear_suspension_travel, ' mm'),
        addItem('Zadnja guma', motorcycle.rear_tyre),
        addItem('Prednja kočnica', motorcycle.front_brake),
        addItem('Prečnik prednjeg diska', motorcycle.front_brake_diameter, ' mm'),
        addItem('Zadnja kočnica', motorcycle.rear_brake),
        addItem('Prečnik zadnjeg diska', motorcycle.rear_brake_diameter, ' mm'),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Dimenzije i težine',
      items: [
        addItem('Masa praznog vozila', motorcycle.curb_weight, ' kg'),
        addItem('Visina sedišta', motorcycle.seat_height, ' mm'),
        addItem('Međuosovinsko rastojanje', motorcycle.wheelbase, ' mm'),
        addItem('Ukupna dužina', motorcycle.overall_length, ' mm'),
        addItem('Ukupna širina', motorcycle.overall_width, ' mm'),
        addItem('Ukupna visina', motorcycle.overall_height, ' mm'),
        addItem('Klirens', motorcycle.ground_clearance, ' mm'),
        addItem('Kapacitet rezervoara', motorcycle.fuel_capacity, ' L'),
        addItem('Maksimalna brzina', motorcycle.top_speed, ' km/h'),
        addItem('Maksimalna nosivost', motorcycle.max_loadage, ' kg'),
        addItem('Baterija', motorcycle.battery),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Sistemi asistencije i kontrole',
      items: [
        addItem('Konfiguracija gasa', motorcycle.throttle_configuration),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Multimedija i komfor',
      items: [
        addItem('Indikator stepena prenosa', motorcycle.gear_indicator),
        addItem('USB priključak', motorcycle.usb_charging_port),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Osvetljenje',
      items: [
        addItem('Prednje svetlo', motorcycle.headlight),
        addItem('Zadnje svetlo', motorcycle.taillight),
        addItem('Migavci', motorcycle.turn_signal),
        addItem('Sva četiri migavca', motorcycle.hazard_light),
      ].filter(Boolean) as { label: string; value: string | number }[]
    },
    {
      title: 'Aktivna/pasivna bezbednost',
      items: [
        addItem('ABS sistem', motorcycle.abs_system),
        addItem('Sistem kontrole trakcije (TCS)', motorcycle.traction_control_system),
      ].filter(Boolean) as { label: string; value: string | number }[]
    }
  ];

  // 2. Add custom specifications from JSON
  if (motorcycle.specifications && Array.isArray(motorcycle.specifications)) {
    motorcycle.specifications.forEach((spec) => {
      if (spec.category && spec.label && spec.value) {
        // Find existing category
        const existingCat = baseCategories.find(c => c.title.toLowerCase() === spec.category.toLowerCase());
        if (existingCat) {
          existingCat.items.push({ label: spec.label, value: spec.value });
        } else {
          // Create new category
          baseCategories.push({
            title: spec.category,
            items: [{ label: spec.label, value: spec.value }]
          });
        }
      }
    });
  }

  const cleanName = motorcycle.name.replace('Keeway ', '').replace('', '');
  const productUrl = absoluteUrl(`/motocikli/${motorcycle.slug}`);
  const productStructuredData = {
    "@context": "https://schema.org", "@type": "Product", "@id": `${productUrl}#product`, name: motorcycle.name, url: productUrl,
    image: [motorcycle.image_url, ...(motorcycle.gallery || [])].filter(Boolean), description: motorcycle.short_description || `Keeway ${cleanName} dostupan u Srbiji.`, sku: motorcycle.slug, model: cleanName,
    brand: { "@type": "Brand", name: "Keeway" }, category: motorcycle.category || "Motocikli i skuteri", releaseDate: motorcycle.model_year ? String(motorcycle.model_year) : undefined,
    offers: motorcycle.price ? { "@type": "Offer", url: productUrl, priceCurrency: "EUR", price: motorcycle.price, availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@id": `${absoluteUrl("/")}#organization` } } : undefined,
  };
  const breadcrumbStructuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Naslovna", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: motorcycle.name, item: productUrl }] };

  return (
    <>
      <StructuredData data={[productStructuredData, breadcrumbStructuredData]} />
      <Header />
      <main className="flex-grow flex flex-col w-full bg-[#E5E5E5] pt-[100px] min-h-screen">
        
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center pt-8 pb-12 px-4">
          <div className="text-center mb-6 md:mb-10 w-full">
            <h1 className="text-3xl md:text-5xl font-zuume font-normal italic text-black uppercase tracking-tight break-words">
              {cleanName}
            </h1>
          </div>

          <div className="relative w-full max-w-4xl h-[25vh] md:h-[45vh] mb-6 md:mb-8">
            {motorcycle.image_url ? (
              <Image
                src={motorcycle.image_url}
                alt={motorcycle.name}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-saira uppercase tracking-widest text-sm">
                Slika nije dostupna
              </div>
            )}
          </div>

          {/* Key Specs Bar */}
          <div className="w-full bg-white shadow-sm border-y md:border md:border-gray-100 max-w-5xl mx-auto md:rounded-md grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 py-6 px-4">
            <div className="flex flex-col px-2 md:px-4 border-r border-gray-100 text-center md:text-left">
              <span className="text-[10px] md:text-[10px] font-saira font-bold text-track-cyan uppercase tracking-widest mb-1">
                Početna Cena
              </span>
              <span className="text-sm md:text-base font-saira font-bold not-italic text-gray-500">
                {motorcycle.price ? `€${motorcycle.price.toLocaleString()}` : 'N/A'}
              </span>
            </div>
            <div className="flex flex-col px-2 md:px-4 md:border-r md:border-gray-100 text-center md:text-left">
              <span className="text-[10px] md:text-[10px] font-saira font-bold text-track-cyan uppercase tracking-widest mb-1">
                Zapremina
              </span>
              <span className="text-sm md:text-base font-saira font-bold not-italic text-gray-500">
                {motorcycle.displacement ? `${motorcycle.displacement} cc` : 'N/A'}
              </span>
            </div>
            <div className="flex flex-col px-2 md:px-4 border-r border-gray-100 md:border-none text-center md:text-left">
              <span className="text-[10px] md:text-[10px] font-saira font-bold text-track-cyan uppercase tracking-widest mb-1">
                Snaga
              </span>
              <span className="text-sm md:text-base font-saira font-bold not-italic text-gray-500">
                {motorcycle.power || 'N/A'}
              </span>
            </div>
            <div className="flex flex-col px-2 md:px-4 text-center md:text-left">
              <span className="text-[10px] md:text-[10px] font-saira font-bold text-track-cyan uppercase tracking-widest mb-1">
                Maks. Obrtni moment
              </span>
              <span className="text-sm md:text-base font-saira font-bold not-italic text-gray-500">
                {motorcycle.max_torque || 'N/A'}
              </span>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white w-full py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-saira font-bold not-italic text-black uppercase tracking-tight mb-6">
              OPIS
            </h2>
            <h3 className="text-lg md:text-xl font-saira font-bold not-italic text-black mb-4">
              Keeway {cleanName}
            </h3>
            <ExpandableDescription text={motorcycle.short_description || ""} />
          </div>
        </section>

        {/* Gallery Section */}
        {motorcycle.gallery && motorcycle.gallery.length > 0 && (
          <section className="bg-white w-full pb-16">
            <GallerySlideshow images={motorcycle.gallery} motorcycleName={motorcycle.name} />
          </section>
        )}

        {/* Tech Specs Section */}
        <section className="bg-white w-full pb-24">
          <TechSpecsAccordion categories={baseCategories} />
        </section>

      </main>
      <Footer />
    </>
  );
}
