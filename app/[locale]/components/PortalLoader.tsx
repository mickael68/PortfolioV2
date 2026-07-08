"use client";

import { motion } from "framer-motion";

interface PortalLoaderProps {
    text?: string;
}

export default function PortalLoader({ text = "Chargement interdimensionnel..." }: PortalLoaderProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-8">
            <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outer spin portal */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(0,255,26,0.1)_30%,rgba(0,255,26,0.4)_50%,rgba(151,206,76,0.8)_70%,transparent_100%)] blur-[2px]"
                />
                
                {/* Inner darker core */}
                <motion.div 
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-2 rounded-full bg-space-dark border-[2px] border-portal-green/50 shadow-[0_0_15px_rgba(0,255,26,0.5)_inset]"
                />
                
                {/* Central dot or spark */}
                <motion.div
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-4 h-4 bg-portal-green rounded-full shadow-[0_0_10px_rgba(0,255,26,1)] z-10"
                />
            </div>
            <motion.p 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-bangers text-xl text-portal-green tracking-widest drop-shadow-[0_0_8px_rgba(0,255,26,0.5)]"
            >
                {text}
            </motion.p>
        </div>
    );
}
