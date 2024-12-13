import { FiTrash } from 'react-icons/fi'
import SettingsStatusCard from './SettingsStatusCard'

const RemoveParticipantSuccess = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Removal Successful" 
        description=""
        icon={<FiTrash style={{ fontSize: '70px', color: 'var(--warning-500)' }}/>}> 
        <p className='dark-700 manrope-500'>
          <span className='primary-700 fs-body manrope-500'>jame4life@gmail.com
            </span> is no longer an Admin</p>
        </SettingsStatusCard>
    </div>
  )
}

export default RemoveParticipantSuccess
