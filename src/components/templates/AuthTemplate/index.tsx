import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import FormCard from '../../ui/molecules/auth/FormCard'
import "./index.css"

const AuthTemplate: FC<IAuthTemplate> = ({children}) => {
  return (
    <>
        <div className='justify-between items-stretch form-template'>
            <div>
                <Link to={'/'}><img  src={'/icons/logo/logo-white.png'} alt={'Cohut Logo'} /></Link>
                <h1>Launch Your Learning Program in 5 Minutes.</h1>
            </div>
            <FormCard>
              {children}
            </FormCard>
        </div>
    </>
  )
}

interface IAuthTemplate {
  children: React.ReactNode
}

export default AuthTemplate