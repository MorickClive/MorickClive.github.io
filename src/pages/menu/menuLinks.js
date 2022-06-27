import { Link, Outlet } from "react-router-dom";

const Menu = () => {
return <>
    <nav>
    <ul className="menuOptions">
        <Link to="/Profile"><li>Profile</li></Link>
        <Link to="/Experience"><li>Experience</li></Link>
        <Link to="/AboutMe"><li>About Me</li></Link>
    </ul>
    </nav>
    <Outlet />
</>
}

export default Menu;