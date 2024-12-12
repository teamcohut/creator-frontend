import { FC, useState } from "react";
import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
import Congratulations from "../../../molecules/dashboard/Congratulations";
import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";

const SetupProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
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

  const openModal = (modal: TModal) => {
    setCurrentStep(1);
    // setActiveModal(modal)
    setModalOpen(true, "program");
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
  };

  const handleProgramDetailContinue = (data: {
    title: string;
    description: string;
  }) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  return (
    <>
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 && (
          <ProgramDetail onContinue={handleProgramDetailContinue} />
        )}
        {currentStep === 2 && (
          <CustomizeProgram
            programData={programData}
            setCurrentStep={setCurrentStep}
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
