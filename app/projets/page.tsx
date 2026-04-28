import { getProjets, Projet } from "../../lib/donnees";
import ListeProjets from "./ListeProjets";

export const dynamic = 'force-dynamic';

export default async function Projets() {
    let projets: Projet[] = [];
    try {
        projets = await getProjets();
    } catch (error) {
        console.warn("Erreur lors de la récupération des projets.", error);
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes Projets</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-rick-green via-portal-green to-teal-400 drop-shadow-[0_0_10px_rgba(0,255,26,0.3)] mx-auto rounded-full mb-12"></div>

                <ListeProjets projets={projets} />
            </div>
        </div>
    );
}
