import React from 'react'
import { Link } from 'react-router-dom'
// import course from '../../assets/data/db'
import courses from '../../data/db'

const Courses = () => {
  return (
    <div className=' mt-24 w-[70%] mx-auto justify-center '>

      <div className=' w-full grid grid-cols-3 gap-5'>
        {
          courses.map(course => (
            <div key={course.id} className =" bg-blue-500 rounded-lg h-28 text-center">
              <p className=' font-bold text-3xl text-center pt-5 text-white pb-5'>{course.name} </p>
              <Link to={`${course.id}`} className= "bg-white p-1 rounded-full" > View More</Link>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default Courses