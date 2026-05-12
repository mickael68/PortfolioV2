"use client";

import { useState, useEffect } from "react";
import { Projet } from "@/lib/donnees";
import Image from "next/image";

export default function ListeProjets({ projets, dictionary, locale }: { projets: Projet[], dictionary: any, locale: string }) {
    const [filtre, setFiltre] = useState<string>(locale === 'en' ? 'Professional' : 'Professionnel');
    const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(null);

    // Sync default filter when locale changes
    useEffect(() => {
        setFiltre(locale === 'en' ? 'Professional' : 'Professionnel');
    }, [locale]);

    // Gérer la touche Échap pour fermer la modale
    useEffect(() => {
        const gererToucheClavier = (e: KeyboardEvent) => {
            if (e.key === "Escape") setProjetSelectionne(null);
        };
        window.addEventListener("keydown", gererToucheClavier);
        return () => window.removeEventListener("keydown", gererToucheClavier);
    }, []);

    const projetsFiltres = projets.filter(projet => {
        return projet.type === filtre;
    });

    const filtres = [
        { label: dictionary.projects.filters.professional, value: locale === 'en' ? 'Professional' : 'Professionnel' },
        { label: dictionary.projects.filters.personal, value: locale === 'en' ? 'Personal' : 'Personnel' },
        { label: dictionary.projects.filters.education, value: locale === 'en' ? 'Education' : 'Formation' },
    ];

    return (
        <div>
            {/* Boutons de Filtre */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 font-bangers tracking-wider">
                {filtres.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFiltre(f.value)}
                        className={`px-6 py-2 text-sm rounded-full font-bold transition-all duration-300 ${filtre === f.value
                            ? "bg-portal-green text-space-dark shadow-[0_0_20px_rgba(0,255,26,0.4)] scale-105"
                            : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grille de Projets */}
            <div key={filtre} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projetsFiltres.map((projet) => (
                    <div
                        key={projet.id}
                        onClick={() => setProjetSelectionne(projet)}
                        className="group relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:border-portal-green/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,26,0.15)] cursor-pointer flex flex-col"
                    >
                        <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                            {projet.urlImage ? (
                                <Image
                                    src={`/${projet.urlImage}`}
                                    alt={projet.titre}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-700 text-5xl font-bold opacity-30 select-none font-bangers">
                                    {projet.titre.charAt(0)}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80"></div>

                            {/* Badge Type */}
                            <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2 z-10">
                                {projet.type && (
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-bangers ${projet.type === (locale === 'en' ? 'Professional' : 'Professionnel') ? 'bg-portal-green/20 text-portal-green border border-portal-green/30' :
                                        projet.type === (locale === 'en' ? 'Personal' : 'Personnel') ? 'bg-rick-green/20 text-rick-green border border-rick-green/30' :
                                            'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                                        }`}>
                                        {projet.type}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-portal-green transition-colors font-bangers tracking-wide line-clamp-1">{projet.titre}</h4>
                            {projet.entreprise && (
                                <p className="text-xs font-bold text-portal-glow mb-3 uppercase tracking-widest font-mono">
                                    {projet.entreprise}
                                </p>
                            )}
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2 leading-relaxed flex-grow">
                                {projet.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/10 dark:border-white/5">
                                <span className="inline-flex items-center text-portal-green text-sm font-bold gap-2 font-bangers tracking-widest group-hover:gap-3 transition-all">
                                    {dictionary.projects.details}
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fenêtre Modale du Projet */}
            {projetSelectionne && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={() => setProjetSelectionne(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1117] border border-black/10 dark:border-white/10 rounded-3xl shadow-[0_0_80px_rgba(0,255,26,0.1)] animate-in zoom-in-95 duration-300 scrollbar-thin scrollbar-thumb-portal-green"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Bouton de fermeture */}
                        <button
                            onClick={() => setProjetSelectionne(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-black/10 dark:bg-black/40 text-neutral-900 dark:text-white hover:text-portal-green dark:hover:text-portal-green transition-all border border-black/10 dark:border-white/10 hover:border-portal-green/50 z-50 shadow-xl"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image de couverture */}
                        {projetSelectionne.urlImage && (
                            <div className="relative h-48 md:h-80 w-full overflow-hidden">
                                <Image
                                    src={`/${projetSelectionne.urlImage}`}
                                    alt={projetSelectionne.titre}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d1117] via-white/20 dark:via-[#0d1117]/20 to-transparent"></div>
                            </div>
                        )}

                        {/* Contenu de la Modale */}
                        <div className={`p-8 md:p-12 relative z-10 ${projetSelectionne.urlImage ? '-mt-16' : ''}`}>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-bangers border ${projetSelectionne.type === (locale === 'en' ? 'Professional' : 'Professionnel') ? 'bg-portal-green/10 text-portal-green border-portal-green/30' :
                                        projetSelectionne.type === (locale === 'en' ? 'Personal' : 'Personnel') ? 'bg-rick-green/10 text-rick-green border-rick-green/30' :
                                            'bg-teal-500/10 text-teal-400 border-teal-500/30'
                                    }`}>
                                    {projetSelectionne.type}
                                </span>
                                {projetSelectionne.entreprise && (
                                    <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-bangers bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-black/10 dark:border-white/10">
                                        {projetSelectionne.entreprise}
                                    </span>
                                )}
                            </div>

                            <h2 className="mb-8 drop-shadow-2xl">{projetSelectionne.titre}</h2>

                            <div className="space-y-8">
                                <p className="text-xl italic text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">{projetSelectionne.description}</p>
                                <div className="h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent w-full"></div>
                                <div className="prose prose-invert max-w-none">
                                    <p className="whitespace-pre-wrap text-neutral-700 dark:text-neutral-300 leading-loose text-base">
                                        {projetSelectionne.descriptionLongue || (locale === 'en' ? "No detailed description available at the moment." : "Aucune description détaillée disponible pour le moment.")}
                                    </p>
                                </div>
                            </div>

                            {/* Technologies globales */}
                            {projetSelectionne.technologies && projetSelectionne.technologies.length > 0 && (
                                <div className="mt-12">
                                    <h4 className="text-sm font-bold text-portal-green uppercase tracking-widest mb-6 font-bangers border-b border-black/10 dark:border-white/5 pb-2 inline-block">{locale === 'en' ? 'Technical Skills' : 'Compétences techniques'}</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {projetSelectionne.technologies.map((tech: string) => (
                                            <span key={tech} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 hover:border-portal-green/50 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Lien du Footer */}
                            {projetSelectionne.lien && (
                                <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/5 flex justify-end">
                                    <a
                                        href={projetSelectionne.lien}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-4 rounded-2xl bg-portal-green text-space-dark font-bold hover:bg-rick-green transition-all shadow-[0_0_30px_rgba(0,255,26,0.3)] hover:scale-105 font-bangers tracking-widest flex items-center gap-3"
                                    >
                                        {dictionary.projects.viewOnGithub}
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {projetsFiltres.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-neutral-500 font-bangers tracking-widest text-xl">{dictionary.projects.noProjects}</p>
                </div>
            )}
        </div>
    );
}
