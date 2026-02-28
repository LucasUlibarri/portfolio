import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        
        {/* Logo */}
        <NavLink to="/" className='logo'>Lucas</NavLink>

        {/* Navigation */}
        <nav className="nav">
          
          <NavLink to='/' className={({ isActive }) => isActive? 'nav-link active' : 'nav-link'}>Home</NavLink>
          
          <NavLink to='/about' className={({ isActive }) => isActive? 'nav-link active' : 'nav-link'}>About Me</NavLink>
          
          <NavLink to='/play' className={({ isActive }) => isActive? 'nav-link active' : 'nav-link'}>Play</NavLink>
        
        </nav>

      </div>
    </header>
  )
}

export default Header