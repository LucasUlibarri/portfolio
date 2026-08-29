function Contact() {
  return (
    <section className="pf-contact" id="contact">
      <h2 className="pf-contact__heading">
        Have something<br />worth building?
      </h2>
      <p className="pf-contact__sub">
        If you're working on something early-stage and could use a clear head — reach out.
      </p>
      <div className="pf-contact__grid">
        <a href="mailto:lucasulibarri@icloud.com" className="pf-contact__link">
          <span className="pf-contact__link-label">Email</span>
          <span className="pf-contact__link-text">lucasulibarri@icloud.com</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/lucas-ulibarri/" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">LinkedIn</span>
          <span className="pf-contact__link-text">lucasulibarri</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://github.com/LucasUlibarri" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">GitHub</span>
          <span className="pf-contact__link-text">lucasulibarri</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        {/* Instagram — add once you send the handle/URL, so this doesn't ship as a dead link. */}
      </div>
    </section>
  )
}

export default Contact
