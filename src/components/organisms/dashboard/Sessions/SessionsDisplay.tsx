import React from 'react'
import Header from '../Header'
import SessionList from './SessionList'

const SessionsDisplay = () => {
  return (
    <div>
      <Header title="Learning" subtitle="View and Manage your Cohort's learning activities here">
        <div></div>
      </Header>
      <div className=''>
        <div className=''>
          <SessionList />
        </div>
      </div>
    </div>
  )
}

export default SessionsDisplay