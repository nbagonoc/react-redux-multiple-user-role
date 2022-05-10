import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { view, update, reset } from '../../features/users/userSlice'

const Update = () => {
  const { selectedUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)
  const { name, role } = selectedUser
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    inputName: name,
    inputRole: role
  })

  const { inputName, inputRole } = formData

  console.log(formData)

  useEffect(() => {
    dispatch(view(id))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: inputName,
      role: inputRole
    }

    dispatch(update({ id, data }))
    
    if (isSuccess) {
      navigate(-1)
      toast.success(message)
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

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
          <button type='submit' className='btn btn-primary mr-1'>Update</button>
          <Link className='btn btn-warning mr-2' to={`/dashboard/users`}>Cancel</Link>
        </form>
      </div>
    </div>
  )
}

export default Update