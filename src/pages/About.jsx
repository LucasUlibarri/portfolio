import Layout from "../components/Layout"
import experience from "../data/experience.json"
import photography from "../data/photography.json"
import experiments from "../data/experiments.json"
import { useLanguage } from "../i18n/useLanguage"
import renderMultiline from "../i18n/renderMultiline"

// AI Projects section is hidden for now (see below) — swap in the real repo
// URLs/titles here and un-comment both this and the section when ready.
// const aiProjects = [
//   { title: "AI Project #1 — add repo", description: "Built mostly for the fun of it, no big master plan. Repo link goes here." },
//   { title: "AI Project #2 — add repo", description: "Another one built to mess around and see what sticks. Repo link goes here." },
// ]

const cvFiles = {
  en: '/assets/cv/Lucas-Ulibarri-CV-EN.pdf',
  es: '/assets/cv/Lucas-Ulibarri-CV-ES.pdf',
}

function About() {
  const { t, pick, language } = useLanguage()
  const sortedExperience = [...experience].sort(
    (a, b) => b.startYear - a.startYear
  )

  return (
    <Layout>
      <section className="pf-about" id="about">
        <div>
          <h1 className="pf-about__heading">
            {renderMultiline(t('about.heading'))}
          </h1>
          <p className="pf-about__body">
            {renderMultiline(t('about.body'))}
          </p>
          <a
            href={cvFiles[language]}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-btn pf-about__cta"
          >
            {t('about.downloadCv')}
          </a>
        </div>
        <aside className="pf-about__sidebar">
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">{t('about.sidebar.basedInLabel')}</p>
            <p className="pf-about__datum-value">{t('about.sidebar.basedInValue')}</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">{t('about.sidebar.statusLabel')}</p>
            <p className="pf-about__datum-value">{t('about.sidebar.statusValue')}</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">{t('about.sidebar.focusLabel')}</p>
            <p className="pf-about__datum-value">{t('about.sidebar.focusValue')}</p>
          </div>
          <div className="pf-about__datum">
            <p className="pf-about__datum-label">{t('about.sidebar.languagesLabel')}</p>
            <p className="pf-about__datum-value">{t('about.sidebar.languagesValue')}</p>
          </div>
        </aside>
      </section>

      <section className="pf-experience">
        <h2 className="pf-experience__heading">{t('about.experienceHeading')}</h2>
        <div className="pf-experience__cols">
          {sortedExperience.map(item => (
            <div key={item.id} className="pf-experience__item">
              <p className="pf-experience__period">{item.period}</p>
              <p className="pf-experience__company">{item.company}</p>
              <p className="pf-experience__role">{pick(item.role)}</p>
              <p className="pf-experience__desc">{pick(item.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-playground" id="passion-projects">
        <div className="pf-playground__header">
          <h2 className="pf-playground__heading">{t('about.playgroundHeading')}</h2>
          <p className="pf-playground__intro">
            {t('about.playgroundIntro')}
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

        <p className="pf-playground__group-label">{t('about.photographyLabel')}</p>
        <div className="pf-playground__photos">
          {photography.map(photo => (
            <div key={photo.id} className="pf-playground__photo">
              <img src={photo.src} alt={pick(photo.alt)} loading="lazy" />
              <p className="pf-playground__experiment-title">{pick(photo.alt)}</p>
            </div>
          ))}
        </div>

        <p className="pf-playground__group-label">{t('about.experimentsLabel')}</p>
        <div className="pf-playground__experiments">
          {experiments.map(({ id, url, image, title }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-playground__experiment"
            >
              <img src={image} alt={pick(title)} loading="lazy" />
              <p className="pf-playground__experiment-title">{pick(title)}</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default About
