"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const dictionaries: Record<string, typeof frDict> = {
  fr: frDict,
  en: enDict,
};

type Dictionary = typeof frDict;

interface LocaleContextType {
  locale: string;
  dictionary: Dictionary;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: string;
}) {
  const [locale, setLocaleState] = useState(initialLocale);
  const dictionary = dictionaries[locale] || dictionaries.fr;

  const setLocale = useCallback((newLocale: string) => {
    setLocaleState(newLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, dictionary, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
