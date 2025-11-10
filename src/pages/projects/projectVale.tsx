import { Link } from "react-router-dom";

export default function ProjectVale() {

    return <main id="main">
        <div className="container project">
            <h2>Full-Stack Application: Project Vale</h2>
            <hr />
            <p>After 2021 I had to leave my role in QA Ltd due to health and family reasons.</p>
            <p>It wasn't until 2022 that I had an opportunity to focus back on coding and knew that I would need to revisit programming, adding it to my day-to-day routine; I decided to create a repository that would outline the skills I would refresh, covering existing topics as well as some new skills such as React.</p>
            <hr />
            <h4>About:</h4>
            <p>As part of my refresh, I wanted to cover full-stack development techniques I've used in the past; there are many technologies to keep track of and can fall out of memory; this can be a real problem as part of my portfolio could deteriorate without maintenance.</p>
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
            <p>I was curious about expanding my front-end knowledge, so this project provided the opportunity to look into React and how it differs from the AngularJS training that QA Ltd provided me; this was partly due to an exploration of Angular9 and wishing to balance the benefits and drawbacks of each framework. A big part of this is that Angular had evolved in my time whilst working with a client on primarily back-end oriented technologies, so I had an opportunity to review how these technologies have changed since.</p>
            <h4>Repository link:</h4>
            <hr />
            <ul>
                <li><a href="https://github.com/MorickClive/Project-Vale" target="_blank" rel="noopener">[ Project Vale Repository ]</a></li>
                <li><a href="https://github.com/MorickClive/Vale-React-Practice#vale-react-practice" target="_blank" rel="noopener">[ Project Vale Full-Stack Repo ]</a></li >
            </ul >
            <hr />
            <details>
                <summary>Additional</summary>
                <p>Example repo feature-branch adherence:</p>
                <a href="https://github.com/MorickClive/Vale-Java-Practice/network" target="_blank" rel="noopener">[ Example Feature Branch Model ]</a>
                <p>Issue Tracking:</p>
                <ul>
                    <li><Link to="https://github.com/MorickClive/Vale-Java-Practice/issues?q=is%3Aissue+is%3Aclosed" rel="noopener"target="_blank">[ Vale-Java ]</Link></li>
                    <li><Link to="https://github.com/MorickClive/Vale-JDBC-Practice/issues?q=is%3Aissue+is%3Aclosed" rel="noopener"target="_blank">[ Vale-JDBC ]</Link></li >
                    <li><Link to="https://github.com/MorickClive/Vale-SpringREST-Practice/issues?q=is%3Aissue+is%3Aclosed" target="_blank">[ Vale-SpringAPI ]</Link></li >
                </ul >
                <p>The name "Vale" came from raids instances in Guild Wars 2; it was an arbitrary naming convention that could act as nomenclature for potential projects, becoming a set of significant repositories on my GitHub.<br /><br />The raid instances are titled as follows:</p>
                <ul><li>Spirit [Vale]</li>
                    <li>Salvation [Pass]</li>
                    <li>[Stronghold] of the Faithful</li>
                    <li>[Bastion] of the Penitent</li>
                    <li>[Hall] of Chains</li>
                    <li>[Mythwright] Gambit</li>
                    <li>The Key of [Ahdashim]</li>
                </ul>
            </details>
            <hr />
            <Link className="project__return-link" to={`/projects`}> Return </Link>
        </div>
    </main>;
}