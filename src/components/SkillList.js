import SkillsList from "./data/SkillsList";

const SkillList = () => {
    return <div id="skillList" >
        {SkillsList.map( ({Header, List}, index) => {
            return <div key={index}>
                <h3>{Header}:</h3>
                <ul>
                    {List.map( (item, index) => { return <li key={index} >{item}</li> } )}
                </ul>
                <br />
            </div> })
        }
    </div>
}

export default SkillList;