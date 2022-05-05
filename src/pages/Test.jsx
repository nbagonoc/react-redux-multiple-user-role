import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { test } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Test = () => {
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(test())
    if (isError) toast.error(message)
    if (isSuccess) {
      toast.success(message)
    }
  }, [user, isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>Check console for errors</div>
  )
}

export default Test