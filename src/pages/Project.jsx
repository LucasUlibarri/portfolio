import { Link, useParams } from "react-router-dom"
import projects from "../data/projects.json"
import Layout from "../components/Layout"
import { useLanguage } from "../i18n/useLanguage"

function Project() {
    const { id } = useParams()
    const { t, pick } = useLanguage()

    const index = projects.findIndex(project => project.id === id)
    const project = projects[index]

    if (!project) {
        return (
            <Layout>
                <section className="pf-case__hero">
                    <h1 className="pf-case__title">{t('project.notFound')}</h1>
                    <Link to="/work" className="pf-btn pf-case__cta">{t('project.backToWork')}</Link>
                </section>
            </Layout>
        )
    }

    const prevProject = projects[(index - 1 + projects.length) % projects.length]
    const nextProject = projects[(index + 1) % projects.length]

    return (
        <Layout>
            <div className="pf-case__grid">
                <div className="pf-case__col-text">
                    <div className="pf-case__title-block">
                        <Link to="/work" className="pf-case__back">{t('project.backToWorkShort')}</Link>
                        <h1 className="pf-case__title">{pick(project.title)}</h1>
                    </div>

                    <div className="pf-case__intro">
                        <p className="pf-case__summary">{pick(project.summary)}</p>
                        <div className="pf-case__tags">
                            {project.tags.map(tag => (
                                <span key={tag.en} className="pf-case__tag">{pick(tag)}</span>
                            ))}
                        </div>
                        {project.links && (
                            <div className="pf-case__links">
                                {project.links.map(link => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pf-btn pf-case__cta"
                                    >
                                        {link.label} ↗
                                    </a>
                                ))}
                            </div>
                        )}
                        {!project.links && project.externalLink && (
                            <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pf-btn pf-case__cta"
                            >
                                {t('project.visitLiveSite')}
                            </a>
                        )}
                    </div>

                    <section className="pf-case__section">
                        {(project.body ?? [project.description]).map((paragraph, i) => (
                            <p key={i} className="pf-case__section-text">{pick(paragraph)}</p>
                        ))}
                    </section>
                </div>

                <div className="pf-case__col-image">
                    {project.image
                        ? <img src={project.image} alt={pick(project.title)} />
                        : <div className="pf-case__image-placeholder"><span>{t('project.addImagePlaceholder')}</span></div>}
                    {project.imageNote && (
                        <p className="pf-case__image-note">{pick(project.imageNote)}</p>
                    )}
                </div>
            </div>

            <nav className="pf-case__footer-nav">
                <Link to={`/project/${prevProject.id}`} className="pf-btn pf-btn--outline pf-case__prev">
                    {t('project.previous')}{pick(prevProject.title)}
                </Link>
                <Link to={`/project/${nextProject.id}`} className="pf-btn pf-case__next">
                    {t('project.next')}{pick(nextProject.title)} →
                </Link>
            </nav>
        </Layout>
    )
}

export default Project
