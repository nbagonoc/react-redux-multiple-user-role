import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { test, reset } from '../features/auth/authSlice'

const Test = () => {
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(test())
  }, [user, dispatch])

  useEffect(() => {
    if (isError) toast.error(message)
    if (isSuccess) {
      toast.success(message)
      dispatch(reset())
    }
  }, [user, isError, isSuccess, message, dispatch])

  return (
    <div>Check console for errors</div>
  )
}

export default Test