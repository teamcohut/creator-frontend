import React from 'react'
import { Link } from 'react-router-dom'

const FormFooter = () => {
  return (
    <>
        <div className="footer w-100 d-flex flex-column align-items-center gap-2">
        <div className="d-flex gap-2">
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Privacy Policy.</Link>
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Help.</Link>
          <Link className='dark-500 fs-footer text-decoration-none' to={"#"}>Visit www.cohut.co</Link>
        </div>
        <span className='dark-500 fs-footer text-decoration-none'>(c) 2024 Cohut</span>
      </div>
    </>
  )
}

export default FormFooter