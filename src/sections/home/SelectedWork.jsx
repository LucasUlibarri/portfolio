function SelectedWork({ projects }) {
  return (
    <section className="pf-work" id="work">
      <div className="pf-work__header">
        <span className="pf-label">Selected Work</span>
      </div>
      <ul className="pf-work__list">
        {projects.map((project, i) => (
          <li key={project.id} className="pf-work__item">
            <span className="pf-work__num">0{i + 1}</span>
            <span className="pf-work__title">{project.title}</span>
            <div className="pf-work__tags">
              {project.tags.map(tag => (
                <span key={tag} className="pf-work__tag">{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SelectedWork
