import { Routes, Route } from "react-router-dom";
import Menu from "./menuLinks";
import Error404 from "../error/errorNotFound";
import ExpPage from "../exppage";
import HomePage from "../homepage";
import CVTemplate from "../../components/CVTemplate";
import AboutMePage from "../aboutpage";

const MenuRouter = () => {
return <Routes>
            <Route path="/" element={<Menu />}>
                <Route index element={cvPath(<HomePage />)} />
                <Route path="profile" element={cvPath(<HomePage />)} />
                <Route path="experience" element={cvPath(<ExpPage />)} />
                <Route path="about_me" element={cvPath(<AboutMePage />)} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
}

const cvPath = (component) => {
    return <CVTemplate BodyRender={component} />;
}

export default MenuRouter;