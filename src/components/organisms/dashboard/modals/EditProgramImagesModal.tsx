import { FC, useState } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import EditProgramImages from "../../forms/Settings/EditProgramImages";

const EditProgramImagesModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);


  return (
    <>
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 && (
          <EditProgramImages
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setCurrentStep={setCurrentStep}
          />
        )}
      </Modal>
    </>
  );
};


export default EditProgramImagesModal;
