import Qualifications from "../components/QualificationList";

const ExpPage = () => {
    document.title = "CV - Alan Davies [Experience]";

    return <>
        <br />
        <Qualifications />
        <br />
        <h3>Previous Roles:</h3>
        <br />

        <h3>Consultant: Software Engineer, 2.3 years, QA ltd.</h3>
        <p>I worked with a small team dedicated to a ‘core framework’ that underlined major IT systems in British Airways/IAG GBS.</p>
        <p>My role in the team revolved around the responsibilities of the managed software framework. I’ve worked on the debugging and upgrading of our core framework, I have supported services reliant on this framework from other teams, correcting of testing suites in Junit, SoapUI and Jmeter. To ensure compliance to company policy during large scale upgrades, some tasks often required the handling of hundreds of unique projects and services.</p>
        <p>My practical knowledge of Java aided my crafting of scripts written in ‘Groovy’ as a means to verify and automate work processes to improve accuracy and productivity speeds. These scripts would then become tools for the team to aid our group effort when tackling challenges, increasing overall convenience and productivity.</p>
        <p>I’ve handled SQL scripts and general queries to Oracle databases, controlling values of supported services; for example some of these values handled masking of sensitive data in server logs.</p>
        <p>Debugging often extended from local environments (IDE) to testing environments hosted on UNIX environments. I frequently used regex patterns to “scope out” logs and stack traces, isolating issues with key request headers to verify REST and SOAP requests and responses. Access to logs would typically involve using the ‘PuTTY’ application.</p>
        <br />

        <h3>Learning Specialist, 1 year, QA ltd.</h3>
        <p>Joining the training team within QA Ltd has been an opportunity to express and learn the value of teaching skills to others; producing the next wave of Software/SDET developers with a wide variety of skills and industry awareness. </p>
        <p>Starting during an uncertain time has presented some interesting logistical challenges to overcome. I have found remote delivery of technologies has lent itself to my existing communication skills rather well. Remote delivery has given me a distinct appreciation of the perception and perspective of individuals and junior developers in our courses. Everyone has a unique way of learning; I was aware of this in theory, however, the opportunity to see this in practice and support this has played a pivotal role in being able to relate material/content to students!</p>
        <p>I have nothing but respect for fellow trainers and managers; dealing with many unknowns whilst supporting each other through challenging moments. It is with their support I truly believe our collective & remote approach for learning delivery has been a success!</p>
        <br />
    </>

}

export default ExpPage;