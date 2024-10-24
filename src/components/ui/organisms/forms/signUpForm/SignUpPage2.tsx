import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProgressBar from '../../../molecules/forms/ProgressBar'
import { FiArrowLeft } from 'react-icons/fi'
import './index.css'

const SignUpPage2 = () => {
  const navigate = useNavigate()
  return (
    <>
      <form className='form bg-white d-flex flex-column rounded-5' action="">
        <ProgressBar length={2} page={2} />
        <div className="w-100 d-flex justify-content-between">
          <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
          <span className='dark-700 back' onClick={()=>navigate(-1)}><FiArrowLeft /> Back</span>
        </div>
        <div className="d-flex flex-column">
        </div>
        <div className="footer w-100 d-flex flex-column align-items-center gap-2">
          <div className="d-flex gap-2">
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Privacy Policy.</Link>
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Help.</Link>
            <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Visit www.cohut.co</Link>
          </div>
          <span className='dark-500 fs-footer text-decoration-none'>(c) 2024 Cohut</span>
        </div>
      </form>
    </>
  )
}

export default SignUpPage2