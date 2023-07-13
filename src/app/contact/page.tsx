import ContactForm from "./components/ContactForm";

export const metadata = { title: "Contact" };

export default function contact() {
    return <div className="container" >
            <div className="card">
                <ContactForm />
            </div>
        </div>
}