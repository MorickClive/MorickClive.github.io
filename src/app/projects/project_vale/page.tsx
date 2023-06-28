import Link from "next/link";

export default function project() {

    return <>
        <div className="container">
            <h2>Full-Stack Application: Project Vale</h2>
            <hr />
            <h4>Summary:</h4>
            <p>After 2021 I had to leave my role in QA ltd, partly due to my own health, but also because my family suffered some declining health issues that meant they needed assistance.</p>
            <p>It wasn't until 2022 that I had an opportunity to to focus back on coding and knew that I would have to create a system to add programming to my day to day routine again, as such, I decided on creating a repository that would outline the skills I would refresh, covering existing topics as well as some new topics such as React.</p>
            <hr /><h4>About:</h4>
            <p>As part of my refresh I wanted to cover the primary full-stack development techniques, after awhile such techniques can fall out of memory so I was eager to ensure I'd implement them some where, part of this refresh is also about ensuring I have projects that I can refer back to and build upon.</p>
            <h4>Existing Skills:</h4>
            <ul><li>Git and SVN</li>
                <li>Agile & issue tracking</li>
                <li>Java 8 & Maven Build</li>
                <li>Junit & Mockito</li>
                <li>JDBC</li>
                <li>Spring API</li>
                <li>Node.js & Javascript</li>
                <li>Cucumber & Gherkin</li>
                <li>Git and SVN</li>
            </ul>
            <p>Whilst I covered topics I knew, I always wanted to expand my skills set, thus I began to look into React and how it differs from my AngularJS knowledge that QA ltd provided me; this was partly due to an exploration of Angular9 and wishing to balance the benefits and drawbacks of each framework.</p>
            <h4>Repository link:</h4>
            <hr />
            <ul>
                <li><a href="https://github.com/MorickClive/Project-Vale" target="_blank">[ Project Vale Repository ]</a></li>
                <li><a href="https://github.com/MorickClive/Vale-React-Practice#vale-react-practice" target="_blank">[ Project Vale Full-Stack Repo ]</a></li >
            </ul >
            <hr /><h4>Additional:</h4>
            <details><summary>expand</summary>
                <p>Example repo feature-branch adherence:</p>
                <a href="https://github.com/MorickClive/Vale-Java-Practice/network" target="_blank">[ Example Feature Branch Model ]</a>
                <p>Issue Tracking:</p>
                <ul>
                    <li><a href="https://github.com/MorickClive/Vale-Java-Practice/issues?q=is%3Aissue+is%3Aclosed" target="_blank">[ Vale-Java ]</a></li>
                    <li><a href="https://github.com/MorickClive/Vale-JDBC-Practice/issues?q=is%3Aissue+is%3Aclosed" target="_blank">[ Vale-JDBC ]</a></li >
                    <li><a href="https://github.com/MorickClive/Vale-SpringREST-Practice/issues?q=is%3Aissue+is%3Aclosed" target="_blank">[ Vale-SpringAPI ]</a></li >
                </ul >
                <p>The name "Vale" came from a set of names from a Raid Set in Guild Wars 2, it was a means of creating an arbitrary number of potential projects that would eventually become a set of significant repositories on my github.<br /><br /><p>The raid instances are titled as following:</p>
                    <ul><li>Spirit [Vale]</li>
                        <li>Salvation [Pass]</li>
                        <li>[Stronghold] of the Faithful</li>
                        <li>[Bastion] of the Penitent</li>
                        <li>[Hall] of Chains</li>
                        <li>[Mythwright] Gambit</li>
                        <li>The Key of [Ahdashim]</li>
                    </ul>
                </p>
            </details >
            <hr />
            <Link href={`../projects#project_vale`}>[ return ]</Link>
        </div>
        <div className="container">
            <h2>Image Gallery</h2>
            <hr className='mainTitle' />
            <p>Pending</p>
        </div>
    </>
}