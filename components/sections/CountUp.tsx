"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

interface CountItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const items: CountItem[] = [
  {
    value: 100,
    suffix: "%",
    label: "Selvbetjening",
    sublabel: "Du vælger selv — vi stoler på dig",
  },
  {
    value: 7,
    suffix: "",
    label: "Måneder om året",
    sublabel: "Marts til oktober",
  },
  {
    value: 5,
    suffix: " min",
    label: "Fra Middelfart",
    sublabel: "Et hurtigt stop langs vejen",
  },
];

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 1400;
    const steps = 50;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = 1 - Math.pow(1 - current / steps, 3);
      setCount(Math.round(progress * target));
      if (current >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function CountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-label="Fakta om butikken"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="px-6 py-8 sm:py-0 text-center sm:text-left first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0">
                <div
                  className="mb-2 text-5xl font-normal text-white lg:text-6xl"
                  style={{
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "-0.03em",
                  }}
                  aria-live="polite"
                >
                  <AnimatedNumber
                    target={item.value}
                    suffix={item.suffix}
                    inView={inView}
                  />
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
                  {item.label}
                </p>
                <p className="text-xs text-white/55 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
