import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <span>01</span>
        <h2>À propos</h2>
      </div>

      <div className="about-content">
        <p className="about-intro">
          Je développe des logiciels en cherchant à comprendre
          ce qui se passe derrière chaque abstraction.
        </p>

        <div className="about-text">
          <p>
            Formé à 42 Lausanne, j'ai travaillé sur des projets allant de la
            programmation système en C au développement d'applications web
            modernes avec React et TypeScript.
          </p>

          <p>
            Cette formation m'a permis d'aborder l'algorithmique, la gestion
            de processus, la concurrence, la programmation orientée objet,
            les réseaux et le développement web.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About