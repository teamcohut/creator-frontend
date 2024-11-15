import React from 'react'
import DeadlineCalendar from "../upcomingDeadline/index";
import CourseCard from "../courses/index";


const CourseDisplay = () => {
  const sampleDeadlines = [
    { date: "2024-05-20", title: "Final Project" },
    { date: "2024-11-13", title: "Submit Report" },
  ];

  return (
    <div>Courses
    {/* <DeadlineCalendar deadlines={sampleDeadlines} /> */}
    <CourseCard 
    name="Introduction to UI/UX Design" 
    dateCreated="22nd Nov." 
    isActive={true} 
    progress={40} />
    </div>
  )
}

export default CourseDisplay