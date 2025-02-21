import { FC, useState } from "react";
import Button from "../../../atoms/Button";
import PasswordInput from "../../../atoms/inputs/PasswordInput";
import { FiX } from "react-icons/fi";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import api from "../../../../api/axios";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

const ChangePassword: FC<ISetupModal> = ({
  modalOpen,
  setModalOpen,
  setCurrentStep,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleClose = () => {
    setModalOpen(false, null);
  };

  const changePasswordMutation = useMutation({
    mutationFn: (payload: any) => api.auth.changePassword(payload),
    onSuccess: (data: any) => {
      notification.success({ message: data.data.message });
      setCurrentStep?.(2);
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (oldPassword === "") {
      notification.info({
        message: "Enter old password",
        placement: "top",
      });
      return;
    }
    if (newPassword === "") {
      notification.info({
        message: "Enter new password",
        placement: "top",
      });
      return;
    }
    changePasswordMutation.mutate({
      oldPassword,
      newPassword,
    });
  };

  return (
    <div className="modal-container">
      <form
        className="form bg-white d-flex flex-column rounded-5 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-between">
          <h1 className="manrope-600 primary-950 fs-h2">Change Password</h1>
          <button onClick={handleClose} className="border-none bg-transparent">
            <FiX className="fs-h3" />
          </button>
        </div>

        <div className="d-flex flex-column gap-4">
          <PasswordInput
            valid={true}
            id="old-password"
            placeHolder="password"
            label="Old Password"
            onchange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <PasswordInput
            showStrength={true}
            valid={true}
            id="new-password"
            placeHolder="password"
            label="New Password"
            onchange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        {/* Change Password Button */}
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <Button
            children="Change Password"
            action={() => {}}
            type="submit"
            fill={true}
            loading={changePasswordMutation.isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
