import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import BotanicalDecor from "@/components/ui/BotanicalDecor";
import { kategorier } from "@/lib/data";
import { kategoriBilleder } from "@/lib/images";

// Asymmetrisk layout: variér kortenes størrelse så det ikke ser ensartet ud
// Mønster: bred, normal, normal, bred, normal, normal, stor, normal, normal, bred, normal, normal
const layoutMønster: ("wide" | "normal" | "tall")[] = [
  "wide", "normal", "normal",
  "normal", "wide", "normal",
  "normal", "normal", "wide",
  "wide", "normal", "normal",
];

export default function KategoriGalleri() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden texture-cream"
      aria-labelledby="kategorier-titel"
    >
      <BotanicalDecor
        variant="leaves-right"
        className="right-0 top-1/4 w-40 h-96"
        opacity={0.07}
      />

      <Container>
        <FadeIn>
          <div className="mb-12">
            <div className="inline-block">
              <h2
                id="kategorier-titel"
                className="text-2xl font-normal sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hvad finder du hos os
              </h2>
              <RoughUnderline className="mt-2" width="70%" />
            </div>
            <p className="mt-4 text-[var(--color-muted)] max-w-md text-sm">
              Sortimentet skifter med sæsonerne. Her er et overblik over hvad vi normalt har på lager.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetrisk grid — varierede størrelser */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategorier.map((kat, i) => {
            const billede = kategoriBilleder[kat.slug];
            const layout = layoutMønster[i % layoutMønster.length];
            const isWide = layout === "wide";

            return (
              <FadeIn
                key={kat.slug}
                delay={Math.min(i * 0.06, 0.4)}
                className={isWide ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""}
              >
                <article className="group relative overflow-hidden bg-white border border-[var(--color-secondary)]/8 hover:border-[var(--color-secondary)]/20 transition-colors">
                  {/* Billede */}
                  <div
                    className={`relative overflow-hidden ${
                      isWide
                        ? "aspect-[21/9] sm:aspect-[21/9] lg:aspect-[4/3]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    {billede ? (
                      <Image
                        src={billede.url}
                        alt={billede.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--color-primary)]/10" />
                    )}
                    {/* Grøn overlay ved hover */}
                    <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/8 transition-colors duration-500" />
                  </div>

                  {/* Tekst */}
                  <div className="p-5 border-t border-[var(--color-secondary)]/8">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        className="text-base font-normal text-[var(--color-secondary)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {kat.navn}
                      </h3>
                      {/* Lille gul prik som markør */}
                      <span
                        className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)] shrink-0 opacity-70"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
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
