import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { view, remove, reset } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { toast } from 'react-toastify'

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

  // fetch data
  useEffect(() => {
    dispatch(view(id))
    return () => dispatch(reset())
  }, [])

  // reset state, show errors
  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess) {
      dispatch(reset())
    }
    if (isSuccess && message) {
      navigate(-1)
      toast.success(message)
      dispatch(reset())
    }
  }, [isSuccess, isError])

  const onDelete = (e) => {
    e.preventDefault()
    dispatch(remove(id))
  }

  if (isLoading) return <Spinner />

  return (
    <Card>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <h6>{role}</h6>
        <Link className='btn btn-primary' to={`/dashboard/users/update/${_id}`}>Update</Link>
        <Button className='btn btn-danger mx-2' onClick={onDelete}>Delete</Button>
        <Link className='btn btn-secondary' to={`/dashboard/users`}>Back</Link>
    </Card>
  )
}

export default View