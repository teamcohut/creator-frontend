import { useState } from "react";
import SettingsStatusCard from "./SettingsStatusCard";
import { FiAlertCircle } from "react-icons/fi";
import TextInput from "../../../atoms/inputs/TextInput";
import OutlineButton from "../../../atoms/Button/OutlineButton";

const ConfirmAdminRemoval = () => {
  const [activeButton, setActiveButton] = useState(""); 
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
        title="Confirm Removal"
        description="Are you sure you want to remove this Admin? You will not be able to undo this action."
        width={70}
        icon={<FiAlertCircle style={{ fontSize: "70px", color: "var(--warning-500)" }} />}
      >
        <form>
          <div style={{ textAlign: "start", fontSize: "fs-body"}}>

          <TextInput
            id="removal-reason"
            label="Reason for Removal (Optional)"
            placeHolder="E.g. Termination of Contract"
          />
          </div>
          <div className="d-flex gap-4 pt-4" >
            {/* Remove Admin Button */}
            <OutlineButton
              type="button"
              fill={activeButton === "remove"}
              outline="primary"
              width={155}
              border={true}
              action={() => setActiveButton("remove")}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              <span> Remove Admin </span>
            </OutlineButton>

            {/* Cancel Button */}
            <OutlineButton
              type="button"
              fill={activeButton === "cancel"}
              width={150}
              outline="primary"
              border={true}
              action={() => setActiveButton("cancel")}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            >
              Cancel
            </OutlineButton>
          </div>
        </form>
      </SettingsStatusCard>
    </div>
  );
};

export default ConfirmAdminRemoval;
