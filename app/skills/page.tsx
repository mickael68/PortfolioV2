import Image from "next/image";
import sql from "../../lib/db";

interface Skill {
    id: number;
    name: string;
    level: string;
    icon?: string;
}

export default async function Skills() {
    let skills: Skill[] = [];
    try {
        skills = (await sql`SELECT * FROM skills`) as any as Skill[];
    } catch (error) {
        console.error("Failed to fetch skills:", error);
    }

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Compétences</h2>

                {skills.length === 0 ? (
                    <div className="text-center text-neutral-400">
                        <p>Aucune compétence trouvée.</p>
                        <p className="text-sm mt-2 opacity-50">(Assurez-vous d'avoir créé la table 'skills' dans Neon)</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-colors text-center"
                            >
                                {skill.icon && (
                                    <div className="mb-4 relative w-12 h-12">
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
        </div>
    );
}
