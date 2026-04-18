import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Historie from "@/components/sections/Historie";
import Slideshow from "@/components/sections/Slideshow";
import CountUp from "@/components/sections/CountUp";
import PraktiskInfo from "@/components/sections/PraktiskInfo";
import FacebookFeed from "@/components/sections/FacebookFeed";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionDivider from "@/components/ui/SectionDivider";
import { slideshowBilleder } from "@/lib/images";

export const metadata: Metadata = {
  title: "Båring Blomster — Selvbetjening på Båring Bakke",
  description:
    "Selvbetjeningsblomsterbutik på toppen af Båring Bakke ved Middelfart. Forårsblomster, sommerplanter, buketter og haveplanter. Betaling med MobilePay. Åbent marts–oktober.",
  openGraph: {
    title: "Båring Blomster — Blomster fra bakken",
    description:
      "Selvbetjeningsblomsterbutik på toppen af Båring Bakke. Forårsblomster, sommerplanter og buketter. Åbent marts–oktober.",
  },
};

export default function Forside() {
  return (
    <>
      <Hero />
      <Historie />

      {/* Slideshow */}
      <section aria-labelledby="slideshow-titel" className="py-14 lg:py-20 texture-white">
        <Container>
          <FadeIn>
            <div className="mb-10 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="slideshow-titel">Lige nu på bakken</h2>
              <p className="text-sm text-[var(--color-muted)] sm:text-right max-w-xs pb-1">
                Forårets første farver er fremme
              </p>
            </div>
          </FadeIn>
        </Container>
        <Slideshow billeder={slideshowBilleder} interval={5500} />
      </section>

      {/* CountUp */}
      <CountUp />

      <SectionDivider
        variant="flower"
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6"
      />

      <PraktiskInfo />
      <FacebookFeed />
    </>
  );
}
