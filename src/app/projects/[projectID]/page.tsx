import { Project } from '../../../../types';
import getProjects from '@/lib/getProjects';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

export const metadata = { title: 'Project' };
   
export async function generateMetadata(
    { params }: Params): Promise<Metadata> {
    // read route params
    const id = params.projectID;
    return {
      title: `Project: ${id}`
    }
  }

type Params = {
    params: {
        projectID: string;
    }
}

export default async function userPage({ params }: Params) {

    const project: Project | undefined = getProjects().find(({ id }) => id === params.projectID);

    if (project !== undefined) {
        const msg = <>
            <div className="container">
                <h2>{project.title}</h2>
                <hr className='mainTitle' />
                <div dangerouslySetInnerHTML={{ __html: project.contents }} />
                <Link href={`../projects#${project.id}`}>[ return ]</Link>
            </div>
            <div className="container">
                <h2>Image Gallery</h2>
                <hr className='mainTitle' />
                <p>Pending</p>
            </div>
        </>

        return (msg)
    } else {
        return undefined;
    }
}
