"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { faqSpørgsmål } from "@/lib/data";

function FAQItem({
  spørgsmål,
  svar,
  index,
}: {
  spørgsmål: string;
  svar: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-svar-${index}`;

  return (
    <div className="border-b border-[var(--color-ink)]/10">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors min-h-[44px]"
      >
        <span className="font-medium">{spørgsmål}</span>
        <span className="shrink-0 text-[var(--color-muted)]" aria-hidden="true">
          {open ? (
            <Minus size={16} strokeWidth={1.5} />
          ) : (
            <Plus size={16} strokeWidth={1.5} />
          )}
        </span>
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`faq-q-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{svar}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="faq-titel">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <h2
              id="faq-titel"
              className="text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hyppige spørgsmål
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <div role="list">
              {faqSpørgsmål.map((item, i) => (
                <FAQItem
                  key={i}
                  spørgsmål={item.spørgsmål}
                  svar={item.svar}
                  index={i}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
