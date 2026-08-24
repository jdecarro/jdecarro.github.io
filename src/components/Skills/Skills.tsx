import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Responsive Design', 'i18n'],
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'PostgreSQL', 'Prisma', 'REST', 'WebSockets'],
  },
  {
    title: 'Systems',
    skills: ['Linux', 'Unix', 'Processes', 'Threads', 'Networking'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span>03</span>
        <h2>Compétences</h2>
      </div>

      <div className="skills-content">
        <div className="skills-intro">
          <h3>
            De la programmation système aux applications web modernes.
          </h3>

          <p>
            Mon parcours à 42 m'a permis de travailler à différents niveaux
            d'abstraction, du C et des mécanismes Unix jusqu'aux interfaces
            développées avec React et TypeScript.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills