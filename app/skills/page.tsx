export default function Skills() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Compétences</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Node.js",
                        "Git",
                        "Figma",
                        "Netlify",
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-colors text-center font-medium"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
