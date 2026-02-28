import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="card">
      <img src={project.image} alt={project.title} loading="lazy"/>

      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link to={`/projects/${project.id}`} className="btn">View Case Study</Link>
      </div>

    </article>
  )
}

export default ProjectCard