import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ILogo } from '../../../@types/logo.interface'

const Logo: FC<ILogo> = ({width}) => {
  return (
    <>
      <Link to={'/'}>
          <img width={width} src={'/assets/images/CohutlogomarkC2.svg'} alt={'Cohut Logo'} />
      </Link>
    </>
  )
}

export default Logo