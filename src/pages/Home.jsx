import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <Card title='Welcome to RRMU'>
      <p>A very simple React App with Redux-Toolkit with authentication with multiple user roles.</p>
      <p>User roles:</p>
      <ul>
          <li>Admin: admin@gmail.com | admin</li>
          <li>Subscriber: test@gmail.com | test1234</li>
      </ul>
    </Card>
  )
}

export default Home