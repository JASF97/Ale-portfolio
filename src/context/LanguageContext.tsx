import { useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Lang } from "../i18n/translations";
import { LanguageContext } from "./useLanguage";

const STORAGE_KEY = "lang";

const isLang = (value: unknown): value is Lang =>
  value === "es" || value === "en";

// Idioma guardado; si no hay, el del navegador (inglés solo si lo pide; si no, español).
const getInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // localStorage puede no estar disponible (modo privado)
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sin almacenamiento: el idioma solo vive en esta visita
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
