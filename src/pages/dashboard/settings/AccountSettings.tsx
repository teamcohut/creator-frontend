import React, { useState } from "react";
import TextInput, { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import { FiEdit, FiEdit3, FiMail, FiTrash2, FiUser } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
import Header from "../../../components/organisms/dashboard/Header";
import EmailInput from "../../../components/atoms/inputs/EmailInput";
import OutlineButton from "../../../components/atoms/Button/OutlineButton";

const AccountSettings = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
  return (
    <>
      <div className="d-flex gap-133 align-items-start">
        <div className="d-flex flex-column w-60 gap-4">
          <div className="d-flex gap-4 ">
            <TextInput2 id="" label="First Name" icon={<FiUser className="dark-300"/>} />
            <TextInput2 id="" label="Last Name" icon={<FiUser className="dark-300"/>} />
          </div>
          <EmailInput id="" label="Email" placeholder="Email" onchange={() => {}} />

          <OutlineButton 
            action={()=>{}} 
            type="button" 
            fill={false} 
            outline='primary' 
            gap={true} width={200} 
            border={true}
            customStyle={hoverStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}>
          <FiEdit3/>
          <span>Change Password</span>
        </OutlineButton>
        </div>
        <div>
        <div>
          <h3 className="manrope-600 fs-h4 primary-950 pb-1">Role</h3>
          <p className="manrope-500 fs-body dark-700 pb-4">Owner</p>
        </div>

      
          <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
          <span className="d-flex align-items-center gap-1 manrope-700 fs-body error-300">Deactivate Account <FiTrash2 /></span>
        
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
