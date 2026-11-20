import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Lang } from "./content";

type Ctx = { lang: Lang; t: Content; toggle: () => void };

const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  try {
    const saved = window.localStorage.getItem("lang");
    if (saved === "ar" || saved === "fr") return saved;
  } catch {
    /* storage unavailable — fall back to Arabic */
  }
  return "ar";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = content[lang].meta.title;
    try {
      window.localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable — nothing to persist */
    }
  }, [lang]);

  const toggle = useCallback(
    () => setLang((current) => (current === "ar" ? "fr" : "ar")),
    [],
  );

  const value = useMemo(
    () => ({ lang, t: content[lang], toggle }),
    [lang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
