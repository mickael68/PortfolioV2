"use client";

import { useState } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    type?: 'Formation' | 'Personnel' | 'Professionnel';
}

type FilterType = 'All' | 'Formation' | 'Personnel' | 'Professionnel';

export default function ProjectList({ projects }: { projects: Project[] }) {
    const [filter, setFilter] = useState<FilterType>('All');

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.type === filter;
    });

    const filters: { label: string; value: FilterType }[] = [
        { label: "Tous", value: "All" },
        { label: "Projets Professionnels", value: "Professionnel" },
        { label: "Projets Personnels", value: "Personnel" },
        { label: "Projets Formation", value: "Formation" },
    ];

    return (
        <div>
            {/* Filtere Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 font-orbitron">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all ${filter === f.value
                            ? "bg-portal-green text-black shadow-[0_0_15px_rgba(0,255,26,0.5)]"
                            : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div key={filter} className="grid md:grid-cols-3 gap-8 animate-slide-up-fade">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-portal-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-portal-green/20"
                    >
                        <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-700 text-4xl font-bold opacity-30 select-none">
                                {project.title.charAt(0)}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-60"></div>

                            {/* Badge Type */}
                            {project.type && (
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-orbitron ${project.type === 'Professionnel' ? 'bg-portal-green/20 text-portal-green' :
                                    project.type === 'Personnel' ? 'bg-rick-green/20 text-rick-green' :
                                        project.type === 'Formation' ? 'bg-teal-500/20 text-teal-400' :
                                            'bg-neutral-500/20 text-neutral-400'
                                    }`}>
                                    {project.type}
                                </div>
                            )}
                        </div>

                        <div className="p-6 relative">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-portal-green transition-colors">{project.title}</h4>
                            <p className="text-sm text-neutral-400 mb-6 line-clamp-3">
                                {project.description || "Description du projet..."}
                            </p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-portal-green text-sm font-medium hover:text-portal-glow transition-colors gap-2 font-orbitron">
                                    Voir le code
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    <p>Aucun projet trouvé pour cette catégorie.</p>
                </div>
            )}
        </div>
    );
}
