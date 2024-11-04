import React from 'react'
import SuccessCard from '../../../../molecules/forms/SuccessCard'
import { FiCheckCircle } from 'react-icons/fi'
import Button from '../../../../atoms/Button'
import { useNavigate } from 'react-router-dom'
import '../../index.css'

const LoginSuccess = () => {
    const navigate = useNavigate()
  return (
    <>
        <SuccessCard 
            title='Program Ready!' 
            description='We have created a learning program for you. You can customize your program or do so later.'
            icon={<FiCheckCircle className='fs-h1 success-600' />}>
                <div className='bc-card mx-auto d-flex align-items-stratch gap-2 gap-md-3 p-2 rounded-3'>
                    <img src="/assets/images/bootcamp.png" alt="" />
                    <div className="d-flex flex-column align-items-start text-start gap-1 gap-md-3">
                        <div className="d-flex flex-column align-items-start text-start">
                            <h3 className='fs-h3 primary-950 manrope-600'>My First Bootcamp</h3>
                            <span className='fs-footer manrope-500 dark-600'>Hands-on projects, mentorship, job
                            placement assistance.</span>
                        </div>
                        <span className='dark-900 manrope-500 fs-footer'>Start Date:<span className='dark-600'> November 1, 2024</span></span>
                    </div>
                </div>
                <div className="w-100 px-5 d-flex flex-column-reverse flex-sm-row gap-3">
                  <Button fill={true} text='Customize' type='button' action={()=>navigate('')} />
                  <Button fill={false} text='Go To Dashboard' type='button' action={()=>navigate('')} />
                </div>
        </SuccessCard>
    </>
  )
}

export default LoginSuccess