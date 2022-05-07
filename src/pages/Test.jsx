import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { test, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Test = () => {
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    console.log('it reached dispatch')
    dispatch(test())
  }, [])

  useEffect(() => {
    console.log('it reached message grabber')
    if (isSuccess) {
      console.log('it is finally success')
      toast.success(message)
      dispatch(reset())
    }
    if (isError) toast.error(message)
  }, [user, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>Check console for errors</div>
  )
}

export default Test