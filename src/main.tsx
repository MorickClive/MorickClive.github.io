import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { Project } from './data/types/types';
import projectsData from './data/projects.json';

import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Character from './pages/character';
import Contact from './pages/contact';
import WorkInProgress from './pages/redirects/work-in-progress'

const projects = import.meta.glob("./pages/projects/*.tsx", { eager: true });
const characterPaths = ["Sylben Tanner", "Imrala Drithor", "Caspian Lovett", "Zone of the Lost"]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects">
            {Object.entries(projects).map(([path, module]: any) => {
              const Component = module.default;
              if (!Component) return null;

              // Derive route path (strip ./pages and extension)
              const routePath = path
                .replace("./pages", "")
                .replace(/\.tsx$/, "")
                .replace(/index$/i, "")
                .toLowerCase() || "/";

              return <Route key={routePath} path={routePath} element={<Component />} />;
            })}
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="wip" element={<WorkInProgress />} />
          <Route path="characters" >
            { characterPaths.map((name) => (
              <Route key={name} path={name.toLowerCase().split(' ')[0]} element={<Character name={name} />} 
              />
            ))}
          </Route>
          <Route path="*" element={<WorkInProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);