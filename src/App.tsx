
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SiteFooter from './components/SiteFooter';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/blog': 'Blog',
      '/projects': 'Projects',
      '/contact': 'Contact',
      '/characters/sylben': "Sylben Tanner"
    };

    const pageTitle = titleMap[location.pathname] || 'Not Found';
    document.title = location.pathname.includes('characters')  ? `${pageTitle} | D&D ` : `${pageTitle} | Portfolio`;
  }, [location]);

  return (
    <div className="App">
      <Header />
      <div id="frontLayer">
          <Outlet />
        <SiteFooter />
      </div>
      <div id="backLayer"></div>
    </div>
  );
}