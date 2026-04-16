"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

type FormState = "idle" | "sending" | "success" | "error";

export default function KontaktForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = {
      navn: (form.elements.namedItem("navn") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      besked: (form.elements.namedItem("besked") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputClasses =
    "w-full border border-[var(--color-ink)]/20 bg-white px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-colors";

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="formular-titel">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2
              id="formular-titel"
              className="mb-3 text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Skriv til os
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm max-w-sm">
              Spørgsmål om buketter, planter eller bestillinger — send en besked, så vender vi tilbage.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            {state === "success" ? (
              <div
                role="alert"
                className="border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8"
              >
                <h3
                  className="mb-2 text-lg font-normal text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Tak for din besked
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Vi vender tilbage hurtigst muligt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="navn"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Navn
                    </label>
                    <input
                      id="navn"
                      name="navn"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Dit navn"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="din@email.dk"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="besked"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Besked
                    </label>
                    <textarea
                      id="besked"
                      name="besked"
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Hvad kan vi hjælpe med?"
                      aria-required="true"
                    />
                  </div>

                  {state === "error" && (
                    <p role="alert" className="text-sm text-red-600">
                      Noget gik galt. Prøv igen eller ring til os.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={state === "sending"}
                    className="w-full sm:w-auto"
                  >
                    {state === "sending" ? "Sender..." : "Send besked"}
                  </Button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
