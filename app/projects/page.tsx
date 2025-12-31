import sql from "../../lib/db";
import ProjectList, { Project } from "./ProjectList";

export const dynamic = 'force-dynamic';

export default async function Projects() {
    let projects: Project[] = [];
    try {
        // NOTE: This table 'projects' must be created in Neon!
        projects = (await sql`SELECT * FROM projects`) as any as Project[];
        console.log("Server-side projects fetched:", projects);
    } catch (error) {
        console.warn("Erreur lors de la récupération des projets (Vérifiez que la table 'projects' existe).");
    }

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes Projets</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-12"></div>

                <ProjectList projects={projects} />
            </div>
        </div>
    );
}
