'use client'
import onSubmit from "./onSubmit";

export default async function ContactForm() {
    return <form onSubmit={onSubmit}>
        <h1>Contact Me</h1>
        <div className="div" />
        <input id="name" type="text" placeholder="Name" required={true} name="entry.1349333892" />
        <input id="email" type="text" placeholder="Email" required={true} name="emailAddress" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <textarea id="msg" className="textarea" required={true} style={{ "height": "10em" }} name="entry.1455586602" placeholder="Message" />

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