import Link from "next/link";
import SkillList from "./components/SkillList";

export const metadata = { title: 'About' };

export default function about() {
    return <>
        <div className="container" >
            <h1 className="titleHeader">Alan Davies</h1>
            <div className="div header" />
            <div id="avatar" />
            <div className="div page" />
            <h1 id="roleTitle">Software Development Engineer in Test</h1>
            <div className="div footer" />
            <br />
            <h3>About Me:</h3>
            <p>To me, the most important thing about technology has always been about communication; understanding the best way to translate intent and save information.</p>
            <p>
                As a graduate from a Games Development BSc degree(2-1), C++ formed the main programming approach, this provided insight into procedural and object-oriented languages as well as the intricacies of thread behaviour.
            </p>
            <p>
                I've self taught myself Java after leaving university, it was my interest to expand to a language that had platform independence and an industrial presence.
                Exploring other programming languages for personal projects, my employment with QA ltd reinforced my practice with their professional resources for consultants and trainers.
            </p>
        </div>
        <div className="container" >
            <br />
            <h2 >Skills & Technologies</h2>
            <br />
            <div className="div footer" />
            <br />
            <SkillList />
            <div className="div footer" />
            <p>
                Primarily a Java developer with a testing focus, I follow TDD and BDD practices to maintain digital applications. </p>
            <p>
                Code design techniques such as Entity Relationship Diagrams and Universal Modelling Language help shape and communicate design intent, allows for rigid testing goals.
                I enthuse about striving for good code coverage in code, having experience in automated testing with Junit, Selenium and static code analysis with Sonarqube.
            </p>
            <div className="div footer" />
        </div>

        <div className="container" >
            <PreviousRoles />
        </div>
        <div className="container" >
            <Hobbies />
        </div>
    </>
}

const PreviousRoles = () => {
    return <>
        <br />
        <h2>Previous Roles:</h2>
        <div className="div footer" />

        <h3>Learning Specialist, 2020-2021, QA ltd.</h3>
        <p className="indentation">Teaching and training new consultants and transitioning training to a remote environment, developing course reference material and new course pathways.</p>
        <br />

        <h3>Consultant: Software Engineer, 2017-2018, QA ltd.</h3>
        <p className="indentation">Working as a consultant, supporting a service-oriented architecture, upgrading dependencies and ensuring dependent service software met company code policy.</p>
        <br />
    </>
}

const Hobbies = () => {
    return <>
        <h2>Hobbies:</h2>
        <div className="div footer" />

        <details><summary>Walking</summary>
            <p>An opportunity to disconnect, explore the outdoors and get away from the desk; resting my eyes and maintain health.</p>
            <div className="div footer" />
        </details>

        <details><summary>Digital Art</summary>
            <p>Games development involves a broad range of skill sets and myself drawn to the intricacies of capturing non-verbal concepts and exploring lighting and form.</p>
            <p>Something that I discovered during the Covid pandemic of 2020 was that I had Aphantasia of the minds eye; the notion that individuals can truly visualise imagery amazes me, yet I know that my art becomes my own reward - as I manifest ideas/scenes into reality</p>
            <p>Whilst I have a difficulty in visualising, I've adapted my thinking to logical, grounded concepts and draw from my spacial perceptions and intuition to express myself.</p>
            <div className="div footer" />
        </details>

        <details><summary>Photography</summary>
            <p>Whilst I don't have a large portfolio of photographs, I explore the world with a visual bias with the unfortunate inability to conjure visual manifestations in my mind</p>
            <p>Photography extends from my interest in art - providing a template of case studies for how lighting can influence mood as well as composition of subjects and landscapes.
                There's opportunity to capture perspective in many ways and I'd like to think I could capture a moment and explore how my perspective differs or matches others.</p>
            <div className="div footer" />
        </details>

        <details><summary>Instrument: Bass</summary>
            <p>Music helps me focus on building my auditory senses; leaning on my ability to identify and memorise patterns helps me find a harmony - The bass can establish rhythm and contrast with other instruments such as drums, as well as string and electronic based.</p>
            <div className="div footer" />
        </details>

        <details><summary>Game modification</summary>
            <p>I've always been inspired video games, growing up I had limited opportunities to sample the most recent releases and found myself programming content for myself from the Command & Conquer series, this developed into map creation and the exploration of games that enabled community development.</p>
            Check out some of these <Link href='./projects#hobby_projects'>[Projects here]</Link>
            <div className="div footer" />
        </details>

        <details><summary>Dungeons & Dragons</summary>
            <p>A group of long term friends formed groups to create fantasy settings, presenting and scheduling a routine with a fortnight schedule, being both a player as well as a host, I enjoy the ability to put some of my game development skills into providing a shared experience that builds on teamwork and shared storytelling.</p>
            <div className="div footer" />
        </details>
        <br />
    </>
}