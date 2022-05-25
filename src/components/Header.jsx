import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({setLoginModal}) => {
  const onLoginClick = () =>{
    setLoginModal(true)
  }
  
  return (
    <>
      <header className=' shadow-lg bg-blue-200'>
        <nav className=' container mx-auto p-5 flex  justify-between '>
          <Link className=' text-2xl md:text-3xl font-bold italic' to="/klassPortal"><span className=' text-green-400'>klass</span>Portal</Link>
          {/* <div >
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
          </div> */}
          <button onClick={ onLoginClick } className=' px-4 py-1 rounded-lg text-white bg-green-300 shadow font-bold border-0 outline-none'>
            Login
          </button>
          
        </nav>
      </header>
    </>
  )
}

export default Header