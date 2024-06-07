import Image from "next/image";
import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#03040B] flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-10">
        {/* <Header /> */}
        <Hero />
        <NewsletterForm />
        {/* <Socials /> */}
      </main>
      <Footer />
    </div>
  );
}
