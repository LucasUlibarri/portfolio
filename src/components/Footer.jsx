function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <ul className="footer-links">
          <li>
            <a href="https://dribbble.com/LucasUlibarri" target="_blank" rel="noopener noreferrer">
              Dribbble
            </a>
          </li>

          <li>
            <a href="https://www.behance.net/lulibarri" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/lucas-ulibarri/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>

          <li>
            <a href="https://codepen.io/LucasUlibarri" target="_blank" rel="noopener noreferrer">
              CodePen
            </a>
          </li>
        </ul>

        <p className="footer-copy">
          Lucas Ulibarri | Product Designer © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  )
}

export default Footer