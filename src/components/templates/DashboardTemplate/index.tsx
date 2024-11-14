import React, { FC } from 'react'
import SideNav from '../../organisms/dashboard/SideNav'
import TopNav from '../../organisms/dashboard/TopNav'
import { IDashboardTemplate } from '../../../@types/dashboard.interface'

const DashboardTemplate: FC<IDashboardTemplate> = ({ children }) => {
  return (
    <>
        <div className="d-flex w-100">
            <SideNav />
            <div className='w-100'>
                <TopNav />
                {children}
            </div>
        </div>
    </>
  )
}

export default DashboardTemplate