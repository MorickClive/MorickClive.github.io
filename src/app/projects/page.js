import { redirect } from 'next/navigation';

export const metadata = { title: 'Projects' };

export default function projects() {

    return <>
        <div className="container">
            <h1 className='titleHeader' >Overview</h1>
            <div className="div page" />
            <p>I've worked on many different projects, I've provided a few projects below for viewing. Currently the projects are unlinked, but I hope to attach them to specific pages in the future!</p>
            <p>[TODO]</p>
            <p>The list below will have their own webpages and cover their details such as my role in the project. Currently these are preview cards without links or expanded details</p>
            <div className="div page" />
        </div>
        <div className="container">
            <h2 className='titleHeader' >University Projects:</h2>
            <div className="div page" />
            <br />
            <div className='imageBox' style={{ "backgroundImage": "url('/img/A_Shadow_banner.png')" }} >
                <h3>Team Project: Assassin's Shadow</h3>
            </div>

            <br />
            <div className='imageBox' style={{ "backgroundImage": "url('/img/dissertation_banner.jpg')" }} >
                <h3>Dissertation: Procedural Material Generation</h3>
            </div>
        </div>


        <div className="container">
            <h2 className='titleHeader' >Independent Projects:</h2>
            <div className="div page" />
            <br />
            <div className='imageBox' style={{ "backgroundImage": "url('/img/unity_banner.jpg')" }} >
                <h3>Unity Research Project: C#</h3>
            </div>
            <br /><div className='imageBox' style={{ "backgroundImage": "url('/img/projectvale_banner.jpg')" }} >
                <h3>Full-Stack Application: Project Vale</h3>
            </div>
        </div>


        <div className="container">
            <h2 className='titleHeader' >Hobby Projects:</h2>
            <div className="div page" />
            <br /><div className='imageBox' style={{ "backgroundImage": "url('/img/C&C_banner.png')" }} >
                <h3>Command & Conquer: Community Map Development</h3>
            </div>
            <br /><div className='imageBox' style={{ "backgroundImage": "url('/img/Warrick_banner.png')" }} >
                <h3>Mod: Warrick the Afflicted, Don't Starve Together (LUA script)</h3>
            </div>
        </div>
    </>
}