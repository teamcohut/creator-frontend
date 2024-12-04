import React from 'react'
import Header from '../Header'
import SessionList from './SessionList'
import SessionResource from './SessionResource'

const SessionsDisplay = () => {
  return (
    <div>
      <Header title="Learning" subtitle="View and Manage your Cohort's learning activities here">
        <div></div>
      </Header>
      <div className='d-flex flex-row gap-2'>
        <div className='w-75'>
          <SessionList />
        </div>
        <div className='w-25 px-3'>
          <SessionResource />
        </div>
      </div>
    </div>
  )
}

export default SessionsDisplay