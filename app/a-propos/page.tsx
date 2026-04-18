import { getExperiences } from "@/lib/donnees";
import InfosInteractives from "./InfosInteractives";

export default async function APropos() {
    const experiences = await getExperiences();

    const professionnelles = experiences.filter(exp => exp.type === 'Professionnel');
    const academiques = experiences.filter(exp => exp.type === 'Académique');

    return (
        <div className="min-h-screen pt-24 px-4 pb-20 bg-[#0a0c10]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">À propos</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>

                <InfosInteractives />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Expériences Professionnelles */}
                    <div>
                        <h3 className="text-2xl font-bold text-portal-green mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Expériences Pro
                        </h3>
                        <div className="space-y-8 border-l-2 border-neutral-800 pl-8 relative">
                            {professionnelles.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-neutral-900 bg-portal-green group-hover:scale-125 transition-transform duration-300"></span>
                                    <div className="text-sm text-neutral-500 mb-1 font-mono">
                                        {new Date(exp.date_debut).getFullYear()} - {exp.date_fin ? new Date(exp.date_fin).getFullYear() : 'Présent'}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-portal-green transition-colors">{exp.titre}</h4>
                                    <div className="text-portal-glow mb-2">{exp.entreprise}</div>
                                    <p className="text-neutral-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                            {professionnelles.length === 0 && <p className="text-neutral-500 italic">Aucune expérience professionnelle ajoutée.</p>}
                        </div>
                    </div>

                    {/* Parcours Académique */}
                    <div>
                        <h3 className="text-2xl font-bold text-rick-green mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            Formation
                        </h3>
                        <div className="space-y-8 border-l-2 border-neutral-800 pl-8 relative">
                            {academiques.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-neutral-900 bg-rick-green group-hover:scale-125 transition-transform duration-300"></span>
                                    <div className="text-sm text-neutral-500 mb-1 font-mono">
                                        {exp.date_fin ? `${new Date(exp.date_debut).getFullYear()} - ${new Date(exp.date_fin).getFullYear()}` : new Date(exp.date_debut).getFullYear()}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-rick-green transition-colors">{exp.titre}</h4>
                                    <div className="text-teal-400 mb-2">{exp.entreprise}</div>
                                    <p className="text-neutral-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                            {academiques.length === 0 && <p className="text-neutral-500 italic">Aucune formation ajoutée.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
