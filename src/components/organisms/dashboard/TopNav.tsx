import React from 'react'
import { FiBell } from 'react-icons/fi'
import SearchInput from '../../atoms/inputs/SearchInput'
import '../style.css'

const TopNav = () => {
  return (
    <>
      <div className="top-nav w-100 d-flex justify-content-between">
        <div className='search-div'>
          <SearchInput id='search' onchange={()=>{}} placeHolder='Search for anything' label='' />
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className='btn'><FiBell className='fs-h3' /></button>
          <img src="/assets/images/bootcamp.png" className='rounded-circle' width={30} height={30} alt="" />
        </div>
      </div>
    </>
  )
}

export default TopNav