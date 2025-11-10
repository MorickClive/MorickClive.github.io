import { Link } from "react-router-dom";
import type { Project } from '../data/types/types';
import projectsData from '../data/projects.json';

const projectTypes = ["University", "Hobby"];

export default function Projects() {
    return <main id="main">
        <div className="container">
            <h2 className='titleHeader'>Overview</h2>
            <hr className="article" />

            <p>I've worked on many different projects, I've provided a few projects below for viewing.</p>
            <em>~ If there is a project you'd like to know more about then please contact me, I can update the site or pass you some additional details upon request. ~</em>
            
        </div>
        {ProjectSections(projectsData)}
    </main>
}

function ProjectSections(data: Project[]) {
    return projectTypes.map((key) => { return section(key, data); });
}

function section(param: string, projectData: Project[]) {
    return <div className="container">
        <h2 className='titleHeader'>{param} Projects:</h2>
        <div className='projectCards'>
            {projectList(param, projectData)}
        </div>
    </div>;
}

function projectList(param: string, projectData: Project[]) {
    return projectData
        .filter(project => project.type === param.toString())
        .map(project => {
            if (project.id.includes("pending")) {
                return <Link key={project.id} id={project.id} className='card' to="/projects">
                    <div className={"projectBar"} />
                    <h3>{project.title}</h3>
                    <div className='image' style={{ "backgroundImage": `url('${project.banner_image}')`, "filter": "blur(2px)" }} />
                </Link>
            } else {
                return <Link key={project.id} id={project.id} className='card' to={`/projects/${project.id}`}>
                    <div className={"projectBar ".concat(project.type.toLowerCase())} />
                    <h3>{project.title}</h3>
                    <div className='image' style={{ "backgroundImage": `url('${project.banner_image}')` }} />
                </Link>
            }
        });
}
