import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [displayName, setDisplayName] = useState('User')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const altName = user.email.split("@")
    setDisplayName(user.name || altName[0]);
  }, [])


  return (
    <>
      <section className=' mx-auto w-[90%]'>
        <div className=' flex items-center container mx-auto h-16 shadow-lg'>
          <h1 className=' text-4xl'>User</h1>
        </div>

        <div className=' bg-gradient-to-br from-blue-600 to-green-600 h-52 w-5/6 rounded-lg overflow-hidden px-11 mt-8 mx-auto'>
          <div className='flex flex-col items-start py-12 flex-1'>
            <div className='text-white text-2xl font-semibold'>Welcome,</div>
            <div className='text-white text-4xl font-bold '> {displayName}</div>
            <div className='text-white'>Start your Learning with us</div>
          </div>

        </div>

      </section>
    </>

  )
}

export default Dashboard