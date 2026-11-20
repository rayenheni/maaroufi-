import { useLang } from "../i18n";
import { ArrowRight, Check, FileText, Landmark, Shield } from "./Icons";
import { LogoEmblem } from "./Logo";
import { btnPrimary, container, Eyebrow, Reveal, SectionTitle } from "./ui";

const icons = [Landmark, Shield, FileText, Check];

export function WhyChooseUs() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section id="why" className="relative overflow-hidden bg-sand py-20 md:py-28">
      <div className={container}>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>{w.eyebrow}</Eyebrow>
              <SectionTitle className="mt-4">{w.title}</SectionTitle>
              <p className="mt-4 font-heading text-xl font-bold text-primary">
                {w.sub}
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.95] text-muted">
                {w.text}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {w.features.map((f, i) => {
                const Icon = icons[i] ?? Check;
                return (
                  <Reveal key={f.t} delay={i * 70}>
                    <div className="group flex items-start gap-4 rounded-2xl bg-white/70 p-4 transition-colors hover:bg-white">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[16.5px] font-bold text-dark">
                          {f.t}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] leading-[1.9] text-muted">
                          {f.d}
                        </p>
                      </div>
                      <ArrowRight className="mt-4 h-4 w-4 shrink-0 text-primary/50 transition-transform group-hover:-translate-x-1 rtl:-scale-x-100 rtl:group-hover:translate-x-1" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Image + floating badge */}
          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <div className="relative pb-10 lg:pb-0">
                <img
                  src="images/haitham-portrait.jpg"
                  alt={w.imgAlt}
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_18%] shadow-[0_40px_80px_-36px_rgba(15,33,68,0.5)]"
                  width={900}
                  height={1125}
                  loading="lazy"
                />
                <div className="absolute -bottom-2 start-0 max-w-[21rem] rounded-2xl bg-primary p-5 text-white shadow-[0_28px_60px_-24px_rgba(47,63,143,0.9)] sm:start-6 lg:-bottom-6">
                  <div className="flex items-center gap-3.5">
                    <LogoEmblem className="h-11 w-11 shrink-0" glow={false} variant="white" />
                    <div>
                      <p className="text-[14px] font-bold leading-snug">
                        {w.badge}
                      </p>
                      <p className="mt-1 text-[12px] text-white/75">
                        {w.badgeSub}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute end-4 top-4 flex gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                  {w.stats.map((st) => (
                    <div
                      key={st.l}
                      className="border-e border-line px-2 text-center last:border-0"
                    >
                      <p className="font-latin text-xl font-semibold text-primary" dir="ltr">
                        {st.v}
                      </p>
                      <p className="mt-0.5 text-[9.5px] font-semibold text-muted">
                        {st.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={140} className="mt-12">
          <a href="#contact" className={btnPrimary}>
            {t.cta}
            <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
