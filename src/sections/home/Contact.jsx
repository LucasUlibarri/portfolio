import { useLanguage } from '../../i18n/useLanguage'
import renderMultiline from '../../i18n/renderMultiline'

function Contact() {
  const { t } = useLanguage()
  return (
    <section className="pf-contact" id="contact">
      <h2 className="pf-contact__heading">
        {renderMultiline(t('contact.heading'))}
      </h2>
      <p className="pf-contact__sub">
        {t('contact.sub')}
      </p>
      <div className="pf-contact__grid">
        <a href="mailto:lucasulibarri@icloud.com" className="pf-contact__link">
          <span className="pf-contact__link-label">{t('contact.email')}</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/lucas-ulibarri/" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">{t('contact.linkedin')}</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        <a href="https://github.com/LucasUlibarri" target="_blank" rel="noreferrer" className="pf-contact__link">
          <span className="pf-contact__link-label">{t('contact.github')}</span>
          <span className="pf-contact__link-arrow">↗</span>
        </a>
        {/* Instagram — add once you send the handle/URL, so this doesn't ship as a dead link. */}
      </div>
    </section>
  )
}

export default Contact
