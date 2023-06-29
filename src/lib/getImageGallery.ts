import projectList from '../../public/data/projects.json';
import { Project } from '../../types';
import getProjects from './getProjects';

export default function getImageGallery(projectID: string) {
    const projects: Array<Project> = getProjects();   
    const project : Project | undefined = projects.find(project => project.id === projectID);
    if(project !== undefined) {
        return project.imageURLs;
    } else {
        return [];
    }
}