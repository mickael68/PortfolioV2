import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-4">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full max-w-5xl">
            {/* Animated Portal Avatar Container */}
            <div className="relative flex items-center justify-center group flex-shrink-0">
              {/* Animated portal background */}
              <div className="absolute -inset-10 rounded-full border-4 border-portal-green/50 animate-portal-spin pointer-events-none" 
                   style={{
                     background: 'conic-gradient(from 0deg, transparent 0%, rgba(0, 255, 26, 0.2) 30%, rgba(0, 255, 26, 0.8) 50%, rgba(151, 206, 76, 0.8) 70%, transparent 100%)',
                     boxShadow: '0 0 40px 10px rgba(0, 255, 26, 0.4), inset 0 0 20px rgba(0, 255, 26, 0.5)',
                     filter: 'blur(2px)'
                   }}>
              </div>
              
              {/* Pulsing inner glow */}
              <div className="absolute -inset-2 md:-inset-3 rounded-full bg-portal-glow/40 animate-pulse-glow blur-md shadow-[0_0_50px_rgba(0,255,26,0.6)]"></div>
              
              {/* Avatar Base */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-portal-green bg-space-dark z-10 
                              group-hover:border-rick-green transition-colors duration-500 shadow-[inset_0_0_15px_rgba(0,255,26,0.8)]">
                <div className="flex items-center justify-center w-full h-full">
                  <Image src="/images/Mickaël_Marco.png" alt="Avatar" width={224} height={224} className="object-cover relative z-10" />
                </div>
              </div>
            </div>

            {/* Text and Buttons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl mt-8 md:mt-0">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.5)]">
                    Développeur Web
                  </span>
                </h1>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-xl">
                  Passionné par la création d'expériences numériques modernes, performantes et esthétiques, à travers toutes les dimensions.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 font-bangers tracking-wider">
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
            </div>
        </div>


      </section>
    </div>
  );
}
