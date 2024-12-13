import { useState } from "react";
import { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import {FiSave, FiTrash2, FiUser } from "react-icons/fi";
import EmailInput from "../../../components/atoms/inputs/EmailInput";
import OutlineButton from "../../../components/atoms/Button/OutlineButton";
import DeactivateAccountModal from "../../../components/organisms/dashboard/modals/DeactivateAccountModal";

const AccountSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered
    ? {
        color: "var(--primary-800) !important",
        borderColor: "var(--primary-800) !important",
      }
    : {};

  return (
    <>
      <div className="d-flex gap-133 align-items-start">
        <div className="d-flex flex-column w-60 gap-4">
          <div className="d-flex gap-4 ">
            <TextInput2
              id="first_name"
              label="First Name"
              placeHolder="First Name"
              icon={<FiUser className="dark-300" />}
            />
            <TextInput2
              id="first_name"
              label="Last Name"
              placeHolder="Last Name"
              icon={<FiUser className="dark-300" />}
            />
          </div>
          <EmailInput
            id=""
            label="Email"
            placeholder="Email"
            onchange={() => {}}
          />

          <OutlineButton
            action={() => {}}
            type="button"
            fill={false}
            outline="primary"
            gap={true}
            width={120}
            border={true}
            customStyle={hoverStyle}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          >
            <FiSave />
            <span>Save</span>
          </OutlineButton>
        </div>
        <div>
          <div>
            <h3 className="manrope-600 fs-h4 primary-950 pb-1">Role</h3>
            <p className="manrope-500 fs-body dark-700 pb-4">Owner</p>
          </div>

          <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
          <span style={{cursor: "pointer"}}className="d-flex align-items-center gap-1 manrope-700 fs-body error-300"
            onClick={() => setModal((prev) => ({ open: true, name: "deactivateAccountModal" }))}>
              Deactivate Account <FiTrash2 />
          </span>
        
        </div>
      </div>
      {modal.name === "deactivateAccountModal" && (
        <DeactivateAccountModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default AccountSettings;
