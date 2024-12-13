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
        setModalOpen={(open: boolean) => setModalOpen(open, "changePasswordModal")}
      >
        {currentStep === 1 ? <ChangePassword /> :
          currentStep === 2 ? <ChangePasswordSuccess /> : null}
        {/* currentStep === 2 ? (
                    <AdditionalSession
                        initialData={formData}
                        onSuccess={handleSuccess}
                    // onError={handleError}
                    />
                ) : null} */}
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
