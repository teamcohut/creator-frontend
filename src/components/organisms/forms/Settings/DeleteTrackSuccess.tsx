import React from 'react'
import SettingsStatusCard from './SettingsStatusCard'
import { FiTrash } from 'react-icons/fi'

const DeleteTrackSuccess = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Delete Successful" 
        description="You have successfully deleted this this track"
        icon={<FiTrash style={{ fontSize: '70px', color: 'var(--warning-500)' }}/>}/>
    </div>
  )
}

export default DeleteTrackSuccess
