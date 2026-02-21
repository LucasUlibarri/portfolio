import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        
        {/* Logo */}
        <NavLink to="/" className='logo'>Lucas</NavLink>

        {/* Navigation */}
        <nav className="nav">
          
          <NavLink to='/' className='nav-link'>Home</NavLink>
          
          <NavLink to='/about' className='nav-link'>About Me</NavLink>
          
          <NavLink to='/' className='nav-link'>Play</NavLink>
          
          <NavLink to='/' className='nav-link'>Contact</NavLink>

        </nav>

      </div>
    </header>
  )
}

export default Header