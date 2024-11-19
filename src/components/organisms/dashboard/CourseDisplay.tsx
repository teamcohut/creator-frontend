import React from 'react'
import CourseCard from "../../molecules/dashboard/CourseCard";
import "../style.css"

const CourseDisplay = () => {
  

  return (
    <div className='courseDisplay w-100 d-flex flex-column align-items-stretch gap-3'>
        <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-2'> 
                <h4 className='manrope-600 fs-h4 primary-950'>Courses </h4>
                <span className='manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4'>5</span>
            </div>

            <div className='d-flex align-items-center gap-2'>
                <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">All</button>
                <button className="btn rounded-pill border-secondary manrope-500 dark-400">Active</button>
                <button className="btn rounded-pill border-secondary manrope-500 dark-400">Inactive</button>
                <button className="btn rounded-pill border-secondary manrope-500 dark-400">Closed</button>
            </div>
        
        </div>

        {
          Array(6).fill(1).map((el, i)=>(
            <CourseCard 
              name="Introduction to UI/UX Design" 
              dateCreated="22nd Nov." 
              isActive={true} 
              progress={25}
              key={i} />
          ))
        }
    </div>
  )
}

export default CourseDisplay