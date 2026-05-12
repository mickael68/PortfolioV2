"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/app/[locale]/components/LocaleProvider";
import type { Experience } from "@/lib/donnees";

export default function APropos() {
    const { locale, dictionary } = useLocale();
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        fetch(`/api/experiences?locale=${locale}`)
            .then(res => res.json())
            .then(data => setExperiences(data))
            .catch(() => setExperiences([]));
    }, [locale]);

    const professionnelles = experiences.filter(exp => exp.type === (locale === 'en' ? 'Professional' : 'Professionnel'));
    const academiques = experiences.filter(exp => exp.type === (locale === 'en' ? 'Academic' : 'Académique'));


    return (
        <div className="min-h-screen pt-24 px-4 pb-20">
            <div className="max-w-5xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-bangers tracking-wider">{dictionary.about.title}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Colonne Gauche: Présentation & Expériences/Formation */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Section Présentation */}
                        <div className="bg-black/5 dark:bg-white/10 rounded-3xl p-8 border border-black/10 dark:border-white/20 backdrop-blur-md relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-portal-green/10 rounded-full blur-2xl group-hover:bg-portal-green/20 transition-colors"></div>
                            <h3 className="text-2xl font-bold text-portal-green mb-6 font-bangers tracking-widest uppercase">{dictionary.about.whoAmI}</h3>
                            <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                                <p className="text-lg leading-relaxed">
                                    {dictionary.about.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {dictionary.about.qualities.map((q: string) => (
                                        <span key={q} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            {q}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <a 
                                        href="/fichiers/MARCO_Mickael_CV.pdf" 
                                        download
                                        className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-portal-green text-space-dark font-bold font-bangers tracking-widest hover:bg-rick-green transition-all shadow-[0_0_15px_rgba(0,255,26,0.3)] hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {dictionary.about.downloadCV}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Expériences & Formations en mode Timeline */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Expériences Professionnelles */}
                            <div>
                                <h3 className="text-2xl font-bold text-portal-green mb-8 flex items-center gap-3 font-bangers tracking-wider">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {dictionary.about.proExp}
                                </h3>
                                <div className="space-y-10 border-l-2 border-neutral-300 dark:border-neutral-800 pl-8 relative ml-4">
                                    {professionnelles.map((exp) => (
                                        <div key={exp.id} className="relative group">
                                            <span className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-neutral-900 bg-portal-green group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(0,255,26,0.6)] transition-all duration-300"></span>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 font-mono font-bold tracking-widest bg-black/5 dark:bg-white/5 inline-block px-3 py-1 rounded-md">
                                                {(() => {
                                                    const startYear = new Date(exp.date_debut).getFullYear();
                                                    const endYear = exp.date_fin ? new Date(exp.date_fin).getFullYear() : dictionary.about.present;
                                                    return startYear === endYear ? startYear : `${startYear} - ${endYear}`;
                                                })()}
                                            </div>
                                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-portal-green transition-colors font-bangers tracking-wide">{exp.titre}</h4>
                                            <div className="text-portal-glow font-medium mb-3">{exp.entreprise}</div>
                                            <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Parcours Académique */}
                            <div>
                                <h3 className="text-2xl font-bold text-rick-green mb-8 flex items-center gap-3 font-bangers tracking-wider">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                    {dictionary.about.education}
                                </h3>
                                <div className="space-y-10 border-l-2 border-neutral-300 dark:border-neutral-800 pl-8 relative ml-4">
                                    {academiques.map((exp) => (
                                        <div key={exp.id} className="relative group">
                                            <span className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-neutral-900 bg-rick-green group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(151,206,76,0.6)] transition-all duration-300"></span>
                                            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 font-mono font-bold tracking-widest bg-black/5 dark:bg-white/5 inline-block px-3 py-1 rounded-md">
                                                {(() => {
                                                    const startYear = new Date(exp.date_debut).getFullYear();
                                                    const endYear = exp.date_fin ? new Date(exp.date_fin).getFullYear() : null;
                                                    if (!endYear) return startYear;
                                                    return startYear === endYear ? startYear : `${startYear} - ${endYear}`;
                                                })()}
                                            </div>
                                            <h4 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-rick-green transition-colors font-bangers tracking-wide">{exp.titre}</h4>
                                            <div className="text-teal-400 font-medium mb-3">{exp.entreprise}</div>
                                            <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Droite: Infos Secondaires */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Section Mobilité */}
                        <div className="bg-black/5 dark:bg-white/10 rounded-3xl p-6 border border-black/10 dark:border-white/20 shadow-lg">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-bangers tracking-widest border-b border-black/10 dark:border-white/10 pb-3">{dictionary.about.mobility}</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-portal-green/10 flex items-center justify-center text-portal-green">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-neutral-900 dark:text-white font-bangers tracking-widest">{dictionary.about.vehicle}</div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-base mt-1">{dictionary.about.vehicleDesc}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-rick-green/10 flex items-center justify-center text-rick-green">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-neutral-900 dark:text-white font-bangers tracking-widest">{dictionary.about.license}</div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-base mt-1">{dictionary.about.licenseDesc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section Langues */}
                        <div className="bg-black/5 dark:bg-white/10 rounded-3xl p-6 border border-black/10 dark:border-white/20 shadow-lg">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-bangers tracking-widest border-b border-black/10 dark:border-white/10 pb-3">{dictionary.about.languages}</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex-shrink-0">
                                        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg rounded-md overflow-hidden">
                                            <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
                                            <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
                                            <path fill="#EEE" d="M12 5h12v26H12z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-neutral-900 dark:text-white font-bangers tracking-widest">{dictionary.about.french}</div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-base mt-1">{dictionary.about.frenchLevel}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex-shrink-0">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg rounded-md overflow-hidden">
                                            <path fill="#41479B" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621C512,105.443,494.833,88.276,473.655,88.276z"></path>
                                            <path fill="#F5F5F5" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"></path>
                                            <polygon fill="#FF4B55" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517"></polygon>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-neutral-900 dark:text-white font-bangers tracking-widest">{dictionary.about.english}</div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-base mt-1">{dictionary.about.englishLevel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section Intérêts */}
                        <div className="bg-black/5 dark:bg-white/10 rounded-3xl p-6 border border-black/10 dark:border-white/20 shadow-lg">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-bangers tracking-widest border-b border-black/10 dark:border-white/10 pb-3">{dictionary.about.interests}</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { label: dictionary.about.interestTech, desc: dictionary.about.interestTechDesc },
                                    { label: dictionary.about.interestFitness, desc: dictionary.about.interestFitnessDesc },
                                    { label: dictionary.about.interestGaming, desc: dictionary.about.interestGamingDesc }
                                ].map((item) => (
                                    <div key={item.label} className="p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/5 hover:border-portal-green/30 transition-colors">
                                        <div className="text-lg font-bold text-rick-green font-bangers tracking-widest mb-2">{item.label}</div>
                                        <div className="text-neutral-700 dark:text-neutral-300 text-sm">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
