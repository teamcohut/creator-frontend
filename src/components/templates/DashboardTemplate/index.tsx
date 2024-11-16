import React, { FC } from 'react'
import SideNav from '../../organisms/dashboard/SideNav'
import TopNav from '../../organisms/dashboard/TopNav'
import Checklist from '../../organisms/dashboard/Checklist'
import './index.css'
import { Outlet } from 'react-router-dom'

const DashboardTemplate: FC = () => {
  return (
    <>
        <div className="dashboard-template d-flex w-100">
            <SideNav />
            <div className='dashboard-body w-100'>
                <TopNav />
                <Outlet />
                <Checklist />
            </div>
        </div>
    </>
  )
}

export default DashboardTemplate