import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISuccessCard } from '../../../../@types/auth.interface'

const SuccessCard: FC<ISuccessCard> = ({ title, description, icon, children }) => {
  return (
    <>
        <form className='form bg-white d-flex flex-column align-items-center gap-4 text-center rounded-5' action="">
            <div className="w-100 d-flex justify-content-start">
                <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
            </div>
            <div className="d-flex flex-column align-items-center gap-2 w-75 head">
                {icon}
                <h1 className='manrope-600 primary-950 fs-h2'>{title}</h1>
                <span className='manrope-500 dark-700 fs-body'>{description}</span>
            </div>
                {children}
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

export default SuccessCard