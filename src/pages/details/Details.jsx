import React from 'react'
import { useParams } from 'react-router-dom'
// import course from '../../assets/data/db';
import courses from '../../data/db'


const Details = () => {
  const { courseid: id}  = useParams();
  const i = id - 1

  return (

    <div className=' mt-24 w-[70%] mx-auto'>
      <div className=' grid grid-cols-2 bg-white space-y-5 p-5'>
        
        <div className=' '>
         
          <h1 className=' text-4xl mb-5 font-bold'>Introduction to {courses[i].name} </h1>
          <p>
            {courses[i].details.intro}
          </p>

        </div>

        <div className=''>
          <ul>
            <h1 className=' font-bold text-3xl'>Branches</h1>
            {
              courses[i].details.branches.map((branch, index) => 
              ( <li key={index}> {branch}</li>))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Details