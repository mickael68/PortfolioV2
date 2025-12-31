"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    type?: 'Formation' | 'Personnel' | 'Professionnel';
}

type FilterType = 'All' | 'Formation' | 'Personnel' | 'Professionnel';

export default function ProjectList({ projects }: { projects: Project[] }) {
    console.log("Projects received in ProjectList:", projects);
    const [filter, setFilter] = useState<FilterType>('All');

    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.type === filter;
    });

    const filters: { label: string; value: FilterType; color: string }[] = [
        { label: "Tous", value: "All", color: "bg-neutral-800 hover:bg-neutral-700" },
        { label: "Projets Professionnels", value: "Professionnel", color: "bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 border-cyan-900/50" },
        { label: "Projets Personnels", value: "Personnel", color: "bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 border-purple-900/50" },
        { label: "Projets Formation", value: "Formation", color: "bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400 border-emerald-900/50" },
    ];

    return (
        <div>
            {/* Filtere Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === f.value
                            ? "border-current ring-2 ring-offset-2 ring-offset-neutral-950 ring-current opacity-100 scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                            } ${f.color}`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10"
                        >
                            <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-700 text-4xl font-bold opacity-30 select-none">
                                    {project.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-60"></div>

                                {/* Badge Type */}
                                {project.type && (
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.type === 'Professionnel' ? 'bg-cyan-500/20 text-cyan-400' :
                                        project.type === 'Personnel' ? 'bg-purple-500/20 text-purple-400' :
                                            project.type === 'Formation' ? 'bg-emerald-500/20 text-emerald-400' :
                                                'bg-neutral-500/20 text-neutral-400'
                                        }`}>
                                        {project.type}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 relative">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                                <p className="text-sm text-neutral-400 mb-6 line-clamp-3">
                                    {project.description || "Description du projet..."}
                                </p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors gap-2">
                                        Voir le code
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    <p>Aucun projet trouvé pour cette catégorie.</p>
                </div>
            )}
        </div>
    );
}
