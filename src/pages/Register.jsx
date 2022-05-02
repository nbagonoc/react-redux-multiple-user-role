import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess || user) navigate('/')
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDeault()
    if (password !== password2) toast.error('Passwords do not match')
    else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Already have an account? Click <Link to='/login' className=''>here</Link>
        </h6>
        <form onSubmit={onSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={name}
                placeholder='name'
                onChange={onChange}
              />
            </div>
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
          </div>
          <div className='form-row'>
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
            <div className='form-group col-md-6'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                id='password2'
                name='password2'
                value={password2}
                placeholder='password2'
                onChange={onChange}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary mr-1'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register