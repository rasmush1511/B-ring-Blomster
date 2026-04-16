import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import KategoriGalleri from "@/components/sections/KategoriGalleri";

export const metadata: Metadata = {
  title: "Sortiment",
  description:
    "Tulipaner, narcisser, forårsanemoner, krydderurter, buketter og haveplanter fra Båring Blomster på Båring Bakke. Sortimentet skifter med sæsonerne.",
  openGraph: {
    title: "Sortiment — Båring Blomster",
    description:
      "Se hvad der er i butikken — forårsblomster, sommerplanter, buketter og meget mere.",
  },
};

export default function Sortiment() {
  return (
    <>
      {/* Intro */}
      <section className="pt-16 pb-10 bg-[var(--color-primary)]" aria-labelledby="sortiment-titel">
        <Container>
          <FadeIn className="pt-12">
            <div className="inline-block mb-4">
              <h1
                id="sortiment-titel"
                className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl max-w-xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hvad er der på bakken
              </h1>
              <RoughUnderline className="mt-2" width="60%" />
            </div>
            <p className="text-white/65 max-w-md leading-relaxed text-sm mt-3">
              Sortimentet følger årstiderne. Fra de første forårsblomster til efterårslyngen — her er et overblik over, hvad du normalt kan finde hos os.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Kategori-galleri */}
      <KategoriGalleri />
    </>
  );
}
