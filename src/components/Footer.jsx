import { useLanguage } from '../i18n/useLanguage'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="pf-footer">
      <span>{t('footer.copyright')}</span>
    </footer>
  )
}

export default Footer
