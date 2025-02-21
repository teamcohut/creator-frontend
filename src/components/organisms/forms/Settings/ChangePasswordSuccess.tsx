import { FC } from 'react'
import { ISetupModal } from '../../../../@types/dashboard.interface'
import SettingsStatusCard from './SettingsStatusCard'
import { FiCheckCircle, FiX } from 'react-icons/fi'

const ChangePasswordSuccess: FC<ISetupModal> = ({
  setModalOpen,
}) => {
  const handleClose = () => {
    setModalOpen(false, "changepassword");
  };
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Change Successful!" 
        description="You have successfully changed your password"
        icon={<FiCheckCircle style={{ fontSize: '70px', color: 'var(--success-600)' }}/>}
        cancelBtn ={
          <button onClick={() =>{handleClose()}}
          className='border-none bg-transparent'
          >
              <FiX className='fs-h3'/>
          </button>
        } 
      />
    </div>
  )
}

export default ChangePasswordSuccess
