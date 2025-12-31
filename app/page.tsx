import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-40"></div>
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-white/10 bg-neutral-900">
            {/* Un placeholder d'avatar pour l'instant */}
            <div className="flex items-center justify-center w-full h-full text-4xl">
              <Image src="/images/Mickaël_Marco.png" alt="Avatar" width={128} height={128} />
            </div>
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
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
