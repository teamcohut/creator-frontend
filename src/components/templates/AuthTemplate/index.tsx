import "./index.css"
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IAuthTemplate } from '../../../@types/authtemplate.interface'

const AuthTemplate: FC<IAuthTemplate> = ({ children, title }) => {
  return (
    <>
      <div className="form-template container-fluid">
        <div className="left-div d-none d-lg-flex flex-column justify-content-between align-items-start">
          <Link to={'/'}>
            <img src={'/assets/images/Cohut.png'} alt={'Cohut Logo'} />
          </Link>
          <h1 className='mt-auto text-white'>{title}</h1>
        </div>
        <div className="form-container">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthTemplate