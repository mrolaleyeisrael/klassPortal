import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className=' shadow-lg bg-blue-300'>
        <nav className=' container mx-auto p-5 flex  justify-between '>
          <Link to="/klassPortal"></Link>
          <h1 className=' text-2xl md:text-3xl font-bold italic'><span className=' text-blue-400'>klass</span>Portal</h1>
          {/* <div >
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
          </div> */}
          <button className=' px-4 py-1 rounded-lg text-white bg-blue-400 shadow font-bold border-0 outline-none'>
            Login
          </button>
          
        </nav>
      </header>
    </>
  )
}

export default Header