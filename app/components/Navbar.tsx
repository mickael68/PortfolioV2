"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "À propos", href: "/about" },
  { name: "Compétences", href: "/skills" },
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors">
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-neutral-200 hover:text-cyan-400 transition-colors">
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-neutral-200 hover:text-cyan-400 transition-colors py-2"
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
