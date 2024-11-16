import React, { FC } from 'react'
import SideNav from '../../organisms/dashboard/SideNav'
import TopNav from '../../organisms/dashboard/TopNav'
import { IDashboardTemplate } from '../../../@types/dashboard.interface'
import './index.css'
import Checklist from '../../organisms/dashboard/Checklist'

const DashboardTemplate: FC<IDashboardTemplate> = ({ children }) => {
  return (
    <>
        <div className="dashboard-template d-flex w-100">
            <SideNav />
            <div className='dashboard-body w-100'>
                <TopNav />
                {children}
                <Checklist />
            </div>
        </div>
    </>
  )
}

export default DashboardTemplate