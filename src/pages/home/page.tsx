import { Link } from "react-router-dom";

export default function Portal() {
    return <>
        <div className="container flex center">
            <div id="portal">
                <h1>Welcome to my Site!</h1>
            </div>
            <hr className="footer" />
            <p>Checkout my <Link to="/about">[About Page]</Link> for more information.</p>
        </div>
    </>;
}