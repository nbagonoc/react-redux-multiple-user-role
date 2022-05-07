import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAll, reset } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'

const List = () => {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { users, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)

  // restrict page
  useEffect(() => {
    if (!user || user.role !== 'admin') navigate('/dashboard')
  }, [user, navigate])

  useEffect(() => {
    dispatch(getAll())
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className='user-list'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(({ _id, name, email, role }) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>
                <Link className='btn btn-primary mx-2' to={`/update/${_id}`}>Update</Link>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List