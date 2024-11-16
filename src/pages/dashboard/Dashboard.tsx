import React from 'react'
import DashboardTemplate from '../../components/templates/DashboardTemplate'
import Header from '../../components/organisms/dashboard/Header'
import Overview from '../../components/organisms/dashboard/Overview'
import Button from '../../components/atoms/Button'
import { FiChevronDown, FiDownload, FiPlus } from 'react-icons/fi'

const Dashboard = () => {
  return (
    <>
      <DashboardTemplate>
        <Header title='Good morning Evergreen,' subtitle="Here’s an overview of your program, My First Bootcamp">
          <div className="d-flex align-items-center gap-4">
            <Button action={()=>{}} fill gap type='button'>
              <FiPlus />
              Create New
              <FiChevronDown />
            </Button>
            <Button action={()=>{}} fill={false} border={false} type='button'>
              <FiDownload className='fs-h3' />
            </Button>
          </div>
        </Header>
        <Overview />
      </DashboardTemplate>
    </>
  )
}

export default Dashboard