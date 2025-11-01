import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="brand">
        <div id="logo"></div>
        <div>Alan Davies' Portfolio Site</div>
      </div>
      <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact" className="contact">Contact</Link>
      </div>
    </header>
  )
}
