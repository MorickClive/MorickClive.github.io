
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './pages/_components/home/Header';
import SiteFooter from './pages/_components/home/SiteFooter';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/blog': 'Blog',
      '/projects': 'Projects',
      '/contact': 'Contact',
      '/characters/sylben': "Sylben Tanner",
      '/characters/imrala': "Imrala Dirthor",
      '/characters/caspian': "Caspian Lovett",
      '/characters/zone': "Zone of the Lost",
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