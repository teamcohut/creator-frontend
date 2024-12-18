import { FC, useState } from "react";
import SettingsStatusCard from "./SettingsStatusCard";
import { FiAlertCircle } from "react-icons/fi";
import OutlineButton from "../../../atoms/Button/OutlineButton";
import Button from "../../../atoms/Button";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ISetupModal } from "../../../../@types/dashboard.interface";

const DangerDeleteAccount: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => {
    setModalOpen(false, null);
  };
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered
    ? {
        color: "var(--primary-800) !important",
        borderColor: "var(--primary-800) !important",
      }
    : {};

  const deactivateAccountMutation = useMutation({
    mutationFn: () => api.user.deactivate(),
    onSuccess: (data: any) => {
      notification.success({ message: data.data.message });
      localStorage.removeItem("authToken");
      navigate("/login");
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <SettingsStatusCard
        title="Danger!"
        description="Are you sure want to deactivate your account?"
        icon={
          <FiAlertCircle
            style={{ fontSize: "70px", color: "var(--error-500)" }}
          />
        }
      >
        <span className="manrope-500 dark-700 fs-body">
          Once deactivated, you will lose access to all your progress and
          programs associated with your account
        </span>
        <div style={{ textAlign: "start", fontSize: "fs-body" }}>
          {/* Transfer Ownership Button */}
          <div className="d-flex gap-4">
            <OutlineButton
              type="button"
              fill={false}
              outline="outlineColor"
              outlineColor="error-500"
              width={184}
              border={true}
              action={() => deactivateAccountMutation.mutate()}
              loading={deactivateAccountMutation.isPending}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              <span className={isHovered ? "white" : "error-500"}>
                {" "}
                Deactivate Account{" "}
              </span>
            </OutlineButton>

            {/* Cancel Button */}
            <Button
              type="button"
              fill={true}
              width={184}
              border={true}
              action={() => {
                handleClose();
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
        <p className="manrope-500 dark-700 fs-body">
          If you'd like to reactivate your account later, please contact our
          support team at
          <span className="primary-700 manrope-500"> help@cohut.co</span>
        </p>
      </SettingsStatusCard>
    </div>
  );
};

export default DangerDeleteAccount;
