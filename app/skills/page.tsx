import sql from "../../lib/db";
import SkillsTabs from "./SkillsTabs";

interface Skill {
    id: number;
    name: string;
    level: string;
    icon?: string;
}

export default async function Skills() {
    let skills: Skill[] = [];
    try {
        console.log("Fetching skills...");
        skills = (await sql`SELECT * FROM skills`) as any as Skill[];
        console.log("Skills fetched:", skills.length);
    } catch (error) {
        console.warn("Erreur lors de la récupération des compétences.");
        // console.error(error);
    }

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes Compétences</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-12"></div>

                <SkillsTabs skills={skills} />
            </div>
        </div>
    );
}
