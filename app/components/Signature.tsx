"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Signature() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPortal, setShowPortal] = useState(false);

    useEffect(() => {
        // Déclencher l'animation après un court délai
        const timer = setTimeout(() => {
            setShowPortal(true);
            
            // Faire apparaître la signature peu après le portail
            setTimeout(() => {
                setIsVisible(true);
            }, 500);

            // Faire disparaître le portail après quelques secondes
            setTimeout(() => {
                setShowPortal(false);
            }, 2500);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="z-50 pointer-events-none select-none">
            <div className="relative flex items-center justify-center w-48 h-24">
                {/* Effet de Portail */}
                <div 
                    className={`absolute inset-0 rounded-full border-2 border-portal-green/30 transition-all duration-1000 ease-out ${
                        showPortal ? "scale-100 opacity-100 rotate-180" : "scale-0 opacity-0 rotate-0"
                    }`}
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 255, 26, 0.1) 0%, transparent 70%)',
                        boxShadow: '0 0 30px rgba(0, 255, 26, 0.3), inset 0 0 15px rgba(0, 255, 26, 0.2)',
                    }}
                >
                    {/* Particules de portail tourbillonnantes */}
                    <div className="absolute inset-0 animate-spin-slow opacity-50">
                        <div className="absolute top-0 left-1/2 w-1 h-1 bg-portal-green rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-rick-green rounded-full"></div>
                        <div className="absolute left-0 top-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
                    </div>
                </div>

                {/* La Signature */}
                <div 
                    className={`relative transition-all duration-1000 ease-in-out transform ${
                        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                    }`}
                >
                    {/* Signature avec fond transparent */}
                    <Image 
                        src="/images/signature-removebg-preview.png" 
                        alt="Signature Mickaël Marco" 
                        width={180} 
                        height={90} 
                        className="invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    />
                </div>
            </div>
        </div>
    );
}
