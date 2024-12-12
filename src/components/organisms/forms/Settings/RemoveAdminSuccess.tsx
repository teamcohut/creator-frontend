import React from 'react'
import SettingsStatusCard from './SettingsStatusCard'
import { FiTrash } from 'react-icons/fi'

const RemoveAdminSuccess = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Removal Successful" 
        email='temiadebayo@gmail.com'
        description="has been removed from the cohort"
        icon={<FiTrash style={{ fontSize: '70px', color: 'var(--warning-500)' }}/>}/>
    </div>
  )
}

export default RemoveAdminSuccess
