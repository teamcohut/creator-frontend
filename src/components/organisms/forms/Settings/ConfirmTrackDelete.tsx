import { useState } from 'react';
import SettingsStatusCard from './SettingsStatusCard';
import { FiAlertCircle } from 'react-icons/fi';
import Button from '../../../atoms/Button';
import OutlineButton from '../../../atoms/Button/OutlineButton';

const ConfirmTrackDelete = () => {
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
        title="Confirm"
        description="Are you sure you want to delete this track?"
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--warning-500)" }} />}
      >
        <span className='manrope-500 dark-700 fs-body'>Deleting a track will delete all track participants.</span>
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

            {/* Transfer Ownership Button */}
            <div className='d-flex gap-4'>

            <OutlineButton
              type="button"
              fill={false}
              outline="primary-700"
              width={184}
              border={true}
              action={() => {}}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              <span> Delete Track </span>
            </OutlineButton>

            {/* Cancel Button */}
            <Button
              type="button"
              fill={true}
              width={184}
              outline="primary"
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

export default ConfirmTrackDelete
