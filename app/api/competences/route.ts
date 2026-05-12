import { NextResponse } from "next/server";
import { getCompetences } from "@/lib/donnees";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") || "fr";
  
  try {
    const competences = await getCompetences(locale);
    return NextResponse.json(competences);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
