import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import BotanicalDecor from "@/components/ui/BotanicalDecor";
import { kategorier } from "@/lib/data";
import { kategoriBilleder } from "@/lib/images";

// Asymmetrisk layout — varierede størrelser for organisk udtryk
const layoutMønster: ("wide" | "normal")[] = [
  "wide", "normal", "normal",
  "normal", "normal", "wide",
  "wide", "normal", "normal",
  "normal", "wide", "normal",
];

export default function KategoriGalleri() {
  return (
    <section
      className="relative overflow-hidden texture-cream py-14 lg:py-20"
      aria-labelledby="kategorier-titel"
    >
      <BotanicalDecor
        variant="leaves-right"
        className="right-0 top-1/4 w-40 h-96"
        opacity={0.06}
      />

      <Container>
        <FadeIn>
          <div className="mb-10 lg:mb-14">
            <div className="inline-block">
              <h2 id="kategorier-titel">
                Hvad finder du hos os
              </h2>
              <RoughUnderline className="mt-2" width="65%" />
            </div>
            <p className="mt-3 text-[var(--color-muted)] max-w-md text-sm">
              Sortimentet skifter med sæsonerne — fra de første forårsblomster til efterårslyngen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kategorier.map((kat, i) => {
            const billede = kategoriBilleder[kat.slug];
            const isWide = layoutMønster[i % layoutMønster.length] === "wide";

            return (
              <FadeIn
                key={kat.slug}
                delay={Math.min(i * 0.06, 0.35)}
                className={isWide ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="group relative overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400">
                  {/* Billede */}
                  <div className={`relative overflow-hidden ${isWide ? "aspect-[16/7] sm:aspect-[16/7] lg:aspect-[4/3]" : "aspect-[4/3]"}`}>
                    {billede ? (
                      <Image
                        src={billede.url}
                        alt={billede.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--color-primary)]/10" />
                    )}
                  </div>

                  {/* Tekst */}
                  <div className="px-5 py-4" style={{ borderTop: "2px solid var(--color-accent)" }}>
                    <h3 className="mb-1">{kat.navn}</h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed" style={{ maxWidth: "none" }}>
                      {kat.beskrivelse}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
