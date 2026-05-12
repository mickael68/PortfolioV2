"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/app/[locale]/components/LocaleProvider";
import type { Competence } from "@/lib/donnees";
import OngletsCompetences from "./OngletsCompetences";

export default function Competences() {
    const { locale, dictionary } = useLocale();
    const [competences, setCompetences] = useState<Competence[]>([]);

    useEffect(() => {
        fetch(`/api/competences?locale=${locale}`)
            .then(res => res.json())
            .then(data => setCompetences(data))
            .catch(() => setCompetences([]));
    }, [locale]);

    return (
        <div className="min-h-screen pt-24 px-4 pb-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 text-center font-bangers tracking-wider">{dictionary.skills.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>

                <OngletsCompetences competences={competences} />
            </div>
        </div>
    );
}

