import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-[#03040B] flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-10">
        <Hero />
        <NewsletterForm />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
