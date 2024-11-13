import React, { FC } from 'react'
import Logo from '../../../atoms/Logo'
import NavLink from '../../../atoms/dashboard/NavLink'
import { FiLayout } from 'react-icons/fi'
import './index.css'

const SideNav: FC = () => {
  return (
    <>
      <div className="side-nav d-flex flex-column">
        <Logo color='primary' size='primary' />
        <div>
          <NavLink path='#'>
            <FiLayout />
            <span>Dashboard</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default SideNav