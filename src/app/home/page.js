import Link from "next/link";

export const metadata = { title: 'Home' };

export default function Portal() {
    return <>
        <div className="container">
            <Splash />
            <Introduction />
        </div>
    </>;
}

const Splash = () => {
    return <>
        <div id="main_page">
            <br />
            <h1>Welcome to my Site!</h1>
            <p>Checkout my <Link href="/about">[About Page]</Link> for more details.</p>
        </div>
    </>
}

const Introduction = () => {
    return <>
        <div className="div footer" />
        <p className="italic">Notice: This site is "Work in Progress" and may not reflect the final intended design.</p>
    </>
}