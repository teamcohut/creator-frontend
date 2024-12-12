import React from 'react'
import SettingsStatusCard from './SettingsStatusCard'
import { FiCheckCircle } from 'react-icons/fi'

const EditPermissionSaved = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Edits Saved!" 
        description="The permissions of your program admin has been updated"
        icon={<FiCheckCircle style={{ fontSize: '70px', color: 'var(--success-600)' }}/>}/>
    </div>
  )
}

export default EditPermissionSaved
