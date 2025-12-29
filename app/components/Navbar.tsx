import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors">
                Portfolio
            </Link>
            <ul className="flex gap-6 text-sm font-medium">
                <li>
                    <Link href="/about" className="hover:text-cyan-400 transition-colors">
                        À propos
                    </Link>
                </li>
                <li>
                    <Link href="/skills" className="hover:text-cyan-400 transition-colors">
                        Compétences
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                        Projets
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
