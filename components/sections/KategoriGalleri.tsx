import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { kategorier } from "@/lib/data";
import { kategoriBilleder } from "@/lib/images";

export default function KategoriGalleri() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="kategorier-titel">
      <Container>
        <FadeIn>
          <h2
            id="kategorier-titel"
            className="mb-3 text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hvad finder du hos os
          </h2>
          <p className="mb-12 text-[var(--color-muted)] max-w-md text-sm">
            Sortimentet skifter med sæsonerne. Her er et overblik over de kategorier vi normalt har på lager.
          </p>
        </FadeIn>

        {/* Asymmetrisk kollage-layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategorier.map((kat, i) => {
            const billede = kategoriBilleder[kat.slug];
            // Varier størrelser for at undgå symmetrisk grid
            const isWide = i === 0 || i === 4;

            return (
              <FadeIn
                key={kat.slug}
                delay={i * 0.07}
                className={isWide ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="group relative overflow-hidden bg-[var(--color-cream)]">
                  <div className={`relative overflow-hidden ${isWide ? "aspect-[16/7] lg:aspect-[4/3]" : "aspect-[4/3]"}`}>
                    {billede && (
                      <Image
                        src={billede.url}
                        alt={billede.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-[var(--color-ink)]/10 group-hover:bg-[var(--color-ink)]/5 transition-colors duration-500" />
                  </div>
                  <div className="p-5">
                    <h3
                      className="mb-1.5 text-lg font-normal text-[var(--color-ink)]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {kat.navn}
                    </h3>
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
