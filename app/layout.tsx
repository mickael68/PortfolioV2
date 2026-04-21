import type { Metadata } from "next";
import { Bangers, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mickaël MARCO | Développeur Web Interdimensionnel",
  description: "Portfolio de Mickaël MARCO, développeur web passionné par les expériences numériques modernes et de haute performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bangers.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0c10] text-neutral-200 selection:bg-portal-green/40 font-sans`}
      >
        <Navbar />
        {children}
        {/* Footer */}
        <footer className="py-4 border-t border-white/5 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Tous droits réservés. Mickaël MARCO.</p>
        </footer>
      </body>
    </html>
  );
}
