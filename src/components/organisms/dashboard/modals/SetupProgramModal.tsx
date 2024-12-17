import { FC, useState } from "react";
import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
import Congratulations from "../../../molecules/dashboard/Congratulations";
import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
import { notification } from "antd";

const SetupProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [api, contextHolder] = notification.useNotification()
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [programData, setProgramData] = useState<ProgramData>({
    title: "",
    description: "",
    cover: null,
    logo: null,
    format: "hybrid",
    communities: [],
    certificates: [],
  });

  const closeModal = () => {
    setModalOpen(false, '')
  }

  const openModal = (modal: TModal) => {
    // setCurrentStep(1);
    // setActiveModal(modal)
    setModalOpen(true, "cohort");
  };

  // Helper function to reset state
  const resetState = () => {
    setModalOpen(false, "");
    setProgramData({
      title: "",
      description: "",
      cover: null,
      logo: null,
      format: "hybrid",
      communities: [],
      certificates: [],
    });
    setCurrentStep(0);
    api.success({
      message: "Program setup successfully",
    })
  };

  const handleProgramDetailContinue = (data: {
    title: string;
    description: string;
  }) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const prevStep = (data: any) => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 && (
          <ProgramDetail onContinue={handleProgramDetailContinue} closeModal={closeModal} />
        )}
        {currentStep === 2 && (
          <CustomizeProgram
            programData={programData}
            setCurrentStep={setCurrentStep}
            closeModal={closeModal}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Congratulations clear={resetState} openModal={openModal} />
        )}
      </Modal>
    </>
  );
};

interface ProgramData {
  title: string;
  description: string;
  cover: File | null;
  logo: File | null;
  format: string;
  communities: string[];
  certificates: string[];
}

export default SetupProgramModal;
