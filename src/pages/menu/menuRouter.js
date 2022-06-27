import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./menuLinks";
import Error404 from "../error/errorNotFound";
import ExpPage from "../exppage";
import HomePage from "../homepage";
import CVTemplate from "../../components/CVTemplate";
import AboutMePage from "../aboutpage";

const MenuRouter = () => {
return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route index element={cvPath(<HomePage />)} />
                    <Route path="Profile" element={cvPath(<HomePage />)} />
                    <Route path="Experience" element={cvPath(<ExpPage />)} />
                    <Route path="AboutMe" element={cvPath(<AboutMePage />)} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
}

const cvPath = (component) => {
    return <CVTemplate BodyRender={component} />;
}

export default MenuRouter;