import Link from "next/link";
import Image from "next/image";
import Signature from "./components/Signature";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-neutral-200">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Animated Portal Avatar Container */}
        <div className="relative mb-8 flex items-center justify-center group">
          {/* Animated portal background */}
          <div className="absolute -inset-10 rounded-full border-4 border-portal-green/50 animate-portal-spin pointer-events-none" 
               style={{
                 background: 'conic-gradient(from 0deg, transparent 0%, rgba(0, 255, 26, 0.2) 30%, rgba(0, 255, 26, 0.8) 50%, rgba(151, 206, 76, 0.8) 70%, transparent 100%)',
                 boxShadow: '0 0 40px 10px rgba(0, 255, 26, 0.4), inset 0 0 20px rgba(0, 255, 26, 0.5)',
                 filter: 'blur(2px)'
               }}>
          </div>
          
          {/* Pulsing inner glow */}
          <div className="absolute -inset-2 rounded-full bg-portal-glow/40 animate-pulse-glow blur-md shadow-[0_0_50px_rgba(0,255,26,0.6)]"></div>
          
          {/* Avatar Base */}
          <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-portal-green bg-space-dark z-10 
                          group-hover:border-rick-green transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,255,26,0.8)]">
            <div className="flex items-center justify-center w-full h-full">
              <Image src="/images/Mickaël_Marco.png" alt="Avatar" width={144} height={144} className="object-cover relative z-10" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.5)]">
            Développeur Web
          </span>
        </h1>
        <p className="max-w-xl text-lg text-neutral-300 mb-10 relative z-10">
          Passionné par la création d'expériences numériques modernes, performantes et esthétiques, à travers toutes les dimensions.
        </p>
        
        <div className="flex gap-4 relative z-10 font-bangers tracking-wider">
          <Link
            href="/projets"
            className="px-8 py-3 rounded-full bg-portal-green text-space-dark font-bold hover:bg-rick-green transition-colors shadow-[0_0_15px_rgba(0,255,26,0.4)] hover:shadow-[0_0_25px_rgba(151,206,76,0.6)]"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border-2 border-portal-green/50 text-portal-green font-semibold hover:bg-portal-green/10 transition-colors"
          >
            Me contacter
          </Link>
        </div>
        <Signature />
      </section>
    </div>
  );
}
