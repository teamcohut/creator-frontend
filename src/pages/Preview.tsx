import React from 'react'
import DeadlineCalendar from '../components/organisms/dashboard/upcomingDeadline'

const Preview = () => {
  return (
    <>
      <h1 className='fs-h3 manrope-700 primary-800'>This page is for previewing components <br /> Preview your component below</h1>
      <DeadlineCalendar deadlines={[]} />
    </>
  )
}

export default Preview