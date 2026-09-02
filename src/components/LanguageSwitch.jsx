import { useLanguage } from "../i18n/useLanguage"

const options = [
  { code: "en", full: "English", short: "EN" },
  { code: "es", full: "Español", short: "ES" },
]

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="pf-lang-switch" role="group" aria-label="Language">
      {options.map(({ code, full, short }) => (
        <button
          key={code}
          type="button"
          className={code === language ? "is-active" : ""}
          aria-pressed={code === language}
          onClick={() => setLanguage(code)}
        >
          <span className="pf-lang-switch__full">{full}</span>
          <span className="pf-lang-switch__short">{short}</span>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
