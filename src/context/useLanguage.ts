import { createContext, useContext } from "react";
import { translations, type Dictionary, type Lang } from "../i18n/translations";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Textos de la interfaz en el idioma actual. */
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

export const useLanguage = () => useContext(LanguageContext);
