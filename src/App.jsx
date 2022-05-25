import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Dashboard from './pages/dashboard/Dashboard'
import User from './pages/user/User'
import Course from './pages/courses/Courses'
import Profile from './pages/profile/Profile'
import Details from './pages/details/Details'
import Logout from './pages/logout/Logout'

function App() {
  const login = () => {

  }

  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/klassPortal" element={<Home registerModal = {registerModal} setRegisterModal= {setRegisterModal} loginModal ={loginModal} setLoginModal = {setLoginModal} />} />
        <Route path='klassPortal/user' element ={<User />} >
          <Route  path="" element={<Dashboard />} />
          <Route  path="courses" element={<Course />} />
          <Route  path="profile" element={<Profile />} />
          <Route  path="courses/:courseid" element={<Details />} />
          <Route path='logout' element = {<Logout />} />
        </Route>
      </Routes>
      {/* <Dashboard /> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
