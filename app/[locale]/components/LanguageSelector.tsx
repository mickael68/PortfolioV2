"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const FranceFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className}>
    <rect width="3" height="2" fill="#ED2939" />
    <rect width="2" height="2" fill="#fff" />
    <rect width="1" height="2" fill="#002395" />
  </svg>
);

const UKFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
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
  const [isOpen, setIsOpen] = useState(false);
  const selectedLang = languages.find(l => l.code === locale) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwitch = (langCode: string) => {
    setIsOpen(false);
    
    // 1. Mettre à jour l'état React (change instantanément la langue à l'écran)
    setLocale(langCode);
    
    // 2. Mettre à jour l'URL sans déclencher la navigation serveur Next.js
    if (pathname) {
      const segments = pathname.split('/');
      if (segments.length >= 2) {
        segments[1] = langCode;
      }
      const newUrl = segments.join('/');
      window.history.pushState(null, '', newUrl);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex items-center justify-center h-9 px-2 gap-1.5 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 focus:outline-none"
        aria-label="Select language"
      >
        <selectedLang.Flag className="w-[22px] h-[16px] rounded-[2px] shadow-sm border border-neutral-200 dark:border-neutral-700/50 object-cover" />
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1f2937] border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2.5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors ${
                    selectedLang.code === lang.code
                      ? "text-portal-green font-medium"
                      : "text-neutral-700 dark:text-neutral-200"
                  }`}
                  onClick={() => handleSwitch(lang.code)}
                >
                  <lang.Flag className="w-[22px] h-[16px] rounded-[2px] shadow-sm border border-neutral-200 dark:border-neutral-700/50 object-cover" />
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

