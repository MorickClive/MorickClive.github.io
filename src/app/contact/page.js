import ContactForm from "./components/ContactForm";
import SocialMediaBar from "./components/SocialMediaBar";


export const metadata = { title: "Contact" };

export default function contact() {
    return <>
        <div className="container" >
            <div className="formCard">
                <ContactForm />
            </div>
        </div>
        
        <div className="container" >
            <SocialMediaBar />
            <div className="div" />
        </div>
    </>
}