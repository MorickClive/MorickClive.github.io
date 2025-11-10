import { GrLinkedin, GrGithub } from "react-icons/gr";

export default function SiteFooter() {
    return <footer>
        <a title="GitHub" href="https://github.com/MorickClive" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/alan-davies-b9957b100/" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
        <h4>|</h4>

        <em>Alan Davies. © 2022 - {new Date().getFullYear()}</em>
    </footer>
}