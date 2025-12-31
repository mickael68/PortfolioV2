import sql from "@/lib/db";

async function getExperiences() {
    const experiences = await sql`
    SELECT * FROM experiences 
    ORDER BY start_date DESC
  `;
    return experiences;
}

export default async function About() {
    const experiences = await getExperiences();

    const professional = experiences.filter(exp => exp.type === 'Professionnel');
    const academic = experiences.filter(exp => exp.type === 'Académique');

    // fallback if no type is set (legacy data handling)
    const others = experiences.filter(exp => !exp.type);

    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">À propos</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-12"></div>

                <div className="prose prose-invert mx-auto text-neutral-300 mb-16">
                    <p className="text-lg leading-relaxed text-center">
                        Bonjour ! Je suis étudiant en informatique à l'UHA 4.0. Je suis passionné par la création de sites web ainsi que du développement logiciel. Je suis quelqu'un d'autonome, dynamique, organisé, sérieux, fait preuve d’initiative, de plus j'apprécie le travail en groupe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Expériences Professionnelles */}
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Expériences Pro
                        </h3>
                        <div className="space-y-8 border-l-2 border-neutral-800 pl-8 relative">
                            {professional.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-neutral-900 bg-cyan-500 group-hover:scale-125 transition-transform duration-300"></span>
                                    <div className="text-sm text-neutral-500 mb-1 font-mono">
                                        {new Date(exp.start_date).getFullYear()} - {exp.end_date ? new Date(exp.end_date).getFullYear() : 'Présent'}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h4>
                                    <div className="text-cyan-200 mb-2">{exp.company}</div>
                                    <p className="text-neutral-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                            {professional.length === 0 && <p className="text-neutral-500 italic">Aucune expérience professionnelle ajoutée.</p>}
                        </div>
                    </div>

                    {/* Parcours Académique */}
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            Formation
                        </h3>
                        <div className="space-y-8 border-l-2 border-neutral-800 pl-8 relative">
                            {academic.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-neutral-900 bg-purple-500 group-hover:scale-125 transition-transform duration-300"></span>
                                    <div className="text-sm text-neutral-500 mb-1 font-mono">
                                        {exp.end_date ? `${new Date(exp.start_date).getFullYear()} - ${new Date(exp.end_date).getFullYear()}` : new Date(exp.start_date).getFullYear()}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{exp.title}</h4>
                                    <div className="text-purple-200 mb-2">{exp.company}</div>
                                    <p className="text-neutral-400 text-sm">{exp.description}</p>
                                </div>
                            ))}
                            {academic.length === 0 && <p className="text-neutral-500 italic">Aucune formation ajoutée.</p>}
                        </div>
                    </div>
                </div>

                {/* Fallback for others if any */}
                {others.length > 0 && (
                    <div className="mt-12 opacity-50">
                        <h3 className="text-xl font-bold text-white mb-4">Autres</h3>
                        <ul className="list-disc pl-5 text-neutral-400">
                            {others.map(exp => (
                                <li key={exp.id}>{exp.title} chez {exp.company}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
