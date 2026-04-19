import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import BotanicalDecor from "@/components/ui/BotanicalDecor";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Historie() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden texture-cream" aria-labelledby="historie-titel">
      <BotanicalDecor
        variant="leaves-right"
        className="right-0 top-0 w-40 h-full lg:w-48"
        opacity={0.08}
      />

      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-5">
            <div className="inline-block">
              <h2
                id="historie-titel"
                className="font-normal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Blomster fra Båring bakke
              </h2>
              <RoughUnderline className="mt-2" width="80%" />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-6 lg:col-start-7" delay={0.15}>
            <div className="space-y-5 text-[var(--color-muted)] leading-relaxed text-sm sm:text-base">
              <p>
                På toppen af Båring Bakke ved Middelfartvej 103 ligger vores lille havecenter – med udsigt over Lillebælt.
                Om morgenen er der helt stille, og senere på dagen blæser det lidt mere. Det passer planterne ret godt.
              </p>
              <p>
                Det er en selvbetjeningsbutik.<br />
                Du går bare rundt, finder det du vil have, og betaler med MobilePay.
              </p>
              <p>
                Ingen kø. Du klarer det hele i dit eget tempo.
              </p>
              <p>
                Udvalget skifter med sæsonen.<br />
                Vi åbner, når foråret sådan rigtigt er i gang, og lukker igen, når haven går i dvale.
              </p>
            </div>

            <blockquote className="mt-7 border-l-2 border-[var(--color-accent)] pl-5">
              <p
                className="text-base text-[var(--color-secondary)] font-normal sm:text-lg"
                style={{ fontFamily: "var(--font-serif)", lineHeight: 1.4 }}
              >
                Du er velkommen til at kigge forbi – også bare for udsigten.
              </p>
            </blockquote>
          </FadeIn>
        </div>

        <SectionDivider variant="simple" className="mt-14 lg:mt-16" />
      </Container>
    </section>
  );
}
