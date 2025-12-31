"use client";

import { useState } from "react";
import Image from "next/image";

interface Skill {
    id: number;
    name: string;
    level: string;
    icon?: string;
}

interface SkillsTabsProps {
    skills: Skill[];
}

export default function SkillsTabs({ skills }: SkillsTabsProps) {
    const [activeTab, setActiveTab] = useState<"technologies" | "os" | "divers">("technologies");

    // Filtering logic
    const technologySkills = skills.filter(
        (skill) =>
            skill.level !== "OS" &&
            skill.level !== "OS" &&
            !["Logiciel", "CMS", "Hébergement Git", "Outil de travail"].includes(skill.level) &&
            skill.level !== ""
    );

    const osSkills = skills.filter((skill) => skill.level === "OS");

    const diversSkills = skills.filter((skill) =>
        ["Logiciel", "CMS", "Hébergement Git", "Outil de travail"].includes(skill.level) || skill.level === ""
    );

    const getActiveSkills = () => {
        switch (activeTab) {
            case "technologies":
                return technologySkills;
            case "os":
                return osSkills;
            case "divers":
                return diversSkills;
            default:
                return [];
        }
    };

    const activeSkills = getActiveSkills();

    return (
        <div>
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
                <button
                    onClick={() => setActiveTab("technologies")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all ${activeTab === "technologies"
                        ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                        }`}
                >
                    Technologies
                </button>
                <button
                    onClick={() => setActiveTab("os")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all ${activeTab === "os"
                        ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                        }`}
                >
                    OS
                </button>
                <button
                    onClick={() => setActiveTab("divers")}
                    className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium transition-all ${activeTab === "divers"
                        ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                        }`}
                >
                    Divers
                </button>
            </div>

            {/* Skills Grid */}
            {activeSkills.length === 0 ? (
                <div className="text-center text-neutral-400 py-12">
                    <p>Aucune compétence trouvée dans cette catégorie.</p>
                </div>
            ) : (
                <div key={activeTab} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up-fade">
                    {activeSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                        >
                            {skill.icon && (
                                <div className="mb-4 relative w-12 h-12 transition-all duration-300">
                                    <Image
                                        src={`/${skill.icon}`}
                                        alt={skill.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                            <div className="text-lg font-medium text-white mb-1">{skill.name}</div>
                            <div className="text-sm text-cyan-400">{skill.level}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
