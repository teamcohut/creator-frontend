import React, { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { INavLink } from '../../../@types/dashboard.interface'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import '../style.css'
import { useProgramContext } from '../../../hooks/program/useProgramContext'

const NavLink: FC<INavLink> = ({ path, children, type, dropdownList }) => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const { activeProgram, activeCohort } = useProgramContext()
  let { pathname } = useLocation()
  pathname = pathname.replace(/\//g, '')
  const cPath = path.replace(/\//g, '')
  let isActive: boolean = pathname === cPath

  useEffect(() => {
    if (!activeCohort || !activeCohort.name || !activeProgram || !activeProgram.title) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [activeCohort, activeProgram])

  const handleClick = (e: any) => {
    if (path !== 'settings' && disabled) {
      e.preventDefault()
    }
  }
  
  
  if (type === 'dropdown') {
    return (
      <div className={`${openDropDown && 'hover'} rounded-3`}>
        <button onClick={()=>setOpenDropDown(!openDropDown)} className='nav-link nav-dropdown w-100 dropdown-btn d-flex align-items-center justify-content-between p-3 rounded-3'>
          <small className='d-flex align-items-center manrope-500 fs-body'>{children}</small>
          <span className='span'>
            {openDropDown ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </button>
        <div className={`${openDropDown? 'd-flex': 'd-none'} flex-column dropdown-div`}>
          {
            dropdownList?.map((el, i) => {
              isActive = pathname === el.path.replace(/\//g, '')
              return (
              <Link onClick={handleClick} className={`${isActive && 'active'} dropdown-link w-100 d-flex align-items-center text-decoration-none manrope-500 fs-body`} key={i} to={el.path}>
                {el.icon}
                <span className=''>{el.title}</span>
              </Link>
            )})
          }
        </div>
      </div>
    )
  } else if (type === 'link') {
    return <Link onClick={handleClick} className={`${isActive && 'active'} nav-link w-100 d-flex align-items-center justify-content-start manrope-500`} to={path}>{children}</Link>
  } else if (type === 'logout'){
    return (
      <button className='nav-link w-100 d-flex align-items-center justify-content-start rounded-0 manrope-500 fs-body'>{children}</button>
    )
  }
  return <></>
}

export default NavLink