import React from 'react'
import DeadlineCalendar from '../components/organisms/dashboard/upcomingDeadline'
import CountrySelectInput from '../components/atoms/inputs/CountryInput'
import { Country } from ".././components/atoms/inputs/types";

const Preview = () => {
  return (
    <>
      <h1 className='fs-h3 manrope-700 primary-800'>This page is for previewing components <br /> Preview your component below</h1>
      <DeadlineCalendar deadlines={[]} />
      <CountrySelectInput
        label="Where are you located at? (Optional)"
        id="country"
        onchange={(e: Country) => { }}
      />
    </>
  )
}

export default Preview