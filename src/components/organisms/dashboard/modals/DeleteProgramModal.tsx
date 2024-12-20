import { FC, useState } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import DangerDeleteProgram from "../../forms/Settings/DangerDeleteProgram";

const DeleteProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "deleteProgram")}
      >
        {currentStep === 1 ? (
          <DangerDeleteProgram
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

export default DeleteProgramModal;
