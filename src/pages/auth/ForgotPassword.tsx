import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AuthTemplate from '../../components/templates/AuthTemplate'
import ForgotPasswordForm from '../../components/organisms/forms/loginForm/ForgotPasswordForm'
import SuccessCard from '../../components/molecules/auth/SuccessCard'
import Button from '../../components/atoms/Button'
import { FiMail } from 'react-icons/fi'

const ForgotPassword = () => {
  const [verified, setVerified] = useState<verified>(false)
  const route = useParams()
  console.log(route);


  const verify = () => {
    setVerified(true)
  }

  if (!verified) {

    return (
      <>
        <AuthTemplate title='The simplest solution is often the best solution.' author='William of Ockham'>
          <ForgotPasswordForm verify={verify} />
        </AuthTemplate>
      </>
    )

  } else {

    return (
      <>
        <AuthTemplate title='The simplest solution is often the best solution.' author='William of Ockham'>
          <SuccessCard
            title="You've got mail"
            description='You have succeeded in creating your account. You can now click the link in your mail to verify your mail'
            icon={<FiMail className='fs-icon success-600' />}>
            <div className="w-auto">
              <Button action={() => setVerified(false)} children='Resend Email' type='button' fill={false} border outline='primary' width={192} />
            </div>
          </SuccessCard>
        </AuthTemplate>
      </>
    )
    
  }
}

type verified = boolean

export default ForgotPassword