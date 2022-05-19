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
    <Card title='Welcome to your Dashboard'>
      <p>How was your day, {user ? user.name : ''}?</p>
      <span>Your access level: {user ? user.role : ''}</span>
    </Card>
  )
}

export default Dashboard