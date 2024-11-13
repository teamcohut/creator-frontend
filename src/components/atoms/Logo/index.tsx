import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ILogo } from '../../../@types/logo.interface'

const Logo: FC<ILogo> = ({ color, size }) => {
  return (
    <>
      <Link to={'/'}>
        {
          color === "white" && size === "primary"?
          <img src={'/assets/images/Cohut.png'} alt={'Cohut Logo'} />:
          color === "white" && size === "secondary"?
          <img src={'/assets/images/Cohut.png'} alt={'Cohut Logo'} />:
          color === "primary" && size === "primary"?
          <img src={'/assets/images/Cohut-b.png'} alt={'Cohut Logo'} />:
          color === "primary" && size === "secondary"?
          <img src={'/assets/images/Cohut-bs.png'} alt={'Cohut Logo'} />:
          <img src={'/assets/images/Cohut-b.png'} alt={'Cohut Logo'} />
        }
        
      </Link>
    </>
  )
}

export default Logo