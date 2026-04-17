"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "À propos", href: "/a-propos" },
  { name: "Compétences", href: "/competences" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-portal-green transition-colors drop-shadow-[0_0_8px_var(--color-portal-green)] font-bangers">
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-widest">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-neutral-200 hover:text-portal-green transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0c10] border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-neutral-200 hover:text-portal-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
