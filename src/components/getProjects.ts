import type { Project } from '../data/types/types.d.ts';
import projectsData from '../data/projects.json';

export default function getProjects(): Project[] {
    return projectsData;
}