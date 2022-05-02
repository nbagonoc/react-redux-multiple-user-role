import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = formData
  const onChange = () => {

  }
  const onSubmit = (e) => {
    e.preventDeault()
  }

  return (
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
      <Link to='/' className='btn btn-secondary'>Cancel</Link>
    </form>
  )
}

export default Register