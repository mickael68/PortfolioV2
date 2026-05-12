import { NextResponse } from "next/server";
import { getExperiences } from "@/lib/donnees";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") || "fr";
  
  try {
    const experiences = await getExperiences(locale);
    return NextResponse.json(experiences);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
