import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span>04</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-content">
        <p className="contact-label">Une opportunité ?</p>

        <h3>
          Construisons quelque
          <br />
          chose ensemble.
        </h3>

        <p className="contact-description">
          Je suis ouvert aux opportunités en développement logiciel
          et IT dans la région genevoise.
        </p>

        <div className="contact-links">
          <a href="mailto:jordandecarroux@hotmail.com">
            Email ↗
          </a>

          <a
            href="https://github.com/jdecarro"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jordan-decarroux-dougoud-252797330/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Jordan Decarroux</p>

        <p>Designed & built with React + TypeScript</p>
      </footer>
    </section>
  )
}

export default Contact