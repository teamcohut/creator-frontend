import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiPlus, FiSettings } from 'react-icons/fi'
import '../style.css'
import NavLink from '../../atoms/dashboard/NavLink'
import Button from '../../atoms/Button'

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
                  <span className='manrope-500'>Add New Program</span>
                </div>
              </div>
              {/* <hr />
              <NavLink type='link' path='#' dropdownList={[]}>
                <FiSettings />
                <span>Program Settings</span>
              </NavLink>
              <div className="d-flex flex-column align-items-start pt-3 pb-2 px-3">
                <span className="manrope-500 primary-950 fs-body">Program Team</span>
                <small className="manrope-500 fs-small dark-700">7 members</small>
              </div>
              <div className="py-2 px-3">
                <Button type='button' fill={false} action={()=>{}}>
                  <FiPlus className='primary-700' />
                  <span className="primary-700">Add teammates</span>
                </Button>
              </div> */}
            </div>
        </div>
    </>
  )
}

export default CohortsDropdown