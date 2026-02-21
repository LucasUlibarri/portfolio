import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

function Home() {
    const featuredProject = projects.find(p => p.featured)

    return (
    <Layout>

        {/* Hero */}
        <section className="hero">
            <h1>Hi! Im Lucas,
                <br></br>
                A product designer.
            </h1>
            <p className="hero-text">
                Passionate about web development and constantly looking for new challenges and trying to learn new things.
            </p>
            
        </section>

        {/* Case sudy featured */}
        {featuredProject && (
            <section className="featured-project">
                <h2>Case Study</h2>

                <div className='featured-case'>
                    <img src={featuredProject.image} alt={featuredProject.title}></img>

                    <div>
                        <h3>{featuredProject.title}</h3>
                        <p>{featuredProject.description}</p>
                        <a href={`/project/${featuredProject.slug}`} className='btn btn-secondary'>
                            View Case Study
                        </a>
                    </div>
                </div>
            </section>
        )}


        {/* Project grid */}
        <section>
        <h2>Projects</h2>

        <div className="grid-3">
            {projects
            .filter(p => !p.featured)
            .map(project => (
            <ProjectCard
                key={project.id}
                project={project}
            />
            ))}
        </div>
        </section>
    </Layout>
    )
}

export default Home