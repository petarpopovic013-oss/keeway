import Header from "./components/Header";
import Hero from "./components/Hero";
import ParallaxBanner from "./components/ParallaxBanner";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";

import Footer from "./components/Footer";

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
