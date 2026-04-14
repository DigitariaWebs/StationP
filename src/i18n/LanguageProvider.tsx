"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "streetcharge-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "nl") return stored;
    }
    return "fr";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === "fr" ? "nl" : "fr")),
    []
  );

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
