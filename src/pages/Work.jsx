import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import projects from "../data/projects.json"
import { useLanguage } from "../i18n/useLanguage"

function Work() {
  const { t, pick } = useLanguage()
  return (
    <Layout>
      <section className="pf-work">
        <div className="pf-work__header">
          <h1 className="pf-work__heading">{t('work.heading')}</h1>
        </div>
        <ul className="pf-work__list">
          {projects.map((project, i) => (
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
                {project.image && <img className="pf-work__preview" src={project.image} alt="" />}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Work
