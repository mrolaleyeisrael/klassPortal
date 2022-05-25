import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = (e) => {
    navigate('/klassPortal')
  }

  const handleCancel = () => {
    navigate('/user')
  }

  return (
    <div className=' w-[80vw] mx-auto'>
      <p>Are you sure you want to Logout?</p>

      <div className=' flex flex-row space-x-5'>
        <button type='submit' onClick={(e) => handleLogout(e)} className = "bg-red-500 text-2xl font-bold p-2" > Yes</button>

        <button type='submit' onClick={(e) => handleCancel(e)} className = "bg-green-500 text-2xl font-bold p-2" > No</button>
      </div>
    </div>
  )
}

export default Logout