import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll, reset } from '../../features/users/userSlice'
import Spinner from '../../components/Spinner'

const Users = () => {
  const dispatch = useDispatch()
  const { users, isLoading, isError, isSuccess, message } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getAll())
  },[])

  return (
    <div>{users}</div>
  )
}

export default Users