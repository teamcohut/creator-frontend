import React from 'react'
import DeadlineCalendar from "../upcomingDeadline/index";
import CourseCard from "../courses/index";
import "./index.css"

const CourseDisplay = () => {
  

  return (
    <div className='courseDisplay'>
        <div className='d-flex flex-row justify-content-between'>
            <div className='align-content-center'> 
                <h4 className='manrope-600'>Courses 
                <span className='fs-footer bg-secondary-450 px-2 py-1 rounded-4'>5</span></h4>
            </div>

            <div className='d-flex flex-row gap-2'>
                <p>All</p>
                <p>Active</p>
                <p>Inactive</p>
                <p>Closed</p>
            </div>
        
        </div>

        <CourseCard 
        name="Introduction to UI/UX Design" 
        dateCreated="22nd Nov." 
        isActive={true} 
        progress={40} />
        {/* <CourseCard 
        name="Introduction to UI/UX Design" 
        dateCreated="22nd Nov." 
        isActive={true} 
        progress={40} />
        <CourseCard 
        name="Introduction to UI/UX Design" 
        dateCreated="22nd Nov." 
        isActive={true} 
        progress={40} />
        <CourseCard 
        name="Introduction to UI/UX Design" 
        dateCreated="22nd Nov." 
        isActive={true} 
        progress={40} /> */}
    </div>
  )
}

export default CourseDisplay