import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeySpotlight } from "@/components/FeySpotlight";
import { Manifesto } from "@/components/Manifesto";
import { ProductLedger } from "@/components/ProductLedger";
import { FounderProfile } from "@/components/FounderProfile";
import { FAQ } from "@/components/FAQ";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas selection:bg-terra-crimson selection:text-white">
      <Header />
      <Hero />
      <FeySpotlight />
      <Manifesto />
      <ProductLedger />
      <FounderProfile />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
