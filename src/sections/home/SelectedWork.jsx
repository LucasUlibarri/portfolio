import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

function SelectedWork({ projects }) {
  const { t, pick } = useLanguage()
  const preview = projects.filter(project => project.featured)

  return (
    <section className="pf-work" id="work">
      <div className="pf-work__header">
        <h2 className="pf-work__heading">{t('selectedWork.heading')}</h2>
      </div>
      <ul className="pf-work__list">
        {preview.map((project, i) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`} className="pf-work__item">
              <div className="pf-work__item-top">
                <span className="pf-work__num">0{i + 1}</span>
                <span className="pf-work__title">{pick(project.title)}</span>
                {project.year && <span className="pf-work__year">{project.year}</span>}
              </div>
              <div className="pf-work__tags">
                {project.tags.map(tag => (
                  <span key={tag.en} className="pf-work__tag">{pick(tag)}</span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pf-work__more">
        <Link to="/work" className="pf-btn">{t('selectedWork.more')}</Link>
      </div>
    </section>
  )
}

export default SelectedWork
