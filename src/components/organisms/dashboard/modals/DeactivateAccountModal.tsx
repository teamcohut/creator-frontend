import { useState, FC } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import DangerDeleteAccount from "../../forms/Settings/DangerDeleteAccount";

const DeactivateAccountModal: FC<ISetupModal> = ({
  modalOpen,
  setModalOpen,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) =>
          setModalOpen(open, "deactivateAccountModal")
        }
      >
        {currentStep === 1 ? (
          <DangerDeleteAccount
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setCurrentStep={setCurrentStep}
          />
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default DeactivateAccountModal;
