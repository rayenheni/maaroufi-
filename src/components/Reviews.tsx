import { useLang } from "../i18n";
import { GoogleG, Star } from "./Icons";
import { container, Eyebrow, Reveal, SectionTitle } from "./ui";

export function Reviews() {
  const { t } = useLang();
  const r = t.reviews;

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className={container}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>{r.eyebrow}</Eyebrow>
          </div>
          <SectionTitle className="mt-4">{r.title}</SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {r.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,33,68,0.35)]">
                <div className="flex items-center justify-between">
                  <GoogleG className="h-6 w-6" />
                  <div className="flex gap-0.5" aria-label="5/5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 text-[#F5B301]" />
                    ))}
                  </div>
                </div>
                <p className="mt-5 flex-1 text-[14.5px] leading-[1.9] text-text-dark">
                  {item.text}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 font-heading text-lg font-bold text-primary">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-dark">{item.name}</p>
                    <p className="text-[12px] text-muted">
                      {r.source} · {item.when}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
