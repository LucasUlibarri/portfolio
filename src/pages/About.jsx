import Layout from "../components/Layout"
import experience from "../data/experience.json"
import photography from "../data/photography.json"
import experiments from "../data/experiments.json"

// AI Projects section is hidden for now (see below) — swap in the real repo
// URLs/titles here and un-comment both this and the section when ready.
// const aiProjects = [
//   { title: "AI Project #1 — add repo", description: "Built mostly for the fun of it, no big master plan. Repo link goes here." },
//   { title: "AI Project #2 — add repo", description: "Another one built to mess around and see what sticks. Repo link goes here." },
// ]

function About() {
  const sortedExperience = [...experience].sort(
    (a, b) => b.startYear - a.startYear
  )

  return (
    <Layout>
      <section className="pf-about" id="about">
        <div>
          <h1 className="pf-about__heading">
            Bridging design<br />and code since 2017.
          </h1>
          <p className="pf-about__body">
            I work across design, product thinking and implementation. Over time I became less interested in how things look and more interested in how they work — and why they often don't.
            <br /><br />
            I'm drawn to early-stage work: the kind of projects where the problem isn't fully defined yet and the direction is still being shaped. That ambiguity is where I find the most interesting work to do.
            <br /><br />
            Based in Buenos Aires. Working with teams remotely and locally.
          </p>
          <a
            href="/assets/cv/Lucas-Ulibarri-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-btn pf-about__cta"
          >
            Download CV ↗
          </a>
        </div>
        <aside className="pf-about__sidebar">
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">Based in</p>
            <p className="pf-about__datum-value">Buenos Aires, Argentina</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">Status</p>
            <p className="pf-about__datum-value">Available for freelance</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">Focus</p>
            <p className="pf-about__datum-value">Product Design, Web Dev</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">Languages</p>
            <p className="pf-about__datum-value">Spanish (native) · English (fluent) · French (learning)</p>
          </div>
        </aside>
      </section>

      <section className="pf-experience">
        <h2 className="pf-experience__heading">Experience</h2>
        <div className="pf-experience__cols">
          {sortedExperience.map(item => (
            <div key={item.id} className="pf-experience__item">
              <p className="pf-experience__period">{item.period}</p>
              <p className="pf-experience__company">{item.company}</p>
              <p className="pf-experience__role">{item.role}</p>
              <p className="pf-experience__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-playground" id="passion-projects">
        <div className="pf-playground__header">
          <h2 className="pf-playground__heading">Passion Projects</h2>
          <p className="pf-playground__intro">
            Outside of client work — analog photography I'm learning to shoot and develop, small front-end experiments, and a couple of apps I've been building with AI.
          </p>
        </div>

        {/* AI Projects — hidden for now until there's real repos/content to show, kept for later.
        <p className="pf-playground__group-label">AI Projects</p>
        <div className="pf-playground__experiments">
          {aiProjects.map((p, i) => (
            <div key={i} className="pf-playground__experiment pf-playground__experiment--placeholder">
              <p className="pf-playground__experiment-title">{p.title}</p>
              <p className="pf-playground__experiment-desc">{p.description}</p>
            </div>
          ))}
        </div>
        */}

        <p className="pf-playground__group-label">Photography</p>
        <div className="pf-playground__photos">
          {photography.map(photo => (
            <div key={photo.id} className="pf-playground__photo">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <p className="pf-playground__experiment-title">{photo.alt}</p>
            </div>
          ))}
        </div>

        <p className="pf-playground__group-label">Experiments</p>
        <div className="pf-playground__experiments">
          {experiments.map(({ id, url, image, alt, title }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-playground__experiment"
            >
              <img src={image} alt={alt || title} loading="lazy" />
              <p className="pf-playground__experiment-title">{title}</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default About
