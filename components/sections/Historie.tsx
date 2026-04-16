import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function Historie() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="historie-titel">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <h2
              id="historie-titel"
              className="text-3xl font-normal text-[var(--color-ink)] lg:text-4xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              En butik på toppen af bakken
            </h2>
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
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
