"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/app/[locale]/components/LocaleProvider";
import type { Projet } from "@/lib/donnees";
import ListeProjets from "./ListeProjets";

export default function Projets() {
    const { locale, dictionary } = useLocale();
    const [projets, setProjets] = useState<Projet[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/projets?locale=${locale}`)
            .then(res => res.json())
            .then(data => setProjets(data))
            .catch(() => setProjets([]))
            .finally(() => setIsLoading(false));
    }, [locale]);

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 text-center font-bangers tracking-wider">{dictionary.projects.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>

                <ListeProjets projets={projets} dictionary={dictionary} locale={locale} isLoading={isLoading} />
            </div>
        </div>
    );
}

