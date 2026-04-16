import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import KategoriGalleri from "@/components/sections/KategoriGalleri";
import { getSæson, sæsonIndhold } from "@/lib/sæson";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Forårsblomster, sommerplanter, buketter, krydderurter og haveplanter fra Båring Blomster på Båring Bakke. Sortimentet skifter med sæsonerne.",
  openGraph: {
    title: "Sortiment — Båring Blomster",
    description:
      "Se hvad der er i butikken — forårsblomster, sommerplanter, buketter og meget mere. Sortimentet skifter med sæsonerne.",
  },
};

export default function Sortiment() {
  const sæson = getSæson();
  const indhold = sæsonIndhold[sæson];

  return (
    <>
      {/* Lille hero-sektion */}
      <section className="pt-16 pb-12 bg-white" aria-labelledby="sortiment-titel">
        <Container>
          <FadeIn className="pt-12">
            <h1
              id="sortiment-titel"
              className="mb-5 text-3xl font-normal text-[var(--color-ink)] sm:text-4xl lg:text-5xl max-w-xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hvad er der på bakken
            </h1>
            <p className="text-[var(--color-muted)] max-w-md leading-relaxed">
              Sortimentet følger årstiderne. Fra de første forårsblomster til efterårslyngen — her er et overblik over, hvad du normalt kan finde hos os.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Sæsonsektion */}
      {sæson !== "vinter" && (
        <section className="py-12 bg-[var(--color-cream)]" aria-labelledby="sæson-nu-titel">
          <Container>
            <FadeIn>
              <div className="border-l-2 border-[var(--color-primary)] pl-6">
                <h2
                  id="sæson-nu-titel"
                  className="mb-2 text-xl font-normal text-[var(--color-ink)] sm:text-2xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {indhold.titel}
                </h2>
                <p className="mb-5 text-sm text-[var(--color-muted)]">{indhold.beskrivelse}</p>
                {indhold.planter.length > 0 && (
                  <ul className="flex flex-wrap gap-2" aria-label="Aktuelle planter">
                    {indhold.planter.map((plante) => (
                      <li
                        key={plante}
                        className="border border-[var(--color-primary)]/30 px-3 py-1 text-sm text-[var(--color-primary)]"
                      >
                        {plante}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {sæson === "vinter" && (
        <section className="py-12 bg-[var(--color-cream)]" aria-live="polite">
          <Container>
            <FadeIn>
              <div className="border-l-2 border-[var(--color-muted)] pl-6">
                <h2
                  className="mb-2 text-xl font-normal text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {indhold.titel}
                </h2>
                <p className="text-sm text-[var(--color-muted)]">{indhold.beskrivelse}</p>
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Kategorier */}
      <KategoriGalleri />

      {/* Stemningscitat */}
      <section className="py-16 bg-[var(--color-ink)]" aria-label="Citat">
        <Container>
          <FadeIn>
            <blockquote className="max-w-2xl mx-auto text-center">
              <p
                className="text-2xl font-normal text-white/90 leading-snug sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
              >
                "Alt hvad vi sælger, er hentet fra sæsonen. Ikke fra et lager."
              </p>
            </blockquote>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
