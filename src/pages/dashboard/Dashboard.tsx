import React from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate'
import Header from '../../components/organisms/dashboard/Header'
import Overview from '../../components/organisms/dashboard/Overview'

const Dashboard = () => {
  return (
    <>
      <DashboardTemplate>
        <Header />
        <Overview />
      </DashboardTemplate>
    </>
  )
}

export default Dashboard