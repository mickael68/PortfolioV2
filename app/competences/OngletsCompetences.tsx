"use client";

import { useState } from "react";
import Image from "next/image";
import { Competence } from "../../lib/donnees";

interface SkillsTabsProps {
    competences: Competence[];
}

export default function OngletsCompetences({ competences }: SkillsTabsProps) {
    const [ongletActif, setOngletActif] = useState<"technologies" | "os" | "divers">("technologies");

    // Logique de filtrage
    const competencesTechnologies = competences.filter(
        (c) =>
            c.niveau !== "OS" &&
            !["Logiciel", "CMS", "Hébergement Git", "Outil de travail"].includes(c.niveau) &&
            c.niveau !== ""
    );

    const competencesOS = competences.filter((c) => c.niveau === "OS");

    const competencesDivers = competences.filter((c) =>
        ["Logiciel", "CMS", "Hébergement Git", "Outil de travail"].includes(c.niveau) || c.niveau === ""
    );

    const obtenirCompetencesActives = () => {
        switch (ongletActif) {
            case "technologies":
                return competencesTechnologies;
            case "os":
                return competencesOS;
            case "divers":
                return competencesDivers;
            default:
                return [];
        }
    };

    const competencesActives = obtenirCompetencesActives();

    return (
        <div>
            {/* Navigation des Onglets */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2 font-bangers tracking-wide">
                <button
                    onClick={() => setOngletActif("technologies")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-bold transition-all duration-300 ${ongletActif === "technologies"
                        ? "bg-portal-green text-space-dark shadow-[0_0_20px_rgba(0,255,26,0.4)] scale-105"
                        : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                >
                    Technologies
                </button>
                <button
                    onClick={() => setOngletActif("os")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-bold transition-all duration-300 ${ongletActif === "os"
                        ? "bg-portal-green text-space-dark shadow-[0_0_20px_rgba(0,255,26,0.4)] scale-105"
                        : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                >
                    OS
                </button>
                <button
                    onClick={() => setOngletActif("divers")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-bold transition-all duration-300 ${ongletActif === "divers"
                        ? "bg-portal-green text-space-dark shadow-[0_0_20px_rgba(0,255,26,0.4)] scale-105"
                        : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                >
                    Divers
                </button>
            </div>

            {/* Grille de Compétences */}
            {competencesActives.length === 0 ? (
                <div className="text-center text-neutral-600 dark:text-neutral-400 py-12">
                    <p>Aucune compétence trouvée dans cette catégorie.</p>
                </div>
            ) : (
                <div key={ongletActif} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {competencesActives.map((c) => (
                        <div
                            key={c.id}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 hover:border-portal-green/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all group"
                        >
                            {c.icone && (
                                <div className="mb-4 relative w-12 h-12 transition-all duration-300">
                                    <Image
                                        src={`/${c.icone}`}
                                        alt={c.nom}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                            <div className="text-lg font-medium text-neutral-900 dark:text-white mb-1 font-bangers tracking-wide">{c.nom}</div>
                            <div className="text-xs text-portal-glow font-mono uppercase">{c.niveau}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
