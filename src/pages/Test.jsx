import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { test } from '../features/auth/authSlice'

const Test = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(test())
  }, [user, dispatch])

  return (
    <div>Check console for errors</div>
  )
}

export default Test