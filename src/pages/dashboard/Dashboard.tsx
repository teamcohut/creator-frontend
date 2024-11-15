import React from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate'
import Header from '../../components/organisms/dashboard/Header'
import Overview from '../../components/organisms/dashboard/Overview'
import CourseDisplay from '../../components/organisms/dashboard/courses/CourseDisplay'

const Dashboard = () => {
  return (
    <>
      <DashboardTemplate>
        <Header />
        <Overview />
        <CourseDisplay />
      </DashboardTemplate>
    </>
  )
}

export default Dashboard