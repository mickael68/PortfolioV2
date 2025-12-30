"use client";

import { useState } from "react";

type Category = "technologies" | "os" | "misc";

const skillsData = {
    technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
    ],
    os: ["Windows", "WSL Ubuntu", "Linux Handlers"],
    misc: ["Git", "GitHub", "LibreOffice", "Netlify", "Vercel", "Figma"],
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState<Category>("technologies");

    const tabs: { id: Category; label: string }[] = [
        { id: "technologies", label: "Technologies" },
        { id: "os", label: "Systèmes d'exploitation" },
        { id: "misc", label: "Divers" },
    ];

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Compétences
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skillsData[activeTab].map((skill) => (
                        <div
                            key={skill}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-colors text-center font-medium text-neutral-200"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
