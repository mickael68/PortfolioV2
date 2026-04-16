import fs from 'fs/promises';
import path from 'path';

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    type: 'Formation' | 'Personnel' | 'Professionnel';
}

export interface Skill {
    id: number;
    name: string;
    level: string;
    icon?: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    start_date: string;
    end_date: string | null;
    description: string;
    type: 'Professionnel' | 'Académique';
}

const dataDirectory = path.join(process.cwd(), 'data');

export async function getProjects(): Promise<Project[]> {
    const filePath = path.join(dataDirectory, 'projects.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getSkills(): Promise<Skill[]> {
    const filePath = path.join(dataDirectory, 'skills.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export async function getExperiences(): Promise<Experience[]> {
    const filePath = path.join(dataDirectory, 'experiences.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}
