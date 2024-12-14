import { FC, useState } from 'react';
import Button from '../../../atoms/Button';
import PasswordInput from '../../../atoms/inputs/PasswordInput';
import { FiX } from 'react-icons/fi';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import { useNavigate } from 'react-router-dom';
import api from '../../../../api/axios';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

const ChangePassword: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const handleClose = () => {
    setModalOpen(false, '');
  };

  const navigate = useNavigate()

  const changePasswordMutation = useMutation({
    mutationFn: (payload: any) => api.auth.changePassword(payload),
    onSuccess: (data: any) => {
      notification.success({message: data.data.message})
      localStorage.removeItem("user");
      navigate("/login")
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

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
          <PasswordInput valid={true} id="old-password" placeHolder="password" label="Old Password" onchange={(e) => {setOldPassword(e.target.value)}} />
          <PasswordInput showStrength={true} valid={true} id="new-password" placeHolder="password" label="New Password" onchange={(e) => {setNewPassword(e.target.value)}} />
          {/* <PasswordInput id="confirm-password" placeHolder="password" label="Confirm Password" onchange={() => {}} /> */}
        </div>

        {/* Change Password Button */}
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <Button
            children="Change Password"
            action={() => {changePasswordMutation.mutate({
              oldPassword,
              newPassword
            })}}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
