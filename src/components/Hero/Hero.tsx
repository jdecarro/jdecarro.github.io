import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <p className="hero-label">Software Developer</p>

      <h1>Jordan Decarroux</h1>

      <p className="hero-description">
        Développeur formé à 42 Lausanne, spécialisé en développement
        logiciel et web.
      </p>

      <div className="hero-actions">
        <a className="hero-primary" href="#projects">
          Voir mes projets
        </a>

        <a
          className="hero-secondary"
          href="https://github.com/jdecarro"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero