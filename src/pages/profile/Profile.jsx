import React from 'react'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import profile from '../../assets/download.png'

const Profile = () => {
  const [displayName, setDisplayName] = useState('User')
  const [email,setEmail] = useState('email')
  const [src, setSrc] = useState(profile)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const altName = user.email.split("@")
    setDisplayName(user.name || altName[0]);
    setEmail(user.email)
    user.src ? setSrc(user.src) : setSrc(profile);
    console.log(user.src)
  }, [])


  return (
    <div className='flex w-screen'>
      {/* <Navigation /> */}
      <div className='flex flex-col ml-20% w-4/5 mx-auto'>
        <div className=' w-full h-[90vh] p-5 bg-white mt-10'>
          {/* <img src={image} alt="" className=' rounded-full ' /> */}
          <div className=' grid grid-cols-2 gap-5 mt-10'>
            <div className=' space-y-5' >
              <h1 className=' text-3xl'>Profile Settings</h1>
              <p>Name</p>
              <p>{displayName}</p>
            </div>
            <div className=' space-y-5' >
              <img src={ src } alt="" />
              <p>Email</p>
              <p>{email}</p>
            </div>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Profile