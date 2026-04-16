import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function Kort() {
  return (
    <section className="py-8" aria-labelledby="kort-titel">
      <Container>
        <FadeIn>
          <h2
            id="kort-titel"
            className="mb-6 text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Find vej
          </h2>
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <iframe
              title="Båring Blomster på Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.0!2d9.9833!3d55.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e3c4b5d7c6f%3A0x1234567890abcdef!2sMiddelfartvej%20103%2C%205466%20Asperup!5e0!3m2!1sda!2sdk!4v1699999999999"
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps med markering på Middelfartvej 103, 5466 Asperup"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Middelfartvej 103, 5466 Asperup — øverst på Båring Bakke
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
