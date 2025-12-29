import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter text-white">
          Portfolio
        </div>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-40"></div>
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-white/10 bg-neutral-900">
            {/* Un placeholder d'avatar pour l'instant */}
            <div className="flex items-center justify-center w-full h-full text-4xl">👋</div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Développeur Web
          </span>
        </h1>
        <p className="max-w-xl text-lg text-neutral-400 mb-10">
          Passionné par la création d'expériences numériques modernes, performantes et esthétiques.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">À propos</h2>
          <div className="prose prose-invert mx-auto text-neutral-300">
            <p className="text-lg leading-relaxed text-center">
              Bonjour ! Je suis un développeur passionné qui aime transformer des idées complexes en interfaces simples et élégantes.
              J'accorde une attention particulière aux détails, à la performance et à l'expérience utilisateur.
              Toujours en train d'apprendre de nouvelles technologies pour repousser les limites du web.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Figma",
              "Netlify",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-colors text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-neutral-900/50">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Contactez-moi</h2>
          <p className="text-neutral-400 mb-8">
            Vous avez un projet en tête ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
          >
            Envoyer un email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Fait avec Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
