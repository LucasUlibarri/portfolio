import { Link } from 'react-router-dom'

function SelectedWork({ projects }) {
  const preview = projects.filter(project => project.featured)

  return (
    <section className="pf-work" id="work">
      <div className="pf-work__header">
        <h2 className="pf-work__heading">Selected Work</h2>
      </div>
      <ul className="pf-work__list">
        {preview.map((project, i) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`} className="pf-work__item">
              <div className="pf-work__item-top">
                <span className="pf-work__num">0{i + 1}</span>
                <span className="pf-work__title">{project.title}</span>
                {project.year && <span className="pf-work__year">{project.year}</span>}
              </div>
              <div className="pf-work__tags">
                {project.tags.map(tag => (
                  <span key={tag} className="pf-work__tag">{tag}</span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pf-work__more">
        <Link to="/work" className="pf-btn">Ver más ↗</Link>
      </div>
    </section>
  )
}

export default SelectedWork
