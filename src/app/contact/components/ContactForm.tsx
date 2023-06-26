'use client'

export default async function ContactForm() {

    async function onSubmit(e : any) {
        e.preventDefault();
        let formData = new FormData(e.target);
        try {
            const response = await fetch('https://docs.google.com/forms/d/1jGsW-O_TuuRQXRMRarApvHGZmSaSR4a39bGFF_e0kFc/formResponse', {
                method: 'POST',
                body: formData
            });
        } catch (error) {
            console.log(error);
            alert("Email sent!");
        } finally {
            e.target.reset();
        }
    }

    return <form action="https://docs.google.com/forms/d/1jGsW-O_TuuRQXRMRarApvHGZmSaSR4a39bGFF_e0kFc/formResponse" method="POST" target="_blank" onSubmit={onSubmit}>
        <h1>Contact Me</h1>
        <hr className="title" />
        <input id="name" type="text" placeholder="Name" required={true} name="entry.1349333892" autoComplete="name"/>
        <input id="email" type="text" placeholder="Email" required={true} name="emailAddress" autoComplete="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        <textarea id="msg" className="textarea" placeholder="Message" required={true} style={{ "height": "10em" }} name="entry.1455586602" />

        <div className="controlBox">
            <div className="controls">
                <button className="btn link" type="submit" >Submit</button>
                <button className="btn link" type="reset" >Reset</button>
            </div>
            <p>
                - Never submit passwords in any field! -<br />
                This content powered by Google.
            </p>
        </div>
    </form>
}