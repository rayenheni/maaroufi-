import { useLang } from "../i18n";
import { ArrowRight, Badge, FileText, Lock } from "./Icons";
import { btnPrimary, container, Eyebrow, Reveal, SectionTitle } from "./ui";

const icons = [Badge, Lock, FileText];

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className={container}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{a.eyebrow}</Eyebrow>
            <SectionTitle className="mt-4">{a.title}</SectionTitle>
            <p className="mt-6 text-[17px] leading-[1.95] text-muted">{a.text}</p>
            <a href="#contact" className={`${btnPrimary} mt-8`}>
              {a.more}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <img
                src="images/office-detail.jpg"
                alt={a.imgAlt}
                className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-32px_rgba(15,33,68,0.4)]"
                width={1200}
                height={960}
                loading="lazy"
              />
              <div
                className="absolute -bottom-5 -start-5 -z-10 h-full w-full rounded-[2rem] bg-primary-50"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {a.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.t} delay={i * 90}>
                <div className="flex h-full gap-5 rounded-2xl border border-line bg-sand/60 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-dark">{p.t}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                      {p.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
