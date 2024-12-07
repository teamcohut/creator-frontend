import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ILogo } from '../../../@types/logo.interface'

const Logo: FC<ILogo> = ({ width, logo }) => {
  return (
    <>
      <Link to={'/'}>
          <img width={width} src={`/assets/logo/${logo}.svg`} alt={'Cohut Logo'} />
      </Link>
    </>
  )
}

export default Logo