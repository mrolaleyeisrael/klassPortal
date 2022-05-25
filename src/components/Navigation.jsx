import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className=' w-1/6 bg-blue-400 pl-5 rounded-r-3xl'>
      <h1 className=' pt-5 text-2xl md:text-3xl font-bold italic'><span className=' text-blue-500'>klass</span>Portal</h1>

      <div className=' mt-32  '>

        <ul className=' space-y-5'>

          <Link className='mb-5' to="" >
            <li className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Dashboard</li>
          </Link>

          <Link to="courses">
            <li className=' my-5 bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Courses</li>
          </Link>

          <Link to="profile">
            <div className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Profile</div>
          </Link>

          <Link to="logout">
            <div className='mt-5 bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Log Out</div>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navigation