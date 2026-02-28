import Layout from "../components/Layout";
import experience from "../data/experience.json";

function About() {

    const sortedExperience = [...experience].sort(
        (a, b) => b.startYear - a.startYear
    )

    return (
        <Layout>
            {/* HERO */}
            <section className="about">
                    <img src="/images/profile/me.jpg" alt="Lucas Ulibarri" />

                <div className="">
                    <h1>About Me</h1>
                    <p>
                    I am a product designer specialised in UX/UI, focused on creating
                    digital experiences for users in a wide range of industries.
                    With over {getYearsOfExperience()} years of experience, I have proven knowledge and competence in user research to
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
            <section className="experience">
                <h2>Experience</h2>

                <div className="">
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
        <h3>{company}</h3>
        <div className="experience-details">
            <p>{period}</p>
            <p className="role">{role}</p>
        </div>
        <p>{description}</p>
    </article>
  )
}

const getYearsOfExperience = () => {
    const startDate = new Date(2017, 8); // Septiembre es 8 (mes empieza en 0)
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    
    const hasNotReachedAnniversary =
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
    today.getDate() < startDate.getDate());
    
    if (hasNotReachedAnniversary) {
        years--;
    }
    
    return years;
};

export default About