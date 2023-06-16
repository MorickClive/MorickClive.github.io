import QualificationsList from "./data/QualificationList";

const Qualifications = () => {
    return <div id="skillList" style={{"display": "flex", "alignItems": "center", "paddingLeft": "0px"}} >
        <h2>{QualificationsList.Header}:</h2>
        {QualificationsList.List.map( (item, index) => {
            return index < 1 ? <h3 key={index} style={{"color": item.Style, "padding-left": "50px", "marginTop" : "25px"}}>Pending Implementation</h3> : "";
        })}
        <br />
    </div>
}

export default Qualifications;