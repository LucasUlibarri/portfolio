import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

function Home() {
    return (
    <Layout>
        <div className="home">
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
            <section className='projects'>
                {projects
                .slice()
                .sort((a,b) => (b.featured) - Number(a.featured))
                .map(project =>(
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </section> 
        </div>
    </Layout>
    )
}

export default Home