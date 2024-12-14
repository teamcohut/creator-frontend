
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ISuccessCard } from '../../@types/auth.interface'
import { FiBookOpen, FiUser } from 'react-icons/fi'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'

const OnboardCohort = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='form bg-secondary-450 d-flex flex-column align-items-center gap-4 text-center rounded-5 mx-auto'>

                <div className="d-flex flex-column align-items-center gap-2 w-75 head">
                    {<FiUser className='fiUser' />}
                    <h1 className='manrope-600 primary-950 fs-h2'>Onboard Your Cohort</h1>
                    <p className='manrope-500 dark-700 fs-body'>A Cohort is a group of individuals learning together through a shared program over a set period</p>
                    <p className='manrope-500 dark-700 fs-body'>Onboard your first Cohort to launch your program</p>
                </div>
                <div className="footer w-100 d-flex flex-row align-items-center gap-2">
                    <Button children='Onboard New Cohort' type='button' action={() => { }} fill={true} />
                </div>
            </div>
        </>
    )
}

export default OnboardCohort