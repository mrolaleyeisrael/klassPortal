import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation'

const User = () => {
  return (
    <div className = "flex flex-row h-screen bg-blue-300" >

      <Navigation />

      <Outlet />

    </div>
  )
}

export default User