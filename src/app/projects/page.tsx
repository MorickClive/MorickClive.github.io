import { Project } from '../../../types';
import Link from 'next/link';
import getProjects from '@/lib/getProjects';

export const metadata = { title: 'Projects' };

const projectTypes = ["University", "Hobby"];

export default function projects() {

    return <>
        <div className="container">
            <h2 className='titleHeader' >Overview</h2>
            <hr className="article" />
            <p>I've worked on many different projects, I've provided a few projects below for viewing. Currently I'm looking to extend these project pages by adding image galleries and links to respective resources!<br />Currently many of the projects have been transferred from a word press site I use to use, project pages might be lacking consistency, but this has been placed on to issues to resolve.</p>
            <p>If there is a project you'd like to know more about, contact me, I can update the site or pass you some additional details upon request.</p>
        </div>
        {ProjectSections(getProjects())}
    </>
}

function ProjectSections(data: Project[]) {
    return projectTypes.map((key) => { return section(key, data); });
}

function section(param: string, projectData: Project[]) {
    return <div className="container">
        <h2 className='titleHeader' >{param} Projects:</h2>
        <div className='projectCards' >
            {projectList(param, projectData)}
        </div>
    </div>;
}

function projectList(param: string, projectData: Project[]) {
    return projectData
        .filter(project => project.type === param.toString())
        .map(project => {
            if (project.id.includes("pending")) {
                return <Link key={project.id} id={project.id} className='card' href={"./projects"} >
                <div className={"projectBar"} />
                <h3>{project.title}</h3>
                <div className='image' style={{ "backgroundImage": `url('${project.banner_image}')`, "filter": "blur(2px)" }} />
            </Link>
            } else {
                return <Link key={project.id} id={project.id} className='card' href={"./projects/" + project.id} >
                    <div className={"projectBar ".concat(project.type.toLowerCase())} />
                    <h3>{project.title}</h3>
                    <div className='image' style={{ "backgroundImage": `url('${project.banner_image}')` }} />
                </Link>

            }
        });
}