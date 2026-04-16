import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Historie from "@/components/sections/Historie";
import Slideshow from "@/components/sections/Slideshow";
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

      {/* Slideshow-sektion: "Lige nu på bakken" */}
      <section aria-labelledby="slideshow-titel" className="py-12 lg:py-16 texture-white">
        <Container>
          <FadeIn>
            <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="slideshow-titel"
                className="text-2xl font-normal sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Lige nu på bakken
              </h2>
              <p className="text-sm text-[var(--color-muted)] sm:text-right max-w-xs">
                Forårets første farver er fremme
              </p>
            </div>
          </FadeIn>
        </Container>
        <Slideshow billeder={slideshowBilleder} interval={5500} />
      </section>

      <SectionDivider variant="flower" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" />

      <PraktiskInfo />
      <FacebookFeed />
    </>
  );
}
