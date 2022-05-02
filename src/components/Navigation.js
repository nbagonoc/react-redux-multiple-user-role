import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar color='dark' dark className='mb-2'>
      <Link className='navbar-brand' to='/'>RRMU</Link>
      <Nav>
        <NavItem>
          <Link className='btn btn-primary' to='/login'>Login</Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
};

export default Navigation;
