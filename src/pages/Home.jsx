import React from 'react'
import student from '../assets/student1.png'
import { FaRocketchat, FaRegEnvelopeOpen, FaGolfBall, FaApple, FaBook, FaTimes } from 'react-icons/fa'
import Login from '../components/Login'

const Home = () => {
  return (
    <>
      <section className=' px-5 h-[86vh] flex justify-center items-center bg-blue-300 relative '>
        <div className=' container mx-auto grid grid-cols-1 gap-5 md:place-items-center md:grid-cols-2 '>
          <div className=' text-center'>
            <h1 className='  font-bold text-3xl md:text-5xl'>
              Learn on your class schedule
            </h1>
            <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident assumenda, laboriosam animi.</p>
          </div>

          <FaRocketchat className=' absolute text-pink-200 animate-spin text-3xl md:right-[40%] right-[10%] top-[15%] md:top-[10%]' />

          <FaRegEnvelopeOpen className=' absolute rotate-45 text-yellow-300 text-xl animate-pulse md:text-3xl  bottom-[50%] left-2% md:left[50%]' />

          <FaGolfBall className=' absolute animate-bounce text-blue-100 text-3xl left-[10%] top-[20%]' />

          <FaApple className=' text-3xl text-red-200 animate-pulse absolute left-[20%] bottom-[30%]'/>

          <FaBook className=' text-3xl rotate-45 text-green-200 animate-pulse absolute right-[10%] bottom-[20%] md:right-[10%] md:bottom-[10%]'/>

          <div>
            <img src= {student} alt="" />
          </div>
        </div>

        <Login className ="hidden" />
      </section>
    </>
  )
}

export default Home