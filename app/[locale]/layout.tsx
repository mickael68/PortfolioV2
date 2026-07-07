import { Bangers, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./components/LocaleProvider";
import Footer from "./components/Footer";
import StarParticles from "./components/StarParticles";

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

import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

import CustomCursor from "./components/CustomCursor";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale || 'fr';

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${bangers.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-portal-green/40 font-sans transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <StarParticles />
          <LocaleProvider initialLocale={locale}>
            <Navbar />
            {children}
            <ChatBot />
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

