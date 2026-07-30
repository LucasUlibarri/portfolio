function Contact() {
  return (
    <section className="pf-contact" id="contact">
      <h2 className="pf-contact__heading">
        Let's work<br />together.
      </h2>
      <div className="pf-contact__grid">
        <a href="mailto:lucasulibarri26@gmail.com" className="pf-contact__link">
          <span className="pf-contact__link-label">Email</span>
          <span className="pf-contact__link-text">lucasulibarri26@gmail.com</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://linkedin.com/in/lucasulibarri" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">LinkedIn</span>
          <span className="pf-contact__link-text">linkedin.com/in/lucasulibarri</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://github.com/lucasulibarri" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">GitHub</span>
          <span className="pf-contact__link-text">github.com/lucasulibarri</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
