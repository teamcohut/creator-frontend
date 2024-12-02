import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthTemplate from '../../components/templates/AuthTemplate'
import ForgotPasswordForm from '../../components/organisms/forms/loginForm/ForgotPasswordForm'
import ResetPasswordForm from '../../components/organisms/forms/loginForm/ResetPasswordForm'
import SuccessCard from '../../components/molecules/auth/SuccessCard'
import Button from '../../components/atoms/Button'
import { FiCheckCircle, FiMail } from 'react-icons/fi'

const ForgotPassword = () => {
  const [verified, setVerified] = useState<verified>(false)
  const navigate = useNavigate()
  const route = useParams()
  console.log(route);


  const verify = () => {
    setVerified(true)
  }

  // const successful = () => {
  //   setVerified(true)
  // }

  if (!verified) {

    return (
      <>
        <AuthTemplate title='The simplest solution is often the best solution.'>
          <ForgotPasswordForm verify={verify} />
        </AuthTemplate>
      </>
    )
  } else {
    console.log("Verified: ", verified);

    return (
      <>
        <AuthTemplate title='The simplest solution is often the best solution.'>
          <SuccessCard
            title="You've got mail"
            description='You have succeeded in creating your account. You can now click the link in your mail to verify your mail'
            icon={<FiMail className='fs-icon success-600' />}>
            <div className="w-auto">
              <Button action={() => { }} children='Resend Email' type='button' fill={false} border outline='primary' width={192} />
            </div>
          </SuccessCard>
        </AuthTemplate>
      </>
    )
  }
  //  else if (status === 'successful') {
  //   console.log(status);

  //   return (
  //       <>
  //         <AuthTemplate title='The simplest solution is often the best solution.'>
  //           <SuccessCard icon={<FiCheckCircle className='fs-icon success-600' />} title='Successful' description='You have succeeded in resetting your password. You can now sign in to your account'>
  //             <Button fill children='Sign In' action={()=>{navigate('/login')}} type='button' width={192} />
  //           </SuccessCard>
  //         </AuthTemplate>
  //       </>
  //     )
  // }
}

type verified = boolean

export default ForgotPassword