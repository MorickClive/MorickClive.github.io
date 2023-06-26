import SkillComponent from 'public/data/skills.json';

export default function About() {
    return <div id="skillList" >
        {SkillComponent.map(({ Header, List }, index) => {
            return <div className="skillSection" key={index}>
                <h3 className='title'>{Header}:</h3>
                <hr />
                {collapseSection(Header, List)}
            </div>
        })
        }
    </div>
}

const MainSkillSummary = <p>Primarily a Java developer with a testing focus, I follow TDD and BDD practices to reinforce digital applications maintenance.<br /><br />
    Striving for code coverage of at least 95%, I having experience in automated testing with JUnit, Selenium and static code analysis with Sonarqube.</p>

function collapseSection(section, items) {
    if (section === "Main Skills") {
        return <>
            <ul>
                {items.map((item, index) => { return <li key={index} >{item}</li> })}
            </ul>
            {MainSkillSummary}
        </>
    }

    return <>
        <details><summary>expand</summary>
            <ul>
                {items.map((item, index) => { return <li key={index} >{item}</li> })}
            </ul>
        </details>
    </>;
}