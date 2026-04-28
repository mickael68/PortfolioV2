"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "À propos", href: "/a-propos" },
  { name: "Compétences", href: "/competences" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-portal-green transition-colors drop-shadow-[0_0_8px_var(--color-portal-green)] font-bangers">
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className={`transition-colors duration-300 ${
                    isActive ? "text-portal-green font-bold" : "text-neutral-400 hover:text-portal-green"
                  }`}
                >
                  {item.name}
                </Link>
                {/* Underline for active state */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-portal-green shadow-[0_0_10px_rgba(0,255,26,0.8)] rounded-full animate-in fade-in zoom-in duration-500" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-200 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111827] border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-lg font-bangers tracking-widest transition-colors py-2 px-4 rounded-lg ${
                  isActive ? "bg-portal-green/10 text-portal-green" : "text-neutral-200 hover:text-portal-green hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
