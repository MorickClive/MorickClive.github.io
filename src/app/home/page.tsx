import Carousel from "@/lib/imageCarousel";
import Link from "next/link";

export const metadata = { title: 'Home' };

export default function Portal() {
    return <>
        <div className="container flex center">
            <div id="portal">
                <h1>Welcome to my Site!</h1>
            </div>
            <hr className="footer" />
            <p>Checkout my <Link href="/about">[About Page]</Link> for more information.</p>
        </div>
    </>;
}