import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { sæsonBilleder } from "@/lib/images";
import { getSæson, sæsonIndhold } from "@/lib/sæson";

export default function SæsonGrid() {
  const sæson = getSæson();
  const indhold = sæsonIndhold[sæson];

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="sæson-titel">
      <Container>
        <FadeIn>
          <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="sæson-titel"
              className="text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Lige nu på bakken
            </h2>
            <p className="text-sm text-[var(--color-muted)] sm:text-right max-w-xs sm:max-w-sm">
              {indhold.beskrivelse}
            </p>
          </div>
        </FadeIn>

        {/* Asymmetrisk fotocollage — ikke et symmetrisk grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-12 sm:gap-4">
          {/* Stort billede til venstre */}
          <FadeIn className="col-span-2 sm:col-span-7 sm:row-span-2" delay={0.1}>
            <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden">
              <Image
                src={sæsonBilleder[0].url}
                alt={sæsonBilleder[0].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 58vw"
              />
              <div className="absolute bottom-3 left-3 bg-[var(--color-cream)]/90 px-2.5 py-1 text-xs text-[var(--color-ink)]">
                {sæsonBilleder[0].alt.split(",")[0]}
              </div>
            </div>
          </FadeIn>

          {/* Tre mindre billeder til højre */}
          <FadeIn className="col-span-1 sm:col-span-5" delay={0.2}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={sæsonBilleder[1].url}
                alt={sæsonBilleder[1].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, 42vw"
              />
              <div className="absolute bottom-3 left-3 bg-[var(--color-cream)]/90 px-2.5 py-1 text-xs text-[var(--color-ink)]">
                {sæsonBilleder[1].alt.split(",")[0]}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="col-span-1 sm:col-span-2" delay={0.3}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={sæsonBilleder[2].url}
                alt={sæsonBilleder[2].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, 17vw"
              />
            </div>
          </FadeIn>

          <FadeIn className="col-span-2 sm:col-span-3" delay={0.35}>
            <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden">
              <Image
                src={sæsonBilleder[3].url}
                alt={sæsonBilleder[3].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="absolute bottom-3 left-3 bg-[var(--color-cream)]/90 px-2.5 py-1 text-xs text-[var(--color-ink)]">
                {sæsonBilleder[3].alt.split(",")[0]}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
