import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <Card title='Welcome to RRMU'>
      <p>A very simple React App with Redux-Toolkit with authentication with multiple user roles</p>
      <ul>
        <li>User roles:</li>
        <ul>
          <li>Admin</li>
          <li>subscriber</li>
        </ul>
      </ul>
    </Card>
  )
}

export default Home