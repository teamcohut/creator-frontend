import SettingsStatusCard from './SettingsStatusCard'
import { FiUsers } from 'react-icons/fi'

const OwnerTransferSuccess = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="Transfer Successful!" 
        description="You have successfully transferred ownership to this Admin"
        icon={<FiUsers style={{ fontSize: '70px', color: 'var(--success-600)' }}/>}/>
    </div>
  )
}

export default OwnerTransferSuccess
