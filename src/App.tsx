import { useCallback, useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ArrowUp, WhatsApp } from "./components/Icons";
import { Practices } from "./components/Practices";
import { Reviews } from "./components/Reviews";
import { CtaBand, Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { office } from "./content";
import { LangProvider, useLang } from "./i18n";
import { cn } from "./utils/cn";

function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href={`https://wa.me/${office.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5"
      >
        <WhatsApp className="h-7 w-7" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Top"
        className={cn(
          "fixed bottom-5 start-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary-700",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

function Site() {
  const { t } = useLang();
  const [preset, setPreset] = useState<{ title: string | null; token: number }>({
    title: null,
    token: 0,
  });

  const pick = useCallback((title: string) => {
    setPreset((cur) => ({ title, token: cur.token + 1 }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-text-dark">
      <a
        href="#main"
        className="sr-only z-[100] focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        {t.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services onPick={pick} />
        <CtaBand />
        <WhyChooseUs />
        <Practices />
        <Reviews />
        <Faq />
        <Contact preset={preset.title} token={preset.token} />
      </main>
      <Footer />
      <Floating />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
