import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { view, update, reset } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'

const Update = () => {
  const { user } = useSelector((state) => state.auth)
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

  // restrict page
  useEffect(() => {
    if (!user || user.role !== 'admin') navigate('/dashboard')
  }, [user, navigate])

  // fetch data
  useEffect(() => {
    dispatch(view(id))
    return () => dispatch(reset())
  }, [])

  // reset state, show errors
  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess){
      toast.success(message)
      dispatch(reset())
    }
  }, [isSuccess, isError])

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
              <label htmlFor='role'>Example select</label>
              <select
                className='form-control'
                id='role'
                name='inputRole'
                value={inputRole}
                onChange={onChange}
              >
                <option value='subscriber'>Subscriber</option>
                <option value='admin'>Admin</option>
              </select>
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