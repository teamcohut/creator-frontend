import { useState } from 'react';
import SettingsStatusCard from './SettingsStatusCard';
import { FiAlertCircle } from 'react-icons/fi';
import OutlineButton from '../../../atoms/Button/OutlineButton';
import Button from '../../../atoms/Button';

const DangerDeleteAccount = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};


  return (
    
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <SettingsStatusCard
        title="Danger!"
        description="Are you sure want to deactivate your account?"
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--error-500)" }} />}
      >
        <span className='manrope-500 dark-700 fs-body'>
        Once deactivated, you will lose access to all your progress and programs associated with your account
          </span>
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

            {/* Transfer Ownership Button */}
            <div className='d-flex gap-4'>

            <OutlineButton
              type="button"
              fill={false}
              outline = 'outlineColor'
              outlineColor = 'error-500'
              width={184}
              border={true}
              action={() => {}}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >

              <span className={isHovered ? 'white' : 'error-500'}> Delete Account </span>
              
            </OutlineButton>

            {/* Cancel Button */}
            <Button
              type="button"
              fill={true}
              width={184}
              border={true}
              action={() => {}}
              
            >
              Cancel
            </Button>
            </div>
            
          </div>
          <p className='manrope-500 dark-700 fs-body'>If you'd like to reactivate your account later, 
            please contact our support team at 
            <span className='primary-700 manrope-500'> help@cohut.co</span></p>
      </SettingsStatusCard>
    </div>
  );
}

export default DangerDeleteAccount
