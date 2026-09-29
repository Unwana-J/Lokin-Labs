import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { FeySpotlight } from "@/components/FeySpotlight";
import { ProductLedger } from "@/components/ProductLedger";
import { FounderProfile } from "@/components/FounderProfile";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas selection:bg-[#2E3D27] selection:text-white">
      <Header />
      <Hero />
      <Manifesto />
      <FeySpotlight />
      <ProductLedger />
      <FounderProfile />
      <FAQ />
      <Footer />
    </main>
  );
}
