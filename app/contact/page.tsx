export default function Contact() {
    return (
        <div className="min-h-screen pt-24 px-4 bg-neutral-950">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Contactez-moi</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-12"></div>
                <p className="text-neutral-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Je suis toujours ouvert aux nouvelles opportunités et aux collaborations intéressantes.
                    Que vous ayez une question, une proposition de projet, ou simplement envie dire bonjour,
                    n'hésitez pas à me contacter via les moyens ci-dessous.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/micka%C3%ABl-marco-1430a5327/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-800/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-400 group-hover:text-cyan-400 transition-colors">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.227.792 23 1.771 23h20.451C23.2 23 24 22.227 24 21.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                        <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors">Voir mon profil</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:mmarco68650@gmail.com"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-800/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-400 group-hover:text-cyan-400 transition-colors">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                        <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors">mmarco68650@gmail.com</span>
                    </a>

                    {/* Téléphone */}
                    <a
                        href="tel:0623829184"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-800/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-400 group-hover:text-cyan-400 transition-colors">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                        <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors">06 23 82 91 84</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
