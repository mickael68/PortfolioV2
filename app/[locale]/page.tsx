"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/app/[locale]/components/LocaleProvider";
import { motion } from "framer-motion";

export default function Home() {
  const { locale, dictionary } = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-4">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full max-w-5xl"
        >
            {/* Animated Portal Avatar Container */}
            <motion.div variants={itemVariants} className="relative flex items-center justify-center group flex-shrink-0">
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
                  <Image src="/images/avatar.png" alt="Avatar" width={224} height={224} className="object-cover relative z-10" />
                </div>
              </div>
            </motion.div>

            {/* Text and Buttons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 max-w-2xl mt-8 md:mt-0">
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.5)]">
                    {dictionary.hero.title}
                  </span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-xl">
                  {dictionary.hero.subtitle}
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 font-bangers tracking-wider">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={`/${locale}/projets`}
                      className="px-8 py-3 rounded-full bg-portal-green text-space-dark font-bold hover:bg-rick-green transition-colors shadow-[0_0_15px_rgba(0,255,26,0.4)] hover:shadow-[0_0_25px_rgba(151,206,76,0.6)] inline-block"
                    >
                      {dictionary.hero.viewProjects}
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={`/${locale}/contact`}
                      className="px-8 py-3 rounded-full border-2 border-portal-green/50 text-portal-green font-semibold hover:bg-portal-green/10 transition-colors inline-block"
                    >
                      {dictionary.hero.contactMe}
                    </Link>
                  </motion.div>
                </motion.div>
            </div>
        </motion.div>


      </section>
    </div>
  );
}

