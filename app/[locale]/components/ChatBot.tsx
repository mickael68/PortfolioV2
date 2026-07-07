"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocale } from "./LocaleProvider";

type Persona = "rick" | "pro" | null;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const { locale } = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [persona, setPersona] = useState<Persona>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = {
    fr: {
      welcome: "Bienvenue ! Ce portfolio intègre une",
      ia_exp: "IA expérimentale",
      conn_est: "Connexion établie. Choisissez votre interface :",
      mode_inter: "Mode Interdimensionnel",
      mode_pro: "Mode Professionnel",
      mode_inter_desc: '"Portail stabilisé.<br/>Analyse du visiteur en cours…<br/>Tolérance au chaos détectée : acceptable."',
      mode_pro_desc: '"Bonjour. Je peux vous guider rapidement à travers ce portfolio."',
      disclaimer: "Cette IA démontre mes compétences en Prompt Engineering. Elle est configurée avec des personnalités distinctes pour illustrer la maîtrise du fine-tuning de modèles génératifs.",
      input_placeholder: "Écris ton message...",
      loading_rick: "Portail en cours d'ouverture...",
      loading_pro: "Réponse en cours...",
      error_msg: "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
      error_rick: "Mince, une interférence dans le portail ! Réessaie dans quelques instants, Morty.",
      rick_init_msg: "**Bonjour et bienvenue !**\n\nPetit mot avant de commencer : pour pimenter ce portfolio et vous montrer ce que je sais faire avec les IA, j'ai donné à mon assistant un caractère de 'savant fou' avec un ego surdimensionné. Ne prenez pas ses remarques au sérieux, c'est 100 % fait exprès pour la démo technique ! Promis, en vrai, je suis quelqu'un de très posé et à l'écoute. Bonne visite !",
      rick_greeting: "\"Wubba Lubba Dub Dub ! Salutations, voyageur de l'espace-temps corporate. Qu'est-ce que tu cherches ? Son parcours, ses projets, ou tu veux tester mes limites ?\"",
      pro_greeting: "\"Bonjour ! Posez-moi vos questions sur le parcours, les compétences ou les projets de Mickaël.\"",
      switch_mode: "Changer de mode",
      interface_ia: "Interface IA"
    },
    en: {
      welcome: "Welcome! This portfolio integrates an",
      ia_exp: "experimental AI",
      conn_est: "Connection established. Choose your interface:",
      mode_inter: "Interdimensional Mode",
      mode_pro: "Professional Mode",
      mode_inter_desc: '"Portal stabilized.<br/>Analyzing visitor…<br/>Chaos tolerance detected: acceptable."',
      mode_pro_desc: '"Hello. I can quickly guide you through this portfolio."',
      disclaimer: "This AI demonstrates my skills in Prompt Engineering. It is configured with distinct personalities to illustrate mastery of fine-tuning generative models.",
      input_placeholder: "Write your message...",
      loading_rick: "Portal opening...",
      loading_pro: "Responding...",
      error_msg: "An error occurred. Please try again in a few moments.",
      error_rick: "Damn, portal interference! Try again in a few moments, Morty.",
      rick_init_msg: "**Hello and welcome!**\n\nA quick note before we start: to spice up this portfolio and show what I can do with AIs, I've given my assistant a 'mad scientist' character with an oversized ego. Don't take his remarks seriously, it's 100% intentional for the technical demo! I promise, in real life, I'm a very calm and attentive person. Enjoy your visit!",
      rick_greeting: "\"Wubba Lubba Dub Dub! Greetings, corporate space-time traveler. What are you looking for? His journey, his projects, or do you want to test my limits?\"",
      pro_greeting: "\"Hello! Ask me your questions about Mickaël's background, skills, or projects.\"",
      switch_mode: "Change mode",
      interface_ia: "AI Interface"
    }
  }[locale === 'en' ? 'en' : 'fr'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSelectPersona = (selected: Persona) => {
    setPersona(selected);
    if (selected === "rick") {
      setMessages([
        {
          role: "assistant",
          content: t.rick_init_msg,
        },
      ]);
    } else {
      setMessages([]);
    }
  };

  const handleSwitchPersona = () => {
    setPersona(null);
    setMessages([]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPersona(null);
    setMessages([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !persona) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: input,
          history: messages,
          persona,
          locale
        }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: persona === "rick" 
          ? t.error_rick 
          : t.error_msg 
        }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: persona === "rick" 
        ? t.error_rick 
        : t.error_msg
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isRick = persona === "rick";
  const headerTitle = isRick ? (locale === 'en' ? "Portal Assistant" : "Portal Assistant") : (locale === 'en' ? "Portfolio Assistant" : "Assistant Portfolio");
  const accentColor = isRick ? "portal-green" : "blue-400";
  const accentHex = isRick ? "rgba(0,255,26," : "rgba(96,165,250,";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-80 md:w-96 h-[450px] bg-background border-2 rounded-2xl flex flex-col overflow-hidden ${
              isRick || !persona
                ? "border-portal-green shadow-[0_0_30px_rgba(0,255,26,0.3)]"
                : "border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.3)]"
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b flex justify-between items-center ${
              isRick || !persona
                ? "bg-portal-green/10 border-portal-green/30"
                : "bg-blue-400/10 border-blue-400/30"
            }`}>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  isRick || !persona
                    ? "bg-portal-green shadow-[0_0_10px_#00ff1a]"
                    : "bg-blue-400 shadow-[0_0_10px_#60a5fa]"
                }`}></div>
                <h3 className={`font-bangers tracking-wider text-xl uppercase ${
                  isRick || !persona ? "text-portal-green" : "text-blue-400"
                }`}>
                  {persona ? headerTitle : t.interface_ia}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                {/* Switch persona button */}
                {persona && (
                  <button
                    onClick={handleSwitchPersona}
                    title={t.switch_mode}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isRick
                        ? "text-neutral-400 hover:text-portal-green hover:bg-portal-green/10"
                        : "text-neutral-400 hover:text-blue-400 hover:bg-blue-400/10"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
                {/* Close button */}
                <button 
                  onClick={handleClose}
                  className={`p-1 transition-colors ${
                    isRick || !persona
                      ? "text-neutral-400 hover:text-portal-green"
                      : "text-neutral-400 hover:text-blue-400"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Persona Selection Screen */}
            {!persona && (
              <div className="flex-1 overflow-y-auto p-4 flex flex-col">
                <div className="shrink-0 mb-4 bg-black/5 dark:bg-white/5 border border-portal-green/20 rounded-lg p-3 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-portal-green/5 animate-pulse"></div>
                  <div className="relative z-10">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                      {t.welcome} <span className="text-portal-green font-bold">{t.ia_exp}</span>.
                    </p>
                    <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                      <span>{t.conn_est}</span>
                    </div>
                  </div>
                </div>

                {/* Rick Mode */}
                <button
                  onClick={() => handleSelectPersona("rick")}
                  className="group w-full text-left p-4 rounded-xl border-2 border-portal-green/30 hover:border-portal-green bg-portal-green/5 hover:bg-portal-green/10 transition-all duration-300 mb-3"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bangers text-portal-green tracking-wider text-lg uppercase group-hover:drop-shadow-[0_0_8px_rgba(0,255,26,0.5)] transition-all">
                      {t.mode_inter}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed italic font-mono" dangerouslySetInnerHTML={{ __html: t.mode_inter_desc }} />
                </button>

                {/* Pro Mode */}
                <button
                  onClick={() => handleSelectPersona("pro")}
                  className="group w-full text-left p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400 bg-blue-400/5 hover:bg-blue-400/10 transition-all duration-300 mb-3"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bangers text-blue-400 tracking-wider text-lg uppercase group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all">
                      {t.mode_pro}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: t.mode_pro_desc }} />
                </button>

                {/* Disclaimer */}
                <div className="mt-auto pt-3 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 text-center leading-relaxed">
                    {t.disclaimer}
                  </p>
                </div>
              </div>
            )}

            {/* Messages Area — only when persona is selected */}
            {persona && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-portal-green">
                  {messages.length === 0 && (
                    <div className="text-center text-neutral-500 dark:text-neutral-500 mt-10">
                      <p className="text-sm italic">
                        {isRick
                          ? t.rick_greeting
                          : t.pro_greeting
                        }
                      </p>
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div 
                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                          msg.role === "user" 
                            ? isRick
                              ? "bg-portal-green text-[#0a0a0a] font-medium rounded-tr-none shadow-[0_0_10px_rgba(0,255,26,0.3)]"
                              : "bg-blue-500 text-white font-medium rounded-tr-none shadow-[0_0_10px_rgba(96,165,250,0.3)]"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-tl-none"
                        }`}
                      >
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            strong: ({node, ...props}) => <span className={`font-bold ${isRick ? "text-portal-green dark:text-portal-green" : "text-blue-500 dark:text-blue-400"}`} {...props} />,
                            em: ({node, ...props}) => <span className="italic" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc ml-4 mt-2 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal ml-4 mt-2 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-200 dark:border-neutral-700">
                        <div className="flex gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${isRick ? "bg-portal-green" : "bg-blue-400"}`}></div>
                          <div className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.2s] ${isRick ? "bg-portal-green" : "bg-blue-400"}`}></div>
                          <div className={`w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.4s] ${isRick ? "bg-portal-green" : "bg-blue-400"}`}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-white/50 dark:bg-neutral-900/50 border-t border-portal-green/20">
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                      placeholder={isLoading 
                        ? (isRick ? t.loading_rick : t.loading_pro) 
                        : t.input_placeholder
                      }
                      className={`w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none transition-colors text-neutral-800 dark:text-neutral-200 disabled:opacity-50 ${
                        isRick ? "focus:border-portal-green" : "focus:border-blue-400"
                      }`}
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform disabled:opacity-50 p-2 ${
                        isRick ? "text-portal-green" : "text-blue-400"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 bg-portal-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,26,0.5)] z-50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,rgba(0,255,26,0.2)_30%,rgba(0,255,26,0.8)_50%,rgba(151,206,76,0.8)_70%,transparent_100%)] animate-portal-spin opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10 text-[#0a0a0a]">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M4.913 2.658c2.075-.21 4.19-.32 6.337-.32 2.147 0 4.262.11 6.337.32a.75.75 0 01.67.744L18.37 12h-4.642l-1.056-4.62a.75.75 0 00-1.458 0L10.158 12H5.518l-.11-8.6a.75.75 0 01.67-.742zM5.518 13.5h4.64l1.057 4.62a.75.75 0 001.458 0l1.056-4.62h4.642l.11 8.6a.75.75 0 01-.67.742c-2.075.21-4.19.32-6.337.32-2.147 0-4.262-.11-6.337-.32a.75.75 0 01-.67-.744l.11-8.6z" />
            </svg>
          )}
        </div>
      </motion.button>
    </div>
  );
}
