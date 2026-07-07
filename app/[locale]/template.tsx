"use client";

import { motion } from "framer-motion";
import { useLocale } from "./components/LocaleProvider";

export default function Template({ children }: { children: React.ReactNode }) {
    const { locale } = useLocale();

    return (
        <motion.div
            key={locale}
            initial={{ opacity: 0, y: 20, filter: "blur(5px)", scale: 0.98 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ 
                ease: [0.25, 1, 0.5, 1], // Custom spring-like easing
                duration: 0.6 
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
