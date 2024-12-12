import React from "react";
import { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import { FiEdit3, FiMail, FiTrash2, FiUser } from "react-icons/fi";
import Button from "../../../components/atoms/Button";

const AccountSettings = () => {
  return (
    <>
      <div className="d-flex gap-133 align-items-start">
        <div className="d-flex flex-column w-60 gap-4">
          <div className="d-flex gap-4 ">
            <TextInput2 id="" label="First Name" icon={<FiUser/>} />
            <TextInput2 id="" label="Last Name" icon={<FiUser/>} />
          </div>
          <TextInput2 id="" label="Email" icon={<FiMail/>} />

          <Button action={()=>{}} type="button" fill={false} outline='primary' gap={true} width={200} border={true}>
          <FiEdit3/>
          <span>Change Password</span>
        </Button>
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
