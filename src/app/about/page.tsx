import Link from "next/link";
import SkillList from "./components/SkillList";

export const metadata = { title: 'About' };

export default function about() {
    return <>
        <div className="container" >
            <h1 className="titleHeader">Alan Davies</h1>
            <hr className="header" />
            <div id="avatar" />
            <hr className="page" />
            <h1 id="roleTitle">Software Development Engineer in Test</h1>
            <hr className="footer" />
            <h3>About Me:</h3>
            <p>The most important thing about technology is communication; understanding the best way to translate ideas and intent is my primary goal.</p>
            <p>A graduate of a Games Development BSc degree(2-1), C++ was my primary introduction to programming languages; this provided insight into procedural and object-oriented languages, including the intricacies of memory management.</p>
            <p>After leaving The University of South Wales, I focused on learning Java; I wished to learn a language that offered platform independence and an industrial presence. Exploring other programming languages for personal projects, my employment with QA Ltd reinforced my practice with their professional resources for consultants and trainers.</p>
        </div>
        
        <div className="container" >
            <h2 >Skills & Technologies</h2>
            <hr className="footer" />
            <SkillList />
            <hr className="footer" />
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
        <h2>Previous Roles:</h2>
        <hr className="footer" />

        <h3>Learning Specialist, 2020-2021, QA ltd.</h3>
        <p className="indentation">Teaching and training new consultants and transitioning training to a remote environment, developing course reference material and new course pathways.</p>

        <h3>Consultant: Software Engineer, 2017-2018, QA ltd.</h3>
        <p className="indentation">Working as a consultant, supporting a service-oriented architecture, upgrading dependencies and ensuring dependent service software met company code policy.</p>
    </>
}

const Hobbies = () => {
    return <>
        <h2>Hobbies:</h2>
        <hr className="footer" />

        <details><summary>Walking</summary>
            <p>An opportunity to disconnect, explore the outdoors and get away from the desk; resting my eyes and maintain health.</p>
            <hr className="footer" />
        </details>

        <details><summary>Digital Art</summary>
            <p>Whilst I’m captured by the achievements the game industry has achieved, without technology focusing such a large part in my life, I suspect I might have been more of an artist.</p>
            <p>Appreciating the nuances of perception and intricacies of non-verbal concepts, exploring lighting and form interests me as it reveals notions of how the world around us works.</p>
            <p>I discovered during the Covid pandemic of 2020 that I had a form of the mind's eye Aphantasia, yet I know that the work I develop becomes a reward unto itself once finished.</p>
            <p>Despite the revelation, I've adapted my thinking to logical, grounded concepts and drawn from my spacial perceptions and intuition to express myself.</p>
            <hr className="footer" />
        </details>

        <details><summary>Photography</summary>
            <p>Photography extends from my interest in art - providing a template of case studies for how lighting can influence mood, and the composition of subjects and landscapes provides a reference for how an audience might infer meaning.</p>
            <p>There's an opportunity to capture perspective in many ways; I'd strive to recognise and capture such scenes, exploring how my perception of the world differs or matches others.</p>
            <hr className="footer" />
        </details>

        <details><summary>Instrument: Bass</summary>
            <p>Music helps me focus on building my auditory senses; leaning on my ability to identify and memorise patterns helps me find harmony - The bass can establish rhythm and contrast with drums, strings and electronic-based instruments.</p>
            <hr className="footer" />
        </details>

        <details><summary>Game modification</summary>
        <p>During my teens, I began developing content from the Command & Conquer series for the general gaming community online. This hobby expanded into programming - changing xml and ini files to adapt content.</p>
        <p>With research and collaborations, I achieved recognition by Electronic Arts for some of the works I shared and completed.</p>
            Check out some of these <Link href='./projects#hobby_projects'>[Projects here]</Link>
            <hr className="footer" />
        </details>

        <details><summary>Dungeons & Dragons</summary>
            <p>A group of long-term friends formed groups to create fantasy settings, presenting and scheduling a routine with a fortnight schedule.</p>
            <p>Being both a player as well as a host, I enjoy the ability to put some of my game development skills into providing a shared experience that builds on teamwork and shared storytelling.</p>
            <hr className="footer" />
        </details>
    </>
}