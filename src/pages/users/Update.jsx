import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { view, update, reset } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'

const Update = () => {
  const { selectedUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)
  const { id } = useParams()
  const { name, role } = selectedUser
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    inputName: name,
    inputRole: role
  })

  const { inputName, inputRole } = formData


  useEffect(() => {
    dispatch(view(id))
  }, [dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    const data = { name: inputName, role: inputRole }
    
    if (name === inputName && role === inputRole) toast.error('Changes are required')
    else {
      dispatch(update({ id, data }))
      if (isSuccess) {
        navigate(-1)
        toast.success(message)
      }
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  if (isLoading) return <Spinner />

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Update</h5>
        <form onSubmit={onSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='inputName'
                value={inputName}
                placeholder='name'
                onChange={onChange}
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='role'>Role</label>
              <input
                type='role'
                className='form-control'
                id='role'
                name='inputRole'
                value={inputRole}
                placeholder='role'
                onChange={onChange}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary mr-2'>Update</button>
          <Link className='btn btn-warning' to={`/dashboard/users`}>Cancel</Link>
        </form>
      </div>
    </div>
  )
}

export default Update