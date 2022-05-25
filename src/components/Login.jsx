import { FaTimes } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { FiUser } from 'react-icons/fi'
import image from '../assets/login.svg'
import { SpinnerCircularFixed } from 'spinners-react'

// import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";

import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginModal, setRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoad(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoad(false)
        const { displayName: name, email, photoURL: src, accessToken: token } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem("user", JSON.stringify(user));
        navigate('user');
      })
      .catch((error) => {
        setLoad(false)
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  const SignInWithGoogle = (e) => {
    e.preventDefault();
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false)
        const { displayName: name, email, photoURL: src, accessToken: token } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem("user", JSON.stringify(user));
        // console.log(res);
        navigate("user");
      })
      .catch((error) => {
        // console.log(error);
        setLoading(false)
        const errorMessage = error.message;
        setError(errorMessage)
      })
  };

  const showRegister = () => {
    setRegisterModal(true)
    setLoginModal(false)
  }

  return (

    <div className=' absolute top-0 left-0 h-screen bg-blue-600 bg-opacity-20 flex justify-center items-center p-10 md:px-20 '>

      <div className=' h-[90%] relative'>
        <FaTimes onClick={() => { setLoginModal(false) }} className=' absolute -right-3 -top-3 bg-white text-3xl rounded-full hover:cursor-pointer' />

        <div className=' bg-white grid gap-10 grid-cols-1 md:grid-cols-2 h-full rounded-lg '>

          <div className=' hidden md:flex w-full '>
            <img src={image} alt="" />
          </div>

          <div className=' flex flex-col items-center justify-center p-5'>
            <p className=' text-center font-bold text-xl md:text-3xl mb-5'>Sign In to your Dashboard</p>

            <form className=' space-y-3 p-5 rounded-lg bg-gray-100 w-full' >
              <div className=' relative rounded-full border border-blue-400'>
                <input
                  type="text"
                  name=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address...'
                  id=""
                  className=' p-2 rounded-full border w-full' />
                <FiUser className=' absolute top-3 right-3 text-blue-500' />
              </div>

              <div className=' relative rounded-full border border-blue-400'>

                <input
                  type="password"
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  className=' p-2 rounded-full border w-full' />
                <GiPadlock className=' absolute top-3 right-3 text-blue-500' />
              </div>

              <div className=' flex flex-row justify-between items-center'>
                <p className=' text-sm text-gray-700 font-semibold hover:text-blue-500'>Forgot password</p>
                <p onClick={showRegister} className=' text-sm text-gray-700 font-semibold hover:text-blue-500 cursor-pointer'>Register</p>
              </div>

              <div className=' pt-5 flex flex-col justify-center items-center md:flex-row space-x-2 space-y-2'>

                <button
                  onClick={(e) => handleLogin(e)}
                  className=' bg-blue-300 hover:bg-blue-400 w-full rounded-full py-1 font-bold text-gray-900'
                >{
                    loading ? <SpinnerCircularFixed /> : "Sign In"
                  }
                </button>

                <p className=' text-center font-semibold text-gray-600'>OR</p>

                <button type='submit' onClick={(e) => SignInWithGoogle(e)} className=' bg-red-300 hover:bg-red-400 w-full rounded-full py-1 font-bold text-gray-900'>
                  {
                    loading ? <SpinnerCircularFixed /> : "Sign In with Google"
                  }
                </button>

              </div>

            </form>

            <form className=' hidden' >
              <div className=' relative rounded-full border border-blue-400'>
                <input
                  type="text"
                  name=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address...'
                  id=""
                  className=' p-2 rounded-full border w-full' />
                <FiUser className=' absolute top-3 right-3 text-blue-500' />
              </div>

              <div className=' relative rounded-full border border-blue-400'>

                <input
                  type="password"
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  className=' p-2 rounded-full border w-full' />
                <GiPadlock className=' absolute top-3 right-3 text-blue-500' />
              </div>


            </form>

            <div className=' px-5 w-full'>

            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Login