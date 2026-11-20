import { useEffect, useState } from "react";
import { office, sectionIds } from "../content";
import { useLang } from "../i18n";
import { cn } from "../utils/cn";
import { ArrowRight, Close, Globe, Menu, Phone } from "./Icons";
import { Logo } from "./Logo";
import { container } from "./ui";

export function Header() {
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          "border-b border-line bg-white/95 backdrop-blur-md",
          scrolled && "shadow-[0_8px_30px_-18px_rgba(15,33,68,0.35)]",
        )}
      >
        <div
          className={cn(
            container,
            "flex items-center justify-between gap-6 transition-all duration-300",
            scrolled ? "h-[70px]" : "h-[84px]",
          )}
        >
          <a href="#top" className="flex shrink-0 items-center transition-opacity hover:opacity-95" aria-label={t.brand.name}>
            <Logo variant="header" tone="dark" />
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label={t.nav[0]}>
            {sectionIds.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors",
                  active === id
                    ? "bg-primary/8 text-primary"
                    : "text-text-dark/75 hover:bg-primary/5 hover:text-primary",
                )}
              >
                {t.nav[i]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={t.langSwitchLabel}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-bold text-text-dark transition hover:border-primary hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              {t.langSwitch}
            </button>
            <a
              href={office.phoneHref}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-primary transition hover:border-primary md:inline-flex"
              aria-label={t.contact.phone}
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[14px] font-bold text-white transition hover:bg-primary-700 sm:inline-flex"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.menuOpen}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-dark xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-white transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav[0]}
        aria-hidden={!open}
      >
        <div className={cn(container, "flex h-[84px] items-center justify-between")}>
          <Logo variant="header" tone="dark" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.menuClose}
            tabIndex={open ? 0 : -1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-dark"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>
        <nav className={cn(container, "flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-6")}>
          {sectionIds.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-between border-b border-line py-4 text-xl font-bold text-dark"
            >
              {t.nav[i]}
              <ArrowRight className="h-5 w-5 text-primary rtl:-scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-[15px] font-bold text-white"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
          </a>
        </nav>
      </div>
    </>
  );
}
