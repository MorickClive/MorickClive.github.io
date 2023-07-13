import Link from "next/link";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export default async function SiteFooter() {
    return <footer>
        <Link title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/MorickClive" ><GrGithub /></Link>
        <Link title="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alan-davies-b9957b100/" ><GrLinkedin /></Link>
        <h4>|</h4>

        <em>Alan Davies. © {new Date().getFullYear()}</em>
    </footer>
}