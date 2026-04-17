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
    urlImage?: string;
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

export async function getProjets(): Promise<Projet[]> {
    const cheminFichier = path.join(repertoireDonnees, 'projets.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}

export async function getCompetences(): Promise<Competence[]> {
    const cheminFichier = path.join(repertoireDonnees, 'competences.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}

export async function getExperiences(): Promise<Experience[]> {
    const cheminFichier = path.join(repertoireDonnees, 'experiences.json');
    const contenuFichier = await fs.readFile(cheminFichier, 'utf8');
    return JSON.parse(contenuFichier);
}
