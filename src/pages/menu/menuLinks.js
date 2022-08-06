import { Link, Outlet } from "react-router-dom";

const Menu = () => {
return <>
    <nav>
    <ul className="menuOptions">
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/experience"><li>Experience</li></Link>
        <Link to="/about_me"><li>About Me</li></Link>
    </ul>
    </nav>
    <Outlet />
</>
}

export default Menu;