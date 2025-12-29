export default function Projects() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets Récents</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="group relative overflow-hidden rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className="aspect-video bg-neutral-800 animate-pulse group-hover:bg-neutral-800/80 transition-colors">
                                {/* Placeholder pour une image de projet */}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Projet {item}</h3>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Une brève description de ce projet incroyable et des technologies utilisées pour le construire.
                                </p>
                                <a href="#" className="text-cyan-400 text-sm font-medium hover:underline">
                                    Voir le code &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
