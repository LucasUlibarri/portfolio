import { Link, useParams } from "react-router-dom"
import projects from "../data/projects.json"
import Layout from "../components/Layout"

function Project() {
    const { id } = useParams()

    const project = projects.find(project => project.id === id)

    if (!project) {
        return (
            <Layout>
                <section className="pf-case__hero">
                    <h1 className="pf-case__title">This project doesn't exist.</h1>
                    <Link to="/work" className="pf-btn pf-case__cta">Back to work ↗</Link>
                </section>
            </Layout>
        )
    }

    return (
        <Layout>
            <section className="pf-case__hero">
                <h1 className="pf-case__title">{project.title}</h1>
            </section>

            <div className="pf-case__grid">
                <div className="pf-case__col-text">
                    <div className="pf-case__intro">
                        <p className="pf-case__summary">{project.summary}</p>
                        <div className="pf-case__tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="pf-case__tag">{tag}</span>
                            ))}
                        </div>
                        {project.externalLink && (
                            <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pf-btn pf-case__cta"
                            >
                                Visit live site ↗
                            </a>
                        )}
                    </div>

                    <section className="pf-case__section">
                        <p className="pf-case__section-text">{project.description}</p>
                    </section>

                    <section className="pf-case__section">
                        <h2 className="pf-case__section-heading">What made this non-trivial</h2>
                        <p className="pf-case__section-text">
                            <em>Placeholder — this is where the core problem and constraints go: what the client actually needed, and why the obvious solution didn't hold up.</em>
                        </p>
                    </section>

                    <section className="pf-case__section">
                        <h2 className="pf-case__section-heading">How it got shaped</h2>
                        <p className="pf-case__section-text">
                            <em>Placeholder — key decisions, trade-offs and the reasoning behind the structure of the solution.</em>
                        </p>
                    </section>

                    <section className="pf-case__section">
                        <h2 className="pf-case__section-heading">What shipped</h2>
                        <p className="pf-case__section-text">
                            <em>Placeholder — result, impact, and anything measurable worth mentioning.</em>
                        </p>
                    </section>
                </div>

                <div className="pf-case__col-image">
                    {project.image
                        ? <img src={project.image} alt={project.title} />
                        : <div className="pf-case__image-placeholder"><span>Add image</span></div>}
                </div>
            </div>

            <nav className="pf-case__footer-nav">
                <Link to="/work" className="pf-btn pf-btn--outline">
                    ← Back to work
                </Link>
            </nav>
        </Layout>
    )
}

export default Project
