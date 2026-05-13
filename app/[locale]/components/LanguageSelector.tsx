"use client";

import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const FranceFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" preserveAspectRatio="none" className={className}>
    <rect width="3" height="2" fill="#ED2939" />
    <rect width="2" height="2" fill="#fff" />
    <rect width="1" height="2" fill="#002395" />
  </svg>
);

const UKFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" preserveAspectRatio="none" className={className}>
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const languages = [
  { code: "fr", name: "Français", Flag: FranceFlag },
  { code: "en", name: "English", Flag: UKFlag },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const selectedLang = languages.find(l => l.code === locale) || languages[0];

  const toggleLanguage = () => {
    const nextLangCode = locale === "fr" ? "en" : "fr";
    
    // 1. Mettre à jour l'état React (change instantanément la langue à l'écran)
    setLocale(nextLangCode);
    
    // 2. Mettre à jour l'URL sans déclencher la navigation serveur Next.js
    if (pathname) {
      const segments = pathname.split('/');
      if (segments.length >= 2) {
        segments[1] = nextLangCode;
      }
      const newUrl = segments.join('/');
      window.history.pushState(null, '', newUrl);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative inline-flex items-center justify-center h-9 px-2 gap-1.5 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 focus:outline-none"
      aria-label="Toggle language"
      title={locale === "fr" ? "Switch to English" : "Passer en français"}
    >
      <div className="relative">
        <selectedLang.Flag className="w-[20px] h-[14px] rounded-[2px] shadow-sm object-cover group-hover:scale-110 transition-transform" />
      </div>
      <Languages className="w-4 h-4 text-neutral-400 group-hover:text-portal-green transition-colors" />
    </button>
  );
}

