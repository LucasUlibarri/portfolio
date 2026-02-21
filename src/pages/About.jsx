import Layout from "../components/Layout";
import experience from "../data/experience.json";

function About() {

    const sortedExperience = [...experience].sort(
        (a, b) => b.startYear - a.startYear
    )

    return (
        <Layout>
            {/* HERO */}
            <section className="about-hero container">
                <div className="about-hero-grid">

                <div className="about-image">
                    <img
                    src="/images/profile/me.jpg"
                    alt="Lucas Ulibarri"
                    />
                </div>

                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                    I am a web designer specialised in UX/UI, focused on creating
                    digital experiences for users in a wide range of industries.
                    I have proven knowledge and competence in user research to
                    understand their needs and make them achieve their goals
                    through UI design and the creation of front-end visualisations
                    and digital products.
                    </p>

                    <p>
                    I am looking for further professional development opportunities
                    as a UX/UI designer to provide key prototypes, schematics,
                    designs and mock-ups of the customer experience to create the
                    perfect digital experience for users.
                    </p>
                </div>

                </div>
            </section>

            {/* MARQUEE */}
            <section className="marquee">
                <div className="marquee-track">
                <span>Product Designer</span>
                <span>•</span>
                <span>Front End Developer</span>
                <span>•</span>
                <span>UI Designer</span>
                <span>•</span>
                <span>UX Designer</span>
                <span>•</span>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className="experience container">
                <h2>Experience</h2>

                <div className="experience-list">
                {sortedExperience.map(item => (
                    <ExperienceItem key={item.id} {...item} />
                ))}
                </div>

                <a
                href="/assets/Lucas-Ulibarri-CV-English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                Download CV
                </a>

            </section>

        </Layout>
    )
}

function ExperienceItem({ period, company, role, description }) {
  return (
    <article className="experience-item">
      <div className="experience-date">
        <p>{period}</p>
      </div>

      <div className="experience-content">
        <h3>{company}</h3>
        <p className="experience-role">{role}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default About