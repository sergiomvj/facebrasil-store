import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnerModels } from "@/components/sections/PartnerModels";
import { Innovation } from "@/components/sections/Innovation";
import { VisualIdentity } from "@/components/sections/VisualIdentity";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-editorial-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <ValueProps />
        <HowItWorks />
        <PartnerModels />
        <Innovation />
        <VisualIdentity />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
