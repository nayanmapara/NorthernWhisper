import Image from "next/image";
import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      {/* <Header/> */}
      <Hero/>
      <NewsletterForm/>
      {/* <Socials/> */}
      {/* <Footer/> */}
    </main>
  );
}
