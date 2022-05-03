import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/dashboard')
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  // restrict page
  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Don't have an account? Click <Link to='/register' className=''>here</Link>
        </h6>
        <form onSubmit={onSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                placeholder='email'
                onChange={onChange}
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='password'
                onChange={onChange}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary mr-1'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login