import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import BotanicalDecor from "@/components/ui/BotanicalDecor";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Historie() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden texture-cream" aria-labelledby="historie-titel">
      <BotanicalDecor
        variant="leaves-right"
        className="right-0 top-0 w-48 h-full"
        opacity={0.08}
      />

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="inline-block">
              <h2
                id="historie-titel"
                className="text-3xl font-normal lg:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                En butik på toppen af bakken
              </h2>
              <RoughUnderline className="mt-2" width="80%" />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.15}>
            <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                Butikken ligger på Middelfartvej 103 — øverst på Båring Bakke med udsigt over Lillebælt. Her er stille om morgenen og vindigt om eftermiddagen, og det kan mærkes i planterne.
              </p>
              <p>
                Det er selvbetjening. Du går selv rundt, vælger det du vil have med hjem, og betaler med MobilePay. Ingen kø, ingen dikkedarer — bare planter og udsigt.
              </p>
              <p>
                Vi holder åbent fra de første forårsblomster til efteråret lukker havesæsonen ned.
              </p>
            </div>

            {/* Grøn pull-quote */}
            <blockquote className="mt-8 border-l-2 border-[var(--color-accent)] pl-5">
              <p
                className="text-lg text-[var(--color-secondary)] font-normal"
                style={{ fontFamily: "var(--font-serif)", lineHeight: 1.4 }}
              >
                "Tag hvad du vil have — betal med MobilePay. Ingen dikkedarer."
              </p>
            </blockquote>
          </FadeIn>
        </div>

        <SectionDivider variant="simple" className="mt-16" />
      </Container>
    </section>
  );
}
