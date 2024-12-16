import React from 'react'
import Button from '../components/atoms/Button'

const ErrorUI = () => {
    return (
        <>
            <div className='d-flex flex-column mx-auto h-100vh align-items-center justify-content-center text-center'>
                <h1 className='primary-950 manrope-600'>Something Went Wrong</h1>
                <div className=''>
                    <p>We're currently experiencing a technical difficulty</p>
                    <p>Please try again later</p>
                </div>

                <div className=''>
                    <Button action={() => window.location.reload()} fill={false} type="button" border gap outline="primary">
                        Try Again
                    </Button>
                </div>

                <p>If the problem persists. please contact our support team at <span className='primary-500'>support@cohut.co</span></p>
            </div>

        </>
    )
}

export default ErrorUI