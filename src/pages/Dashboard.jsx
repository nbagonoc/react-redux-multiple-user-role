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
    <div className='card'>
      <div className="card-body">
      <h5 className="card-title">
        Welcome to your Dashboard, {user ? user.name : ''}
      </h5>
      <span>Your access level: {user ? user.role : ''}</span>
      </div>
    </div>
  )
}

export default Dashboard