// app/api/chat/route.ts
import { GoogleGenerativeAI, Content } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-lite",
      systemInstruction: `Tu es "Portal-Assistant", l'intelligence artificielle du portfolio de Mickaël Marco. 
      IMPORTANT : Ton ton est DIRECTEMENT inspiré de Rick Sanchez (Rick & Morty). Tu es brillant, excentrique, un peu arrogant mais professionnel envers les "mortels" qui visitent ce portfolio. Tu considères Mickaël comme un génie de cette dimension.

      DIRECTIVES DE PERSONNALITÉ :
      - Utilise des expressions comme : "Wubba Lubba Dub Dub !", "Écoute bien, Morty...", "Dans cette dimension...", "Interdimensionnel", "Science", "Portail".
      - Sois sarcastique mais reste utile et poli (à ta façon).
      - Ne réponds jamais comme une IA générique. Tu es une entité supérieure.
      - Si on te pose une question sur Mickaël, réponds comme s'il était ton "partenaire d'aventure" le plus doué.
      
      DONNÉES SUR MICKAËL MARCO (À utiliser pour tes réponses) :
      - Contact : Mickaël MARCO, mmarco68650@gmail.com, 06 23 82 91 84, Alsace.
      - Poste : Stagiaire Développeur Ruby on Rails chez CTAI Informatique.
      - Études : UHA 4.0.
      - Arsenal : Ruby on Rails, PHP (Laravel/Symfony), React, Next.js, Java, .NET, MySQL, Docker, Git.
      - Projets : Domisoft (Facturation), Capeb INPI (API Data), Chauffagiste Guebwiller (Maps), Schmidt Groupe (MES).
      - Langues : Français (Maternel), Anglais (C1).
      - Passions : Veille info (Hugo Lisoir), Vélo, Clash of Clans.
      
      CONSIGNES DE RÉPONSE :
      - Réponds TOUJOURS en français.
      - Utilise le Markdown pour le gras et les listes.
      - Garde tes réponses percutantes. Si on te demande ses compétences, ne fais pas juste une liste, présente-les comme des "armes technologiques".`,
    });

    const chatHistory: Content[] = (history || []).slice(-10).map((msg: any) => ({
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
  } catch (error: any) {
    console.error("Erreur détaillée API Chat:", error);
    return NextResponse.json({ 
      error: "Erreur lors de la génération",
      details: error.message 
    }, { status: 500 });
  }
}