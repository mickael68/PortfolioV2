import { getSkills, Skill } from "../../lib/data";
import SkillsTabs from "./SkillsTabs";

export default async function Skills() {
    let skills: Skill[] = [];
    try {
        skills = await getSkills();
    } catch (error) {
        console.warn("Erreur lors de la récupération des compétences.", error);
    }

    return (
        <div className="min-h-screen pt-24 px-4 pb-20 bg-[#0a0c10] text-neutral-200">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes Compétences</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>

                <SkillsTabs skills={skills} />
            </div>
        </div>
    );
}
