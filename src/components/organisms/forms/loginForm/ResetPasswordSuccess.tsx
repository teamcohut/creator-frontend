import { FC } from 'react'
import SuccessCard from '../../../molecules/auth/SuccessCard'
import { FiCheckCircle } from 'react-icons/fi'
import Button from '../../../atoms/Button'
import { useNavigate } from 'react-router-dom'
import '../../style.css'

const ResetPasswordSuccess: FC = () => {
    const navigate = useNavigate()
  return (
    <>
        <SuccessCard 
            title='Success' 
            description='You have succeeded in resetting your password. You can now sign in to your account'
            icon={<FiCheckCircle className='fs-h1 success-600' />}>
                <div className="w-50">
                  <Button children='Sign In' type='button' action={()=>navigate('/login')} fill={true} />
                </div>
        </SuccessCard>
    </>
  )
}

export default ResetPasswordSuccess