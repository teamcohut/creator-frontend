import React from 'react'
import SettingsStatusCard from './SettingsStatusCard'
import { FiCheckCircle } from 'react-icons/fi'

const ChangePasswordSuccess = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Change Successful!" 
        description="You have successfully changed your password"
        icon={<FiCheckCircle style={{ fontSize: '70px', color: 'var(--success-600)' }}/>}/>
    </div>
  )
}

export default ChangePasswordSuccess
