"use client";

import { useLocale } from "./LocaleProvider";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="py-4 border-t border-black/10 dark:border-white/5 text-center text-sm text-neutral-500">
      <p>&copy; {new Date().getFullYear()} {locale === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}. Mickaël MARCO.</p>
    </footer>
  );
}
