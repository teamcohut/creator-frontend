import { FC } from 'react';
import Button from '../../../atoms/Button';
import PasswordInput from '../../../atoms/inputs/PasswordInput';
import { FiX } from 'react-icons/fi';
import { ISetupModal } from '../../../../@types/dashboard.interface';

const ChangePassword: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false, '');
  };

  return (
    <div className="modal-container">
      <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
        <div className="d-flex justify-content-between">
          <h1 className="manrope-600 primary-950 fs-h2">Change Password</h1>
          <FiX
            style={{ fontSize: '24px', cursor: 'pointer' }}
            onClick={handleClose} 
          />
        </div>

        <div className="d-flex flex-column gap-4">
          <PasswordInput id="old-password" placeHolder="password" label="Old Password" onchange={() => {}} />
          <PasswordInput id="new-password" placeHolder="password" label="New Password" onchange={() => {}} />
          <PasswordInput id="confirm-password" placeHolder="password" label="Confirm Password" onchange={() => {}} />
        </div>

        {/* Change Password Button */}
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <Button
            children="Change Password"
            action={() => {}}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
