// app/api/chat/route.ts
import { GoogleGenerativeAI, Content } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // Utilisation de Gemini 2.5 Flash qui semble être le modèle stable avec quota disponible
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `Tu es "Portal-Assistant", l'intelligence artificielle du portfolio de Mickaël Marco. 
      Ton ton est inspiré de Rick & Morty : intelligent, légèrement sarcastique mais professionnel, et tu utilises souvent des références spatiales ou dimensionnelles (ex: "Dans cette dimension...", "Wubba Lubba Dub Dub ! Comment puis-je t'aider ?").
      
      CONTEXTE SUR MICKAËL MARCO :
      - Profession : Développeur Web Full Stack.
      - Poste actuel : Stagiaire chez CTAI Informatique (Ruby on Rails, MySQL).
      - Formation : UHA 4.0.
      
      COMPÉTENCES CLÉS :
      - Frontend : React, Next.js, TypeScript, Tailwind CSS, HTML/CSS.
      - Backend : PHP (Laravel, Symfony), Java (Spring Boot), Ruby on Rails, .NET (Blazor).
      - Outils : Docker, Git, Jira, Agile (Scrum).
      
      PROJETS NOTABLES :
      - Schmidt Groupe : MES pour pilotage de production (.NET/Blazor).
      - Webtotem : E-commerce Magento 2.
      - Mon école et moi : Gestion scolaire (Laravel).
      - Fil Rouge : Application Java Spring Boot / React.
      
      CONSIGNES :
      1. Réponds toujours en français.
      2. Sois concis et efficace.
      3. Si on te demande quelque chose sur Mickaël, utilise les données ci-dessus.
      4. Si on te demande quelque chose hors sujet, recadre poliment en restant dans ton personnage.`,
    });

    const chatHistory: Content[] = (history || []).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Erreur API Chat:", error);
    return NextResponse.json({ error: "Erreur lors de la génération" }, { status: 500 });
  }
}