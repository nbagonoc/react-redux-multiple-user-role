import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>RRMU</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link' to='/login'>
            <FaSignInAlt/> Login
          </Link>
          <Link className='nav-item nav-link' to='/register'>
            <FaSignOutAlt/> Register
          </Link>
          <Link className='nav-item nav-link' to='/dashboard'>
            <FaUser/> Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;
