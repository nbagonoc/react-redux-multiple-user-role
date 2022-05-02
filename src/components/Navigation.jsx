import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice'

const Navigation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = (e) =>{
    e.preventDeault()
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>RRMU</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          {user ? (
            <>
              <Link className='nav-item nav-link' to='/dashboard'>
                <FaUser /> Dashboard
              </Link>
              <Link className='btn btn-primary' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </Link>
            </>
          ) : (
            <>
              <Link className='nav-item nav-link' to='/login'>
                <FaSignInAlt /> Login
              </Link>
              <Link className='nav-item nav-link' to='/register'>
                <FaSignOutAlt /> Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
};

export default Navigation;