"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BilledEntry } from "@/lib/images";

interface SlideshowProps {
  billeder: BilledEntry[];
  interval?: number;
}

export default function Slideshow({ billeder, interval = 5500 }: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % billeder.length);
  }, [billeder.length]);

  const prev = () => setCurrent((c) => (c - 1 + billeder.length) % billeder.length);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, reducedMotion, next, interval]);

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-ink)]"
      style={{ height: "72vh", minHeight: "500px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Billedgalleri af sæsonens planter og blomster"
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="absolute inset-0"
          aria-roledescription="slide"
          aria-label={`Billede ${current + 1} af ${billeder.length}: ${billeder[current].alt}`}
        >
          <Image
            src={billeder[current].url}
            alt={billeder[current].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-[var(--color-ink)]/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation-prikker */}
      <div
        className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2"
        role="tablist"
        aria-label="Slide-navigation"
      >
        {billeder.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === current
                ? "w-7 bg-[var(--color-accent)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Gå til billede ${i + 1}`}
          />
        ))}
      </div>

      {/* Pile — kun desktop */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center bg-[var(--color-ink)]/35 text-white hover:bg-[var(--color-ink)]/60 transition-colors"
        aria-label="Forrige billede"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex h-11 w-11 items-center justify-center bg-[var(--color-ink)]/35 text-white hover:bg-[var(--color-ink)]/60 transition-colors"
        aria-label="Næste billede"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>
    </section>
  );
}
