"use client";

import { useLocale } from "@/app/[locale]/components/LocaleProvider";

export default function Contact() {
    const { locale, dictionary } = useLocale();

    return (
        <div className="min-h-screen pt-24 pb-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 text-center font-bangers tracking-wider">{dictionary.contact.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    {dictionary.contact.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/micka%C3%ABl-marco-1430a5327/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-portal-green/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-600 dark:text-neutral-400 group-hover:text-portal-green transition-colors">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.227.792 23 1.771 23h20.451C23.2 23 24 22.227 24 21.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">LinkedIn</h3>
                        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-portal-glow transition-colors text-sm break-all text-center">linkedin.com/in/mickaël-marco-1430a5327/</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:mmarco68650@gmail.com"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-portal-green/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-600 dark:text-neutral-400 group-hover:text-portal-green transition-colors">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Email</h3>
                        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-portal-glow transition-colors">mmarco68650@gmail.com</span>
                    </a>

                    {/* Téléphone */}
                    <a
                        href="tel:0623829184"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-portal-green/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-600 dark:text-neutral-400 group-hover:text-portal-green transition-colors">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{dictionary.contact.phone}</h3>
                        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-portal-glow transition-colors">06 23 82 91 84</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/mickael68"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-portal-green/50 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 text-neutral-600 dark:text-neutral-400 group-hover:text-portal-green transition-colors">
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">GitHub</h3>
                        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-portal-glow transition-colors text-sm break-all text-center">github.com/mickael68</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
