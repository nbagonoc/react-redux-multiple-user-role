import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  // restrict page
  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  return (
    <div>Welcome to your Dashboard {user ? user.name : ''}</div>
  )
}

export default Dashboard