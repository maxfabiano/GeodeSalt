import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";
export type Loc = { pt: string; en: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (l: Loc) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };
  return (
    <I18nCtx.Provider value={{ lang, setLang, t: (l) => l[lang] }}>{children}</I18nCtx.Provider>
  );
}

export function useI18n() {
  const c = useContext(I18nCtx);
  if (!c) throw new Error("useI18n outside provider");
  return c;
}
