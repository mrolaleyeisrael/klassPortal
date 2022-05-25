import React from 'react'
import { useState } from 'react'
import student from '../assets/student1.png'
import { FaRocketchat, FaRegEnvelopeOpen, FaGolfBall, FaApple, FaBook, FaTimes } from 'react-icons/fa'
import Header from '../components/Header'

import Login from '../components/Login'
import Register from '../components/Register'

const Home = ({ loginModal, setLoginModal, registerModal, setRegisterModal }) => {
  // const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <Header setLoginModal = {setLoginModal} />
      <section className=' px-5 h-[86vh] flex justify-center items-center bg-gradient-to-br from-blue-200 to-green-200 '>
        <div className=' container mx-auto grid grid-cols-1 gap-5 md:place-items-center md:grid-cols-2 '>
          <div className=' text-center'>
            <h1 className='  font-bold text-3xl md:text-6xl'>
              <span className=' text-green-500'>Learn</span> on your <br /> class <span className=' text-blue-400'>schedule</span>
            </h1>
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

          { loginModal && (
            <Login setLoginModal={setLoginModal} setRegisterModal = {setRegisterModal}  />

          )}

          {
            registerModal && (
              <Register setLoginModal={setLoginModal} setRegisterModal = {setRegisterModal} />
            )
          }
      </section>
    </>
  )
}

export default Home