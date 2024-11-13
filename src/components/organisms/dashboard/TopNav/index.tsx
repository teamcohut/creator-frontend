import React from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'

const TopNav = () => {
  return (
    <>
      <div className="d-flex w-100 justify-centent-between">
        <div className="d-flex">
          <input type="text" name="" id="" />
          <button><FiSearch /></button>
        </div>
        <div className="d-felx align-items-center gap-2">
          <button><FiBell /></button>
          <img src="/assets/image/bootcamp.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default TopNav