import type { Project } from    '../../../data/types/types';
import projectsData from '../../../data/projects.json';

export default function getImageGallery(projectID: string) {
    const projects: Array<Project> = projectsData;   
    const project : Project | undefined = projects.find(project => project.id === projectID);
    if(project !== undefined) {
        return project.imageURLs;
    } else {
        return [];
    }
}