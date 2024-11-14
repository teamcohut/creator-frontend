import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { INavLink } from '../../../../@types/dashboard.interface'
import './index.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const NavLink: FC<INavLink> = ({ path, children, type, dropdownList }) => {
  const [openDropDown, setOpenDropDown] = useState(false)
  
  if (type === 'dropdown') {
    return (
      <div>
        <button onClick={()=>setOpenDropDown(!openDropDown)} className='nav-link nav-dropdown w-100 dropdown-btn d-flex align-items-center justify-content-between p-3'>
          <small className='d-flex align-items-center manrope-500 fs-body'>{children}</small>
          <span className='span'>
            {openDropDown ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </button>
        <div className={`${openDropDown? 'd-flex': 'd-none'} flex-column dropdown-div`}>
          {
            dropdownList?.map((el, i) => (
              <Link className='dropdown-link w-100 d-flex align-items-center text-decoration-none manrope-500 fs-body' key={i} to={el.path}>
                {el.icon}
                <span className=''>{el.title}</span>
              </Link>
            ))
          }
        </div>
      </div>
    )
  } else if (type === 'link') {
    return <Link className='nav-link w-100 d-flex align-items-center justify-content-start manrope-500' to={path}>{children}</Link>
  } else if (type === 'logout'){
    return (
      <button className='nav-link w-100 d-flex align-items-center justify-content-start rounded-0 manrope-500 fs-body'>{children}</button>
    )
  }
  return <></>
}

export default NavLink