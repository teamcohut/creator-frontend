import React, { useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi';
import SettingsStatusCard from './SettingsStatusCard';
import OutlineButton from '../../../atoms/Button/OutlineButton';
import Button from '../../../atoms/Button';

const ConfirmOwnerTransfer = () => {
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
        description="Are you sure you want to transfer ownership to this admin?
You will not be able to undo this action."
        width={85}
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--warning-500)" }} />}
      >
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

            {/* Transfer Ownership Button */}
            <div className='d-flex gap-4'>

            <Button
              type="button"
              fill={true}
              outline="primary"
              width={184}
              border={true}
              action={() => {}}
            >
              <span> Transfer Ownership </span>
            </Button>

            {/* Cancel Button */}
            <OutlineButton
              type="button"
              fill={false}
              width={184}
              outline="primary"
              border={true}
              action={() => {}}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              Cancel
            </OutlineButton>
            </div>
          </div>
      </SettingsStatusCard>
    </div>
  );
}

export default ConfirmOwnerTransfer
