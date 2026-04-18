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
    description: "Se hvad der er i butikken — forårsblomster, sommerplanter, buketter og meget mere.",
  },
};

export default function Sortiment() {
  return (
    <>
      {/* Intro */}
      <section
        className="pt-[62px]"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="sortiment-titel"
      >
        <Container>
          <div className="py-16 lg:py-20">
            <FadeIn>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/60">
                Sæsonens planter & blomster
              </p>
              <div className="inline-block mb-4">
                <h1 id="sortiment-titel" className="text-white max-w-xl">
                  Hvad er der på bakken
                </h1>
                <RoughUnderline className="mt-2" width="55%" />
              </div>
              <p className="text-white/65 max-w-md leading-relaxed text-sm mt-3">
                Sortimentet følger årstiderne. Fra de første forårsblomster til efterårslyngen — her er et overblik over hvad du normalt kan finde hos os.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <KategoriGalleri />
    </>
  );
}
