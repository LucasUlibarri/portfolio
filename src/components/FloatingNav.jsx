import { NavLink } from 'react-router-dom'

function FloatingNav() {
  const routeClass = ({ isActive }) => (isActive ? 'is-active' : '')

  return (
    <>
      <header className="pf-topbar">
        <NavLink to="/" className="pf-topbar__logo">LU</NavLink>
      </header>
      <nav className="pf-nav">
        <ul className="pf-nav__links">
          <li><NavLink to="/" end className={routeClass}>Home</NavLink></li>
          <li><NavLink to="/work" className={routeClass}>Work</NavLink></li>
          <li><NavLink to="/about" className={routeClass}>About</NavLink></li>
          {/* Contact section was pulled off Home (now just an email in the footer + the CTA).
              Re-enable once there's a real /contact destination — an <a href="/#contact">
              here broke out of the preview iframe, so don't add a loose link back without one. */}
        </ul>
      </nav>
    </>
  )
}

export default FloatingNav
