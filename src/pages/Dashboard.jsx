import React from 'react'

const Dashboard = () => {
  return (
    <>
      <section className=' mx-auto w-full'>
        <div className=' flex flex-row h-screen bg-blue-300'>
          <div className=' w-1/6 bg-blue-400 pl-5 rounded-r-3xl'>
            <h1 className=' pt-5 text-2xl md:text-3xl font-bold italic'><span className=' text-blue-500'>klass</span>Portal</h1>
            
            <div className=' mt-32 space-y-5'>

              <div className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Dashboard</div>
              <div className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Courses</div>
              <div className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Profile</div>
              <div className=' bg-blue-300 text-center p-3 rounded-l-full hover:bg-blue-500 shadow-lg'>Logout</div>
            </div>
          </div>

          <div className='w-5/6 bg-blue-300'>
            Right Side
          </div>
        
        </div>
      </section>
    </>

  )
}

export default Dashboard