import React, { FC } from 'react'
import NavLink from '../../../atoms/dashboard/NavLink'
import { HelpList, NavList, SettingsList } from './NavList'
import Icon from '../../../atoms/Icon'
import { Link } from 'react-router-dom'
import Program from '../../../molecules/dashboard/ProgramDropdown'
import { FiHelpCircle, FiLogOut, FiSettings } from 'react-icons/fi'
import '../../style.css'

const SideNav: FC = () => {
  return (
    <>
      <div className="sidenav-div">
        <div className='side-nav d-flex flex-column align-items-start justify-content-start gap-5'>
          <Link className='logo-lg' to={'/'}>
            <Icon type='text-logo' fill={"true"} size={130} />
          </Link>
          <Program />
          <div className='w-100 d-flex flex-column align-items-center text-center gap-3'>
            {
              NavList.map((el, i) => (
                <NavLink key={i} type={'link'} dropdownList={[]} path={el.path}>
                  {el.icon}
                  <span className='fs-body'>{el.title}</span>
                </NavLink>
              ))
            }
          </div>
          <div className="w-100 d-flex flex-column gap-2 nav-tools">
            <hr />
            <NavLink type={'dropdown'} dropdownList={SettingsList} path={''}>
              <FiSettings className='nav-icon' />
              <span>Settings</span>
            </NavLink>
            <NavLink type={'dropdown'} dropdownList={HelpList} path={''}>
              <FiHelpCircle className='nav-icon' />
              <span>Help</span>
            </NavLink>
            <NavLink type={'logout'} dropdownList={[]} path={''}>
              <FiLogOut className='nav-icon' />
              <span>Sign Out</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav