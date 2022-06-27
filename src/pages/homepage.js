import SkillList from "../components/SkillList";

const HomePage = () => {

    document.title = "CV - Alan Davies [Profile]";

    return <>
            <Introduction />
            <SkillList />
        </>;
}


const Introduction = () => {
    return <>
        <h1  id="roleTitle">Software Development Engineer in Test</h1>
        <div className="div footer" />
        <h3>Introduction:</h3>
        <br />
        <p>I've designed this page to quickly target the key areas that you'll want to know about me. Name, skill set, qualifications & previous experience.</p>
        <p>Hopefully this will provide with a good overview of what I could provide your software team.</p>
        <p>This will contain more details in the near future; currently an overview of both technical and non-technical skills.</p>
        <div className="div footer" />
        <p className="italic">Notice: This site is "Work in Progress" and may not reflect the final intended form.</p>
    </>
}

export default HomePage;