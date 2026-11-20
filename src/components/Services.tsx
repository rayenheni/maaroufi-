import { useState } from "react";
import { useLang } from "../i18n";
import { cn } from "../utils/cn";
import {
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  Chat,
  Coins,
  Family,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  Lock,
  Shield,
  Users,
} from "./Icons";
import { container, Reveal, SectionTitle } from "./ui";

const icons = {
  chat: Chat,
  building: Building,
  family: Family,
  gavel: Gavel,
  briefcase: Briefcase,
  users: Users,
  landmark: Landmark,
  coins: Coins,
  calendar: Calendar,
  shield: Shield,
  fileText: FileText,
  handshake: Handshake,
  lock: Lock,
} as const;

/* Ornamental arrow + rule used to frame the centred heading */
function Ornament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 24"
      aria-hidden="true"
      className={cn("hidden h-5 w-24 shrink-0 text-primary/50 md:block", flip && "-scale-x-100")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M118 12H14M26 2 12 12l14 10" />
    </svg>
  );
}

export function Services({ onPick }: { onPick: (title: string) => void }) {
  const { t } = useLang();
  const s = t.services;
  const tabs = t.tabs;
  const [tab, setTab] = useState<"civil" | "criminal">("civil");

  const items = tab === "civil" ? s.civil : s.criminal;

  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className={container}>
        {/* Pill tab switcher: civil / criminal */}
        <Reveal className="flex justify-center">
          <div
            role="tablist"
            aria-label={s.eyebrow}
            className="inline-flex items-center gap-1 rounded-full border border-line bg-sand p-1.5 shadow-sm"
          >
            {(
              [
                ["civil", tabs.civil],
                ["criminal", tabs.criminal],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  "rounded-full px-7 py-3 text-[14.5px] font-bold transition-all duration-300 sm:px-10 sm:py-3.5 sm:text-[16px]",
                  tab === key
                    ? "bg-primary text-white shadow-[0_10px_24px_-12px_rgba(47,63,143,0.9)]"
                    : "text-text-dark/70 hover:text-primary",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="flex items-center justify-center gap-5">
            <Ornament />
            <SectionTitle className="max-w-4xl text-center text-2xl sm:text-3xl lg:text-[2.1rem]">
              {s.title}
            </SectionTitle>
            <Ornament flip />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[15.5px] leading-[1.95] text-muted md:text-[16.5px]">
            {s.text}
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href="#practices"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-[13.5px] font-bold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              {tabs.all}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Chat;
            return (
              <Reveal key={item.t} delay={(i % 3) * 80} className="h-full">
                <article className="group flex h-full flex-col items-center rounded-[1.75rem] border border-line bg-white px-6 py-8 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_55px_-32px_rgba(47,63,143,0.5)]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold leading-snug text-dark">
                    {item.t}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-[1.9] text-muted">
                    {item.d}
                  </p>
                  <button
                    type="button"
                    onClick={() => onPick(item.t)}
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-primary transition-all group-hover:gap-3"
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLang();
  const c = t.ctaBand;
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div
        className="pointer-events-none absolute -end-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -start-20 -bottom-24 h-80 w-80 rounded-full bg-dark/40 blur-3xl"
        aria-hidden="true"
      />
      <div className={container}>
        <Reveal className="relative grid items-center gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold leading-[1.4] text-white md:text-4xl ltr:leading-[1.2]">
              {c.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.9] text-white/80">
              {c.text}
            </p>
          </div>
          <div className="lg:text-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-primary shadow-xl transition hover:-translate-y-0.5"
            >
              {c.button}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
