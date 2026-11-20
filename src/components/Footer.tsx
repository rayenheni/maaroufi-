import { office, sectionIds } from "../content";
import { useLang } from "../i18n";
import { Mail, MapPin, Phone } from "./Icons";
import { Logo } from "./Logo";
import { container } from "./ui";

export function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-dark pt-16 pb-8 text-white">
      <div className={container}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center transition-opacity hover:opacity-95" aria-label={t.brand.name}>
              <Logo variant="footer" tone="light" />
            </a>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.9] text-white/70">{f.blurb}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[13px] font-bold text-white/60">{f.navTitle}</h2>
            <ul className="mt-5 space-y-3">
              {sectionIds.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-[14px] font-semibold text-white/85 transition hover:text-white">
                    {t.nav[i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[13px] font-bold text-white/60">{f.servicesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {[...t.services.civil.slice(0, 3), ...t.services.criminal.slice(0, 3)].map((s) => (
                <li key={s.t}>
                  <a href="#services" className="text-[14px] font-semibold text-white/85 transition hover:text-white">
                    {s.t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[13px] font-bold text-white/60">{f.contactTitle}</h2>
            <ul className="mt-5 space-y-3.5 text-[14px] text-white/85">
              <li>
                <a href={office.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-white">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                  <span>
                    {t.addressLines[0]}
                    {lang === "ar" ? "،" : ","} {t.addressLines[1]}
                  </span>
                </a>
              </li>
              <li>
                <a href={office.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-white/60" />
                  <span dir="ltr">{office.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${office.email}`} className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-white/60" />
                  <span dir="ltr" className="break-all">{office.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-[12px] leading-relaxed text-white/50">{f.disclaimer}</p>
          <p className="mt-3 text-[12.5px] text-white/60">
            © {new Date().getFullYear()} {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
