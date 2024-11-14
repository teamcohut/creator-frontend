import React from 'react'
import { FiBell } from 'react-icons/fi'
import SearchInput from '../../../atoms/inputs/SearchInput'

const TopNav = () => {
  return (
    <>
      <div className="top-nav w-100 d-flex justify-centent-between">
        <SearchInput id='search' onchange={()=>{}} placeHolder='Search for anything' label='' />
        <div className="d-felx align-items-center gap-2">
          <button><FiBell /></button>
          <img src="/assets/images/bootcamp.png" width={30} alt="" />
        </div>
      </div>
    </>
  )
}

export default TopNav