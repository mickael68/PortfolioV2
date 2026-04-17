"use client";

import { useState, useEffect } from "react";
import { Projet } from "../../lib/donnees";
import Image from "next/image";

type TypeFiltre = 'All' | 'Formation' | 'Personnel' | 'Professionnel';

export default function ListeProjets({ projets }: { projets: Projet[] }) {
    const [filtre, setFiltre] = useState<TypeFiltre>('All');
    const [projetSelectionne, setProjetSelectionne] = useState<Projet | null>(null);

    // Gérer la touche Échap pour fermer la modale
    useEffect(() => {
        const gererToucheClavier = (e: KeyboardEvent) => {
            if (e.key === "Escape") setProjetSelectionne(null);
        };
        window.addEventListener("keydown", gererToucheClavier);
        return () => window.removeEventListener("keydown", gererToucheClavier);
    }, []);

    const projetsFiltres = projets.filter(projet => {
        if (filtre === 'All') return true;
        return projet.type === filtre;
    });

    const filtres: { label: string; value: TypeFiltre }[] = [
        { label: "Tous", value: "All" },
        { label: "Projets Professionnels", value: "Professionnel" },
        { label: "Projets Personnels", value: "Personnel" },
        { label: "Projets Formation", value: "Formation" },
    ];

    return (
        <div>
            {/* Boutons de Filtre */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 font-bangers tracking-wide">
                {filtres.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFiltre(f.value)}
                        className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all ${filtre === f.value
                            ? "bg-portal-green text-black shadow-[0_0_15px_rgba(0,255,26,0.5)]"
                            : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grille de Projets */}
            <div key={filtre} className="grid md:grid-cols-3 gap-8 animate-slide-up-fade">
                {projetsFiltres.map((projet) => (
                    <div
                        key={projet.id}
                        onClick={() => setProjetSelectionne(projet)}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-portal-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-portal-green/20 cursor-pointer"
                    >
                        <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                            {projet.urlImage ? (
                                <Image 
                                    src={`/${projet.urlImage}`} 
                                    alt={projet.titre}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-700 text-4xl font-bold opacity-30 select-none font-bangers">
                                    {projet.titre.charAt(0)}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-60"></div>

                            {/* Badge Type */}
                            {projet.type && (
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-bangers z-10 ${projet.type === 'Professionnel' ? 'bg-portal-green/20 text-portal-green' :
                                    projet.type === 'Personnel' ? 'bg-rick-green/20 text-rick-green' :
                                        projet.type === 'Formation' ? 'bg-teal-500/20 text-teal-400' :
                                            'bg-neutral-500/20 text-neutral-400'
                                    }`}>
                                    {projet.type}
                                </div>
                            )}
                        </div>

                        <div className="p-6 relative">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-portal-green transition-colors font-bangers tracking-wide">{projet.titre}</h4>
                            <p className="text-sm text-neutral-400 mb-6 line-clamp-2">
                                {projet.description || "Description du projet..."}
                            </p>
                            <span className="inline-flex items-center text-portal-green text-sm font-medium gap-2 font-bangers tracking-wider">
                                En savoir plus
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fenêtre Modale du Projet */}
            {projetSelectionne && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setProjetSelectionne(null)}
                >
                    <div 
                        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-space-dark border-2 border-portal-green/50 rounded-3xl shadow-[0_0_50px_rgba(0,255,26,0.2)] animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image de couverture en haut de la modale si disponible */}
                        {projetSelectionne.urlImage && (
                            <div className="relative h-48 md:h-64 w-full overflow-hidden">
                                <Image 
                                    src={`/${projetSelectionne.urlImage}`} 
                                    alt={projetSelectionne.titre}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
                            </div>
                        )}

                        {/* Contenu de la Modale */}
                        <div className={`p-8 md:p-12 relative z-10 ${projetSelectionne.urlImage ? '-mt-16' : ''}`}>
                            <button 
                                onClick={() => setProjetSelectionne(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-black/40 text-white hover:text-portal-green transition-all border border-white/10 hover:border-portal-green/50 z-20"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-bangers ${
                                    projetSelectionne.type === 'Professionnel' ? 'bg-portal-green/20 text-portal-green' :
                                    projetSelectionne.type === 'Personnel' ? 'bg-rick-green/20 text-rick-green' :
                                    'bg-teal-500/20 text-teal-400'
                                }`}>
                                    {projetSelectionne.type}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-bangers tracking-wider drop-shadow-lg">{projetSelectionne.titre}</h3>
                            
                            <div className="space-y-6 text-neutral-300 leading-relaxed">
                                <p className="text-lg italic text-neutral-400">{projetSelectionne.description}</p>
                                <div className="h-px bg-white/5 w-full"></div>
                                <p className="whitespace-pre-wrap">{projetSelectionne.descriptionLongue || "Aucune description détaillée disponible pour le moment."}</p>
                            </div>

                            {/* Technologies */}
                            {projetSelectionne.technologies && projetSelectionne.technologies.length > 0 && (
                                <div className="mt-8">
                                    <h4 className="text-sm font-bold text-portal-green uppercase tracking-widest mb-4 font-bangers">Technologies utilisées</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {projetSelectionne.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-neutral-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Lien du Footer */}
                            {projetSelectionne.lien && (
                                <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                                    <a 
                                        href={projetSelectionne.lien} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="px-8 py-3 rounded-xl bg-portal-green text-space-dark font-bold hover:bg-rick-green transition-all shadow-[0_0_20px_rgba(0,255,26,0.3)] hover:shadow-[0_0_30px_rgba(151,206,76,0.5)] font-bangers tracking-wider flex items-center gap-2"
                                    >
                                        Consulter sur GitHub
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
                <div className="text-center py-20 text-neutral-500">
                    <p>Aucun projet trouvé pour cette catégorie.</p>
                </div>
            )}
        </div>
    );
}
