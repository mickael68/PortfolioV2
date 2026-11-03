"use client";

import Link from "next/link";
import { useLocale } from "@/app/[locale]/components/LocaleProvider";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const { locale, dictionary } = useLocale();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
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
          className="flex flex-col items-center justify-center text-center z-10 max-w-3xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-normal md:leading-normal">
            <span className="inline-block p-4 -m-4 bg-clip-text text-transparent bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(52, 211, 153, 0.2)]">
              {dictionary.hero.title}
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-2xl">
            {dictionary.hero.subtitle}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 font-bangers tracking-wider">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}/projets`}
                className="px-8 py-3 rounded-full bg-portal-green text-space-dark font-bold hover:bg-rick-green transition-colors shadow-[0_0_15px_rgba(52, 211, 153, 0.16)] hover:shadow-[0_0_25px_rgba(163, 230, 53, 0.24)] inline-block"
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
        </motion.div>


      </section>
    </div>
  );
}

