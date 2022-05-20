import { FaTimes } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'
import { FiUser } from 'react-icons/fi'
import image from '../assets/login.svg'

const Login = () => {
  return (

    <div className=' hidden absolute inset-1 md:inset-5 bg-black bg-opacity-80 rounded-lg p-5 '>

      <FaTimes className=' absolute right-2 top-2 bg-white text-3xl rounded-full' />

      <div className=' bg-white grid gap-10 grid-cols-1 md:grid-cols-2 h-full rounded-lg '>

        <div className=' hidden md:flex w-full '>
          <img src= {image} alt="" />
        </div>

        <div className=' flex flex-col items-center justify-center p-5'>
          <p className=' text-center font-bold text-xl md:text-3xl mb-5'>Sign In to Access your Dashboard</p>
          
          <form className=' space-y-3 p-5 rounded-lg bg-gray-100 w-full' >
            <div className=' relative rounded-full border border-blue-400'>
              <input type="text" name="" placeholder='Enter your email address...' id="" className=' p-2 rounded-full border w-full' />
              <FiUser className=' absolute top-3 right-3 text-blue-500' />
            </div>

            <div className=' relative rounded-full border border-blue-400'>
              <input type="password" name="" placeholder='Password' id="" className=' p-2 rounded-full border w-full' />
              <GiPadlock className=' absolute top-3 right-3 text-blue-500' />
              
            </div>
            <div className=' flex flex-row justify-between items-center'>
              <p className=' text-sm text-gray-700 font-semibold hover:text-blue-500'>Forgot password</p>
              <p className=' text-sm text-gray-700 font-semibold hover:text-blue-500'>Register</p>
            </div>

            <div className=' pt-5 flex flex-col justify-center items-center md:flex-row space-x-2 space-y-2'>

              <button className=' bg-blue-300 hover:bg-blue-400 w-full rounded-full py-1 font-bold text-gray-900'>Sign In</button>
              <p className=' text-center font-semibold text-gray-600'>OR</p>
              <button className=' bg-red-300 hover:bg-red-400 w-full rounded-full py-1 font-bold text-gray-900'>Sign In with Google</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Login