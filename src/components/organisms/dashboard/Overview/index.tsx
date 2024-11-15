import React from 'react'
import DeadlineCalendar from "../upcomingDeadline/index";
import CourseCard from "../courses/index";
import { FiBookOpen } from 'react-icons/fi';


const Overview = () => {
  const sampleDeadlines = [
    { date: "2024-05-20", title: "Final Project" },
    { date: "2024-11-13", title: "Submit Report" },
  ];

  return (
    <div>Overview
    {/* <DeadlineCalendar deadlines={sampleDeadlines} /> */}
    <CourseCard 
    icon={<FiBookOpen />}  
    name="Introduction to UI/UX Design" 
    dateCreated="22nd Nov." 
    isActive={true} 
    progress={40} />
    </div>
  )
}

export default Overview