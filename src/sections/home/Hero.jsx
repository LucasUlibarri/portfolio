import { useLanguage } from '../../i18n/useLanguage'
import renderMultiline from '../../i18n/renderMultiline'

function Hero() {
  const { t } = useLanguage()
  return (
    <section className="pf-hero">
      <div className="pf-hero__panel">
        <h1 className="pf-hero__heading">
          {renderMultiline(t('hero.heading'))}
        </h1>
        <p className="pf-hero__sub">
          {t('hero.sub')}
        </p>
        <span className="pf-hero__available">
          <span className="pf-hero__dot" />
          {t('hero.available')}
        </span>
      </div>
    </section>
  )
}

export default Hero
