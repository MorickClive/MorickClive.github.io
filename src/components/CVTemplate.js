import SocialMediaBar from "./SocialMediaBar";

const CVTemplate = ({BodyRender}) => {
    return <div className="container">
                <h1  id="nameHeader">Alan Davies</h1>
                <div className="div header" />
                <div id="avatar" />
                <div className="div page" />
                {BodyRender}
                <Footer />
            </div>;
}

// eslint-disable-next-line
const ProfileHeader = () => {
    return <>
        <h1  id="nameHeader">Alan Davies</h1>
        <div className="div header" />

        <div id="avatar" />
        <h1  id="roleTitle">Software Development Engineer in Test</h1>
        <div className="div page" />
    </>
}

const Footer = () => {
    return <>
        <div className="div footer" />
        <p className="italic">Interested in contacting me for a development/dev-test role?<br />Please reach out on LinkedIn.</p>
        <div className="div footer" />
        <p  className="italic" style={{"float": "left"}}>This project is hosted on GitHub.</p>
        
        <SocialMediaBar />
    </>
}


export default CVTemplate;