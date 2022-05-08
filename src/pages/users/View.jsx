import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { view } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'

const View = () => {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { selectedUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)
  const { _id, name, email, role } = selectedUser

  // restrict page
  useEffect(() => {
    if (!user || user.role !== 'admin') navigate('/dashboard')
  }, [user, navigate])

  useEffect(() => {
    dispatch(view(id))
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className='user-list'>
      <h3>{name}</h3>
      <h5>{email}</h5>
      <h6>{role}</h6>
      <Link className='btn btn-primary mr-2' to={`/dashboard/users/update/${_id}`}>Update</Link>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default View