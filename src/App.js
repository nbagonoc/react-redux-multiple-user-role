import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import List from './pages/users/List'
import Update from './pages/users/Update'
import View from './pages/users/View'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Test from './pages/Test'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="container mt-3">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard/test' element={<Test />} />
            <Route path='/dashboard/users' element={<List />} />
            <Route path='/dashboard/users/update/:id' element={<Update />} />
            <Route path='/dashboard/users/view/:id' element={<View />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
