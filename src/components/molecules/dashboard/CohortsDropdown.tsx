import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiPlus } from 'react-icons/fi'
import '../style.css'

const CohortsDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <>
        <div className='programs w-100'>
            <button className='current-program d-flex align-items-center w-100' onClick={()=>setDropdownOpen(!dropdownOpen)}>
                <img className='rounded-circle' src="/assets/images/bootcamp.png" width={36} height={36} alt="" />
                <span className='manrope-500 fs-body primary-950'>My First Bootcamp</span>
                {
                  dropdownOpen?
                  <FiChevronUp className='manrope-500 fs-body primary-950' />:
                  <FiChevronDown className='manrope-500 fs-body primary-950' />
                }
            </button>
            <div className={`flex-column py-3 program-dropdown ${dropdownOpen? 'd-flex': 'd-none'}`}>
              <div className='d-flex flex-column gap-3 py-2'>
                <div className='other-program d-flex align-items-center px-3 py-2'>
                  <img className='rounded-circle' src="/assets/images/bootcamp.png" width={24} height={24} alt="" />
                  <span className='manrope-500 fs-body primary-950'>My First Bootcamp</span>
                </div>
                <div className='other-program d-flex align-items-center px-3 py-2'>
                  <img className='rounded-circle' src="/assets/images/bootcamp.png" width={24} height={24} alt="" />
                  <span className='manrope-500 fs-body primary-950'>My First Bootcamp</span>
                </div>
                <div className='other-program d-flex align-items-center px-3 py-2 fs-body primary-700'>
                  <FiPlus />
                  <span className='manrope-500'>Onboard New Program</span>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default CohortsDropdown