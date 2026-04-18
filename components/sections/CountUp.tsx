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

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
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
      // ease-out curve
      const progress = 1 - Math.pow(1 - current / steps, 3);
      setCount(Math.round(progress * target));
      if (current >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function CountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-[var(--color-secondary)]"
      aria-label="Fakta om butikken"
    >
      <Container>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-3 bg-white/10">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="bg-[var(--color-secondary)] px-8 py-10 text-center sm:text-left">
                <div
                  className="mb-2 text-5xl font-normal text-white lg:text-6xl"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.03em" }}
                  aria-live="polite"
                >
                  <AnimatedNumber target={item.value} suffix={item.suffix} inView={inView} />
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-white/45 leading-relaxed">
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
