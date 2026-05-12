import { NextResponse } from "next/server";
import { getProjets } from "@/lib/donnees";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") || "fr";
  
  try {
    const projets = await getProjets(locale);
    return NextResponse.json(projets);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
