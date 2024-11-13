import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { INavLink } from '../../../../@types/dashboard.interface'
import './index.css'

const NavLink: FC<INavLink> = ({ path, children }) => {
  return (
    <>
        <Link className='nav-link w-100 d-flex align-items-center' to={path}>{children}</Link>
    </>
  )
}

export default NavLink