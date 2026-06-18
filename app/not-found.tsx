import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center w-full min-h-[60vh] bg-[#E5E5E5] px-4 pt-32 pb-20">
        <h1 className="text-6xl md:text-8xl font-zuume font-bold italic text-black uppercase tracking-tight mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-saira font-bold text-gray-800 uppercase tracking-tight mb-6 text-center">
          Stranica nije pronađena
        </h2>
        <p className="text-lg font-saira text-gray-600 mb-10 text-center max-w-md">
          Izgleda da traženi model više ne postoji ili je link neispravan. Pokušajte da se vratite na početnu stranicu.
        </p>
        <Link 
          href="/"
          className="bg-track-cyan hover:bg-black transition-all duration-300 text-white font-zuume italic text-center py-4 px-10 uppercase tracking-widest text-[15px] shadow-[0_4px_14px_0_rgba(245,67,8,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)]"
        >
          Vrati se na početnu
        </Link>
      </main>
      <Footer />
    </>
  );
}
