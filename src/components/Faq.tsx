import { useState } from "react";
import { useLang } from "../i18n";
import { cn } from "../utils/cn";
import { ChevronDown } from "./Icons";
import { container, Eyebrow, Reveal, SectionTitle } from "./ui";

export function Faq() {
  const { t } = useLang();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand py-20 md:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <SectionTitle className="mt-4">{f.title}</SectionTitle>
            </div>
          </Reveal>

          <div className="space-y-3 lg:col-span-8">
            {f.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 50}>
                  <div
                    className={cn(
                      "rounded-2xl border bg-white transition-colors",
                      isOpen ? "border-primary/40" : "border-line",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        id={`faq-btn-${i}`}
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-start"
                      >
                        <span className="text-[16px] font-bold text-dark">
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                            isOpen
                              ? "rotate-180 bg-primary text-white"
                              : "bg-primary-50 text-primary",
                          )}
                          aria-hidden="true"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      className={cn(
                        "grid transition-all duration-400 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-[1.95] text-muted">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
