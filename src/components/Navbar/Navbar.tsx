import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#">
        JD.
      </a>

      <nav className="navbar-links">
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar