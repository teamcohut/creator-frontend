import React, { useState } from 'react'
import AuthTemplate from '../../components/templates/AuthTemplate'
import EmailInput from '../../components/atoms/inputs/EmailInput'
import Button from '../../components/atoms/Button'
import SuccessCard from '../../components/molecules/auth/SuccessCard'
import { FiMail } from 'react-icons/fi'
import axiosPublic from '../../api/axios'
import { notification } from 'antd'

const ResendMail = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [sent, setSent] = useState<boolean>(false)
    const [api, contextHolder] = notification.useNotification()

    const resendMail = async () => {
        setIsLoading(true)
        try {
            const response = await axiosPublic.post('/auth/resend-verification-email', { email })
            console.log(response);
            if (!response.data.message) {
                console.log(response.data.message)
                setSent(false)
            }
            setSent(true)
            setIsLoading(false)
        } catch (error: any) {
            api.error({
                message: error.response.data.errors[0]
            })
            console.log(error);
            setSent(false)
            setIsLoading(false)
        }
    }

    if (sent) {
        return (
            <>
                {contextHolder}
                <AuthTemplate title='Launch Your Learning Program In 5 Minutes' author='Cohut'>
                    <SuccessCard icon={<FiMail className='fs-icon success-600' />} title='Mail Resent' description={`A verification link has been resent to ${email}. Please check your inbox and click the link to continue.`}>
                        <span className='dark-500 manrope-500 fs-small'>Didn&apos;t get an email?</span>
                        <Button action={() => setSent(false)} children='Resend Mail' fill type='button' />
                    </SuccessCard>
                </AuthTemplate>
            </>
        )
    }

    return (
        <>
            {contextHolder}
            <AuthTemplate title='Launch Your Learning Program In 5 Minutes' author='Cohut'>
                <SuccessCard icon={<></>} title='' description=''>
                    <div className="h-100 w-100 d-flex flex-column gap-3">
                        <div className="d-flex flex-column align-items-start text-start gap-2 w-100 h-25 head">
                            <h1 className='manrope-600 primary-950 fs-h2'>Resend Mail</h1>
                            <span className='manrope-500 dark-700 fs-body'>Don’t worry, we’ll send you an email to verify your account.</span>
                        </div>
                        <div className="d-flex flex-column w-100 h-75 justify-content-between align-items-stretch text-start gap-5">
                            <EmailInput id='email' onchange={(e) => setEmail(e.target.value)} placeholder='example@example.com' label='Email' />
                            <Button action={resendMail} children='Resend Mail' fill type='button' />
                        </div>
                    </div>
                </SuccessCard>
            </AuthTemplate>
        </>
    )
}

export default ResendMail