import Link from "next/link";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export default async function SocialMediaBar() {
    return <>
        <Link target="_blank" rel="noopener noreferrer" href="https://github.com/MorickClive" ><GrGithub /></Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alan-davies-b9957b100/" ><GrLinkedin /></Link>
        <h4>|</h4>
    </>
}