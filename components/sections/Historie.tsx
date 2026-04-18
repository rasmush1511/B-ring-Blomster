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
                På toppen af Båring Bakke, lige ved Middelfartvej 103, ligger butikken med udsigt ud over Lillebælt. Her er der stille om morgenen og lidt mere vind op ad dagen – og det er præcis sådan planterne har det bedst.
              </p>
              <p>
                Det er en selvbetjenings blomsterbutik.<br />
                Du går rundt i dit eget tempo, finder det du vil have med hjem, og betaler med MobilePay.<br />
                Ingen kø, ingen smalltalk hvis du ikke gider – bare planter, luft og ro.
              </p>
              <p>
                Sortimentet følger sæsonen.<br />
                Vi åbner, når foråret begynder at kunne mærkes, og lukker igen, når haven går i dvale.
              </p>
            </div>

            <blockquote className="mt-7 border-l-2 border-[var(--color-accent)] pl-5">
              <p
                className="text-base text-[var(--color-secondary)] font-normal sm:text-lg"
                style={{ fontFamily: "var(--font-serif)", lineHeight: 1.4 }}
              >
                Kom forbi – også bare for udsigten.
              </p>
            </blockquote>
          </FadeIn>
        </div>

        <SectionDivider variant="simple" className="mt-14 lg:mt-16" />
      </Container>
    </section>
  );
}
