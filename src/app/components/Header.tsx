import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="brand">
        <div id="logo"></div>
        <div>Alan Davies' Portfolio Site</div>
      </div>
      <div id="nav">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className="contact">Contact</Link>
      </div>
    </header>
  )
}
