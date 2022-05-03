import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Godmode = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  // restrict page
  useEffect(() => {
    if (!user || user.role !== 'admin') navigate('/dashboard')
  }, [user, navigate])

  return (
    <div>Welcome to God Mode, you are an Administrator</div>
  )
}

export default Godmode