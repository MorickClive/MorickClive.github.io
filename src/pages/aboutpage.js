const AboutMePage = () => {

    document.title = "CV - Alan Davies [About]";

    return <>
    <br />
    <h3>About Me:</h3>
    <br />
    <p>Software Engineering, in my experience has always been about communication; understanding the best way to translate intent and save information persistently.</p>
    <p>Whilst development of code to a solution might work immediately, testing enables the future-proofing of applications as well as the ability to evolve with dependencies.</p>
    <br />
    <div className="div page" />
    <br />
    
    <h3>Projects:</h3>
    <br />
    <ul class="list">
        <li>Dissertation – Procedural Materials</li>
        <li>Full-Stack Application: Project Vale</li>
        <li>Game Modification: Don't Starve Together: Warrick The Afflicted</li>
        <li>Sage engine – Community maps (2007-2010)</li>
        <li>Unity – Research Project (2016)</li>
        <li>Team Project – Assassin’s Shadow</li>
    </ul>
    <br />
    <div className="div page" />
    <br />

    <h3>Hobbies:</h3>
    <br />
    <details> <summary>Expand</summary>
        <p>Pending Implementation</p>
    </details>
    <br />
</>
}

export default AboutMePage;