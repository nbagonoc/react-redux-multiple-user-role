import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Card from '../components/Card'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  // restrict page
  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  return (
    <Card>
      <h5 className="card-title">Welcome to your Dashboard, {user ? user.name : ''}</h5>
      <span>Your access level: {user ? user.role : ''}</span>
    </Card>
  )
}

export default Dashboard