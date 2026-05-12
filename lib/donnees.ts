import fs from 'fs/promises';
import path from 'path';

export interface Projet {
    id: number;
    titre: string;
    description: string;
    descriptionLongue?: string;
    technologies?: string[];
    lien: string;
    type: 'Formation' | 'Personnel' | 'Professionnel';
    entreprise?: string;
    urlImage?: string;
    missions?: {
        titre: string;
        description: string;
        technologies?: string[];
        descriptionLongue?: string;
        urlImage?: string;
    }[];
}

export interface Competence {
    id: number;
    nom: string;
    niveau: string;
    icone?: string;
}

export interface Experience {
    id: number;
    titre: string;
    entreprise: string;
    date_debut: string;
    date_fin: string | null;
    description: string;
    type: 'Professionnel' | 'Académique';
}

const repertoireDonnees = path.join(process.cwd(), 'data');

export async function getProjets(locale: string = 'fr'): Promise<Projet[]> {
    const cheminFichier = path.join(repertoireDonnees, locale, 'projets.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}

export async function getCompetences(locale: string = 'fr'): Promise<Competence[]> {
    const cheminFichier = path.join(repertoireDonnees, locale, 'competences.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}

export async function getExperiences(locale: string = 'fr'): Promise<Experience[]> {
    const cheminFichier = path.join(repertoireDonnees, locale, 'experiences.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}
