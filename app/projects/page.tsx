import sql from "../../lib/db";

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export default async function Projects() {
    let projects: Project[] = [];
    try {
        // NOTE: This table 'projects' must be created in Neon!
        projects = (await sql`SELECT * FROM projects`) as any as Project[];
    } catch (error) {
        console.error("Failed to fetch projects:", error);
    }

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets Récents</h2>

                {projects.length === 0 ? (
                    <div className="text-center text-neutral-400">
                        <p>Aucun projet trouvé.</p>
                        <p className="text-sm mt-2 opacity-50">(Assurez-vous d'avoir créé la table 'projects' dans Neon et ajouté la variable DATABASE_URL)</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/20 transition-colors"
                            >
                                <div className="aspect-video bg-neutral-800 animate-pulse group-hover:bg-neutral-800/80 transition-colors">
                                    {/* Placeholder pour image */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title || "Titre du projet"}</h3>
                                    <p className="text-sm text-neutral-400 mb-4">
                                        {project.description || "Description du projet..."}
                                    </p>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm font-medium hover:underline">
                                            Voir le code &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
