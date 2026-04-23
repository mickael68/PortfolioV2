"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

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
          history: messages 
        }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Erreur dimensionnelle. Vérifie ta clé API ou réessaie plus tard !" }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Le portail est fermé. Erreur de connexion." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-80 md:w-96 h-[450px] bg-space-dark border-2 border-portal-green rounded-2xl flex flex-col overflow-hidden shadow-[0_0_30px_rgba(0,255,26,0.3)]"
          >
            {/* Header */}
            <div className="p-4 bg-portal-green/10 border-b border-portal-green/30 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portal-green rounded-full animate-pulse shadow-[0_0_10px_#00ff1a]"></div>
                <h3 className="font-bangers text-portal-green tracking-wider text-xl uppercase">Portal Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-portal-green transition-colors p-1"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-portal-green">
              {messages.length === 0 && (
                <div className="text-center text-neutral-500 mt-10">
                  <p className="text-sm italic">"Wubba Lubba Dub Dub ! Pose-moi une question sur le parcours de Mickaël."</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-portal-green text-space-dark font-medium rounded-tr-none shadow-[0_0_10px_rgba(0,255,26,0.3)]" 
                        : "bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-700">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-portal-green rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-portal-green rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-portal-green rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-neutral-900/50 border-t border-portal-green/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écris ton message..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-full py-2.5 px-5 pr-12 text-sm focus:outline-none focus:border-portal-green transition-colors text-neutral-200"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-portal-green hover:scale-110 transition-transform disabled:opacity-50 p-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </form>
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
        
        <div className="relative z-10 text-space-dark">
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
