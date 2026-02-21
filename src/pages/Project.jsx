import { useParams } from "react-router-dom"
import projects from "../data/projects.json"
import Layout from "../components/Layout"

function Project() {
    const { id } = useParams()

    const project = projects.find(project => p.id === id)

    if(!project){
        return <h2>Project not found</h2>
    }

    return(
        <Layout>
            <section className="">
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title}/>
                <p>{project.description}</p>

                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn">
                    View Project
                </a>
            </section>
        </Layout>
    )
}

export default Project