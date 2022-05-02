import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
