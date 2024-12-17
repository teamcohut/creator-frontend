import { FC } from 'react';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import SettingsStatusCard from './SettingsStatusCard'
import { FiUserPlus } from 'react-icons/fi';

const AddAdminSuccess: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh"}}>
      <SettingsStatusCard title="New Admin Added!" 
        description="You have successfully added a new program admin"
        icon={<FiUserPlus style={{ fontSize: '70px', color: 'var(--success-600)' }}/>}/>
    </div>
  )
}

export default AddAdminSuccess
