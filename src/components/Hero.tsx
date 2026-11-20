import { useLang } from "../i18n";
import { cn } from "../utils/cn";
import { ArrowRight, Quote, Shield, Star } from "./Icons";
import { LogoEmblem } from "./Logo";
import { container } from "./ui";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const [line1, line2] = h.title.split("\n");

  return (
    <>
      <section
        id="top"
        className="relative isolate flex min-h-[calc(100svh-84px)] flex-col justify-end overflow-hidden bg-dark"
      >
        <img
          src="images/hero-architecture.jpg"
          alt={h.imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-dark-900 via-dark/80 to-dark/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(47,63,143,0.35),transparent_60%)]"
          aria-hidden="true"
        />

        <div className={cn(container, "relative pt-32 pb-10 md:pt-40 md:pb-14")}>
          <span className="fade-up inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[12.5px] font-bold text-white backdrop-blur-sm">
            <LogoEmblem className="h-5 w-5" glow={false} />
            {h.badge}
          </span>

          <h1
            className="fade-up mt-6 max-w-4xl font-heading text-[2.35rem] font-bold leading-[1.35] text-white sm:text-5xl lg:text-[3.4rem] ltr:leading-[1.15]"
            style={{ animationDelay: "120ms" }}
          >
            <span className="block">{line1}</span>
            <span className="block text-white/85">{line2}</span>
          </h1>

          <div
            className="fade-up mt-8 flex flex-col gap-7 border-t border-white/15 pt-7 md:flex-row md:items-end md:justify-between"
            style={{ animationDelay: "240ms" }}
          >
            <p className="max-w-2xl text-[15.5px] leading-[2] text-white/80 md:text-[17px]">
              {h.text}
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:border-white hover:bg-white hover:text-primary"
              >
                {h.primary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-[13.5px] font-semibold text-white/80 underline underline-offset-8 transition hover:text-white"
              >
                {h.secondary}
              </a>
            </div>
          </div>

          {/* Hero stat line */}
          <div
            className="fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80"
            style={{ animationDelay: "360ms" }}
          >
            <span className="flex items-center gap-2 text-[13px] font-semibold">
              <Shield className="h-4 w-4 text-white/60" />
              {h.stat}
            </span>
            <span className="hidden h-3 w-px bg-white/25 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2 text-[13px] font-semibold">
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-white/70" />
                ))}
              </span>
              {h.note}
            </span>
          </div>
        </div>
      </section>

      {/* Founder's statement */}
      <div className="bg-white py-16 md:py-20">
        <div className={container}>
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-10 w-10 text-primary/30" />
            <p className="mt-6 text-lg leading-[2] text-text-dark md:text-xl">
              {t.founder.quote}
            </p>
            <div className="mt-8 inline-flex items-center gap-4">
              <img
                src="images/haitham-portrait.jpg"
                alt=""
                className="h-14 w-14 rounded-full object-cover object-top ring-4 ring-primary/10"
                width={56}
                height={56}
                loading="lazy"
              />
              <div className="text-start">
                <p className="font-heading text-lg font-bold text-dark">
                  {t.founder.name}
                </p>
                <p className="text-[13px] font-semibold text-primary">
                  {t.founder.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
