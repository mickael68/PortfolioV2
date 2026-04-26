"use client";

import { useState } from "react";

type TabType = 'moi' | 'mobilite' | 'langue' | 'centre_interet';

export default function InfosInteractives() {
    const [activeTab, setActiveTab] = useState<TabType>('moi');

    const tabs: { id: TabType; label: string }[] = [
        { id: 'moi', label: 'Moi'},
        { id: 'mobilite', label: 'Mobilité'},
        { id: 'langue', label: 'Langues' },
        { id: 'centre_interet', label: 'Intérêts' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'moi':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 text-left">
                        <div>
                            <h4 className="text-portal-green font-bold uppercase tracking-wider text-sm mb-1 font-bangers">Présentation</h4>
                            <p className="text-white">
                                Je suis étudiant en informatique à l'UHA 4.0. 
                                Je suis passionné par la création de sites web ainsi que du développement logiciel.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-portal-green font-bold uppercase tracking-wider text-sm mb-1 font-bangers">Qualités</h4>
                            <p className="text-white">
                                Je suis quelqu'un d'autonome, dynamique, organisé, sérieux, fait preuve d’initiative, de plus j'apprécie le travail en groupe.
                            </p>
                        </div>
                        <div className="pt-4">
                            <a 
                                href="/fichiers/MARCO_Mickael_CV.pdf" 
                                download
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-portal-green text-space-dark font-bold font-bangers tracking-wider hover:bg-rick-green transition-all shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                );
            case 'mobilite':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                        <div>
                            <h4 className="text-portal-green font-bold uppercase tracking-wider text-sm mb-1 font-bangers">Mobilité</h4>
                            <p className="text-white">Véhicule personnel</p>
                        </div>
                        <div>
                            <h4 className="text-portal-green font-bold uppercase tracking-wider text-sm mb-1 font-bangers">Permis</h4>
                            <p className="text-white">Permis B</p>
                        </div>
                    </div>
                );
            case 'langue':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 flex-shrink-0">
                                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                                    <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path>
                                    <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path>
                                    <path fill="#EEE" d="M12 5h12v26H12z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-bangers tracking-wide">Français</h4>
                                <p className="text-neutral-400 text-sm">Langue maternelle</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 flex-shrink-0">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                                    <path fill="#41479B" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621C512,105.443,494.833,88.276,473.655,88.276z"></path>
                                    <path fill="#F5F5F5" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"></path>
                                    <polygon fill="#FF4B55" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517"></polygon>
                                    <path fill="#FF4B55" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31C13.377,415.157,18.714,418.955,24.793,421.252z"></path>
                                    <path fill="#FF4B55" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"></path>
                                    <path fill="#FF4B55" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"></path>
                                    <path fill="#FF4B55" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold font-bangers tracking-wide">Anglais</h4>
                                <p className="text-neutral-400 text-sm">Maîtrise expérimentée (C1) et vocabulaire technique</p>
                            </div>
                        </div>
                    </div>
                );
            case 'centre_interet':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-rick-green font-bold uppercase tracking-wider text-xs mb-2 font-bangers">Veille Informatique</h4>
                            <p className="text-neutral-300 text-sm">Balade Mentale, Hugo Lisoir...</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-rick-green font-bold uppercase tracking-wider text-xs mb-2 font-bangers">Activités extérieures</h4>
                            <p className="text-neutral-300 text-sm">Vélo</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-rick-green font-bold uppercase tracking-wider text-xs mb-2 font-bangers">Stratégie & Réflexion</h4>
                            <p className="text-neutral-300 text-sm">Clash of Clans</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 rounded-full font-bold font-bangers tracking-wider transition-all duration-300 flex items-center gap-2 ${
                            activeTab === tab.id
                                ? "bg-portal-green text-space-dark shadow-[0_0_20px_rgba(0,255,26,0.4)] scale-105"
                                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="relative p-8 md:p-10 bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden min-h-[200px] flex items-center justify-start text-left">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-portal-green/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-rick-green/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 w-full max-w-2xl">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
