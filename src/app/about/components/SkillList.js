import SkillComponent from 'public/data/skills.json';

export default function About() {
    return <div id="skillList" >
        {SkillComponent.map( ({Header, List}, index) => {
            return <div key={index}>
                <h3>{Header}:</h3>
                <details><summary>Expand</summary>
                <ul>
                    {List.map( (item, index) => { return <li key={index} >{item}</li> } )}
                </ul>
                </details>
                <br />
            </div> })
        }
    </div>
}