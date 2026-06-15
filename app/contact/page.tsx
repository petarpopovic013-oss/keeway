import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";

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
