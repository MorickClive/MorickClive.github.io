// src/main.tsx
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/projects';
import SylbenPage from './pages/characters/sylben';
import Contact from './pages/contact';
import WorkInProgress from './pages/redirects/work-in-progress'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wip" element={<WorkInProgress />} />
          <Route path="characters" >
            <Route path="sylben" element={<SylbenPage />} />
          </Route>
          <Route path="*" element={<WorkInProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);