import React from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate'
import Header from '../../components/organisms/dashboard/Header'
import Overview from '../../components/organisms/dashboard/Overview'
import CourseDisplay from '../../components/organisms/dashboard/courses/CourseDisplay'
import RecentActivity from '../../components/organisms/dashboard/RecentActivity'
import DeadlineDisplay from '../../components/organisms/dashboard/upcomingDeadline/DeadlineDisplay'

const Dashboard = () => {
  return (
    <>
      <DashboardTemplate>
        <Header />
        <Overview />
        <div className='d-flex flex-row'>
          <div>
          <CourseDisplay />
          </div>
          <div>
            <RecentActivity />
            <DeadlineDisplay />
          </div>
        </div>
      </DashboardTemplate>
    </>
  )
}

export default Dashboard