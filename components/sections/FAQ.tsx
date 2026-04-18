"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import { faqSpørgsmål } from "@/lib/data";

function FAQItem({ spørgsmål, svar, index }: { spørgsmål: string; svar: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-svar-${index}`;

  return (
    <div className="border-b border-[var(--color-secondary)]/12">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors min-h-[44px]"
      >
        <span className="font-medium">{spørgsmål}</span>
        <span
          className={`shrink-0 transition-colors ${open ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`}
          aria-hidden="true"
        >
          {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
        </span>
      </button>
      <div
        id={id}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{svar}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-14 lg:py-24 texture-cream" aria-labelledby="faq-titel">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-4">
            <div className="inline-block">
              <h2
                id="faq-titel"
                className="text-2xl font-normal sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hyppige spørgsmål
              </h2>
              <RoughUnderline className="mt-2" width="80%" />
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <div>
              {faqSpørgsmål.map((item, i) => (
                <FAQItem key={i} spørgsmål={item.spørgsmål} svar={item.svar} index={i} />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
