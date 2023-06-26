import { redirect } from 'next/navigation';

export const metadata = { title: 'Projects' };

export default function projects() {

    return <>
        <div className="container">
            <h2 className='titleHeader' >Overview</h2>
            <hr className="article" />
            <p>I've worked on many different projects, I've provided a few projects below for viewing. Currently the projects are unlinked, but I hope to attach them to specific pages in the future!</p>
            <p>[TODO]:<br />The list below will have their own webpages and cover their details such as my role in the project.</p>
        </div>
        <div className="container">
            <h2 className='titleHeader' >University Projects:</h2>
            <hr className="article" />
            <div className='projectCards' >
                <div className='card'>
                    <div id="assassins_shadow" className='cardImage' style={{ "backgroundImage": "url('/img/A_Shadow_banner.png')" }} />
                    <h3>Team Project: Assassin's Shadow</h3>
                    <hr className="article" />
                    <p>A two dimensional platformer game with movement, projectiles and item pickups.</p>
                    <a href='./work-in-progress'>Read More</a>
                </div>
                <div id="destruct_droid" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/DestructDroid_banner.jpg')" }} />
                    <h3>Team Project: Destruct Droid</h3>
                    <hr className="article" />
                    <p>Collaborative between programmers and technical artists remotely between two campuses.</p>
                    <a href='./work-in-progress'>Read More</a>
                </div>
                <div id="disseration_procedural" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/dissertation_banner.jpg')" }} />
                    <h3>Dissertation: Procedural Material Generation</h3>
                    <hr className="article" />
                    <p>Real-time rendering techniques using shaders, using algorithmic expression to generate textures.</p>
                    <a href='./work-in-progress'>Read More</a>
                </div>
            </div>
        </div>


        <div className="container">
            <h2 className='titleHeader' >Independent Projects:</h2>
            <hr className="article" />

            <div className='projectCards' >
                <div id="game_engine" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/3d-engine_banner.jpg')" }} />
                    <h3>OpenGl Java Project: 3D game engine</h3>
                    <hr className="article" />
                    <p>Post-University research and study: applying OpenGL experience towards Java language to express active C++ familiarity in Java.</p>
                    <a href='./work-in-progress'>Read More</a>
                </div>
                <div id="unity_project" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/unity_banner.jpg')" }} />
                    <h3>Unity Research Project: C#</h3>
                    <hr className="article" />
                    <p>Post-University research and study: exploring Unity engine, building three-dimensional spaces with shaders, custom textures and models.</p>
                    <a href='./work-in-progress'>Read More</a>
                </div>
                <div id="project_vale" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/projectvale_banner.jpg')" }} />
                    <h3>Full-Stack Application: Project Vale</h3>
                    <hr className="article" />
                    <p>Java refresh and full-stack application, including Java-8, JDBC connector, Spring, Junit, Javascript, React.</p>
                    <a href='https://github.com/MorickClive/Project-Vale#project-vale' target="_blank">Read More</a>
                </div>
            </div>
        </div>


        <div id='hobby_projects' className="container">
            <h2 className='titleHeader' >Hobby Projects:</h2>
            <hr className="article" />
            <div className='projectCards' >
                <div id="CnC_Maps" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/C&C_banner.png')" }} />
                    <h3>Command & Conquer: Community Map Development</h3>
                    <hr className="article" />
                    <p>A portfolio of custom Command & Conquer maps developed for the online community.</p>
                    <a href='./work-in-progress' className='wip'>Read More</a>
                </div>
                <div id="dst_warrick" className='card'>
                    <div className='cardImage' style={{ "backgroundImage": "url('/img/Warrick_banner.png')" }} />
                    <h3>Mod: Warrick the Afflicted, Don't Starve Together (LUA script)</h3>
                    <hr className="article" />
                    <p>A character mod that introduces a new custom character with unique items, structures and mechanics for Don't Starve Together game by Klei, available on the steam workshop.</p>
                    <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=935464768' target="_blank">Read More</a>
                </div>
            </div>
        </div>
    </>
}