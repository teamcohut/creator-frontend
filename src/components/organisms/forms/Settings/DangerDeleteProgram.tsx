import { useState } from 'react';
import SettingsStatusCard from './SettingsStatusCard';
import { FiAlertCircle } from 'react-icons/fi';
import OutlineButton from '../../../atoms/Button/OutlineButton';
import Button from '../../../atoms/Button';

const DangerDeleteProgram = () => {
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
        description="Are you sure you want to delete this program?"
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--error-500)" }} />}
      >
        <span className='manrope-500 dark-700 fs-body w-100'>
        Once deleted, your program and all its associated data (including cohorts, participants, and progress) will be permanently removed.
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

              <span className={isHovered ? 'white' : 'error-500'}> Delete Program </span>
              
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
      </SettingsStatusCard>
    </div>
  );
}

export default DangerDeleteProgram
