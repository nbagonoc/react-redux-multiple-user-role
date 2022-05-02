import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar color='dark' dark className='mb-2'>
      <Link className='navbar-brand' to='/'>RRMU</Link>
      <Nav>
        <NavItem>
          <Link className='' to='/login'>
            <FaSignInAlt/> Login
          </Link>
          <Link className='' to='/register'>
            <FaUser/> Register
          </Link>
          <Link className='btn btn-primary' to='/dashboard'>
            <FaUser/> Profile
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
};

export default Navigation;
