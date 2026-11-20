import { useLang } from "../i18n";
import { container, Eyebrow, Reveal, SectionTitle } from "./ui";

export function Practices() {
  const { t } = useLang();
  const p = t.practices;

  return (
    <section id="practices" className="bg-white py-20 md:py-28">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{p.eyebrow}</Eyebrow>
              <SectionTitle className="mt-4">{p.title}</SectionTitle>
              <p className="mt-6 text-[16px] leading-[1.95] text-muted">{p.text}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {p.items.map((item, i) => (
              <Reveal key={item.t} delay={(i % 2) * 90} className="h-full">
                <article className="group relative h-full rounded-2xl bg-primary-50 p-7 pt-[88px] transition-all duration-500 hover:bg-primary">
                  <span
                    className="absolute start-0 top-0 flex h-[72px] w-[72px] items-center justify-center rounded-ee-2xl rounded-ss-2xl bg-primary font-latin text-3xl text-primary-50 transition-colors duration-500 group-hover:bg-primary-50 group-hover:text-primary"
                    dir="ltr"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-dark transition-colors duration-500 group-hover:text-white">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.9] text-muted transition-colors duration-500 group-hover:text-white/80">
                    {item.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
