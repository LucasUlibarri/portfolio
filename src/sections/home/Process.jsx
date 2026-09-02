import { useLanguage } from '../../i18n/useLanguage'
import renderMultiline from '../../i18n/renderMultiline'

function Process() {
  const { t } = useLanguage()
  const whatIDo = t('process.whatIDo')
  const howIWork = t('process.howIWork')

  return (
    <section className="pf-process" id="process">
      <div className="pf-process__col">
        <div className="pf-process__sticky">
          <p className="pf-thinking__text">
            {t('process.thinkingText')}
          </p>
          <p className="pf-thinking__sub">
            {renderMultiline(t('process.thinkingSub'))}
          </p>
        </div>
      </div>

      <div className="pf-approach">
        <div className="pf-approach__col">
          <h3 className="pf-approach__heading">{t('process.whatIDoHeading')}</h3>
          <ul className="pf-approach__list">
            {whatIDo.map(item => (
              <li key={item.title}>
                <p className="pf-approach__item-title">{item.title}</p>
                <p className="pf-approach__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="pf-approach__col">
          <h3 className="pf-approach__heading">{t('process.howIWorkHeading')}</h3>
          <ol className="pf-approach__list pf-approach__list--steps">
            {howIWork.map((step, i) => (
              <li key={step.title}>
                <span className="pf-approach__step-num">0{i + 1}</span>
                <p className="pf-approach__item-title">{step.title}</p>
                <p className="pf-approach__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Process
