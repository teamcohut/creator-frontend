import { FC, useState } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import ChangePassword from "../../forms/Settings/ChangePassword";
import ChangePasswordSuccess from "../../forms/Settings/ChangePasswordSuccess";

const ChangePasswordModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "changepassword")}
      >
        {currentStep === 1 ? (
          <ChangePassword
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setCurrentStep={setCurrentStep}
          />
        ) : currentStep === 2 ? (
          <ChangePasswordSuccess modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        ) : null}
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
