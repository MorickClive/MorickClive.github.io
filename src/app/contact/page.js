import SocialMediaBar from "./components/SocialMediaBar";
import onSubmit from './components/onSubmit'

export const metadata = { title: "Contact" };

export default function contact() {
    return <>
        <div className="container" >
            <ContactInfo />
        </div>
    </>
}

const ContactInfo = () => {
    return <>

        <div className="div footer" />
        <p className="italic">Interested in knowing more or contacting me for a role?</p>
        <div className="div footer" />

        <details><summary>[Disabled:] Custom Form (API testing required)</summary>
            <form className="" onSubmit={<onSubmit />} action="https://docs.google.com/forms/d/1jGsW-O_TuuRQXRMRarApvHGZmSaSR4a39bGFF_e0kFc/formResponse" disabled >
                <h1>Contact Me</h1>
                <div>
                    <label htmlFor="entry.1349333892" ><h3>Name:</h3></label>
                    <input type="text" placeholder="Your name here..." required={true} name="entry.1349333892" disabled />
                </div>
                <div>
                    <label htmlFor="emailAddress"><h3>Email:</h3></label>
                    <input type="text" placeholder="Sample@Sample.com..." required={true} name="emailAddress" disabled />
                </div>
                <label htmlFor="entry.1455586602"><h3>Message:</h3></label>
                <textarea className="textarea" type="text" required={true} style={{ "height": "10em" }} name="entry.1455586602" disabled />

                <div className="container">
                    <div className="controls">
                        <button className="btn link" type="submit" disabled>Submit</button>
                        <button className="btn link" type="reset" disabled>Clear</button>
                    </div>
                    <p>
                        - Never submit passwords through Google Forms -<br />
                        This content is neither created nor endorsed by Google.
                    </p>
                </div>
            </form>
        </details>
        <details><summary>[Active:] Expand (Caution; Strong contrast!)</summary>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0vwgh2TjLus7W3BtBrAM0tsr5zAPl_c_WNvJVVdoaX3Iz8A/viewform?embedded=true"
                width="640" frameBorder="0" marginHeight="0" marginWidth="0"
                allowtransparency="true" style={{">*": {"color": "black"}}}>Loading…</iframe>
        </details>
        
        <div className="div footer" />
        <div className="footer">
            <p className="italic" style={{ "float": "left" }}>This project is hosted on GitHub.</p>
            <SocialMediaBar />
        </div>
    </>
}