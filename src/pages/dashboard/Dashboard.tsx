import React from 'react'
import Header from '../../components/organisms/dashboard/Header'
import Overview from '../../components/organisms/dashboard/Overview'
import Button from '../../components/atoms/Button'
import { FiChevronDown, FiDownload, FiPlus } from 'react-icons/fi'
import CourseDisplay from '../../components/organisms/dashboard/courses/CourseDisplay'
import RecentActivity from '../../components/organisms/dashboard/RecentActivity'
import DeadlineDisplay from '../../components/organisms/dashboard/upcomingDeadline/DeadlineDisplay'
import './index.css'

const Dashboard = () => {
  return (
    <>
      <>
        <Header title='Good morning Evergreen,' subtitle="Here’s an overview of your program, My First Bootcamp">
          <Button action={()=>{}} fill gap type='button'>
            <FiPlus />
            Create New
            <FiChevronDown />
          </Button>
          <Button action={()=>{}} fill={false} border={false} type='button'>
            <FiDownload className='fs-h3' />
          </Button>
        </Header>
        <Overview />
        <div className='w-100 d-flex gap-5 align-items-start'>
          <div className='dashboard-section1'>
            <CourseDisplay />
          </div>
          <div className='dashboard-section2 d-flex flex-column'>
            <RecentActivity />
            <DeadlineDisplay />
          </div>
        </div>
      </>
    </>
  )
}

export default Dashboard