import { FC, useContext, useState } from "react";
import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
import Congratulations from "../../../molecules/dashboard/Congratulations";
import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
import { notification } from "antd";
import { ProgramContext } from "../../../../context/programs/ProgramContext";

const SetupProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [api, contextHolder] = notification.useNotification()
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [programData, setProgramData] = useState<ProgramData>({
    title: "",
    description: "",
    cover: null,
    logo: null,
    format: "",
    communities: [],
    certificates: [],
  });
  const { dispatch } = useContext(ProgramContext);

  const closeModal = () => {
    resetState()
    setModalOpen(false, null)
  }

  const openModal = (modal: TModal) => {
    resetState()
    setModalOpen(true, modal);
  };

  // Helper function to reset state
  const resetState = () => {
    setModalOpen(false, null);
    successful && dispatch({ type: "ACTIVE_PROGRAM", payload: programData });
    setProgramData({
      title: "",
      description: "",
      cover: null,
      logo: null,
      format: "",
      communities: [],
      certificates: [],
    });
    setSuccessful(false)
    setCurrentStep(0);
    api.success({
      message: "Program setup successfully",
    })
  };

  const handleProgramDetailContinue = (data: {
    title: string;
    description: string;
    format: string;
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
        {
          currentStep === 1 ?
            <ProgramDetail programData={programData} onContinue={handleProgramDetailContinue} closeModal={closeModal} /> :
          currentStep === 2 ?
            <CustomizeProgram
              programData={programData}
              setProgramData={setProgramData}
              setCurrentStep={setCurrentStep}
              setSuccessful={setSuccessful}
              closeModal={resetState}
              prevStep={prevStep}
            /> :
          currentStep === 3 ?
            <Congratulations clear={resetState} openModal={openModal} /> :
            <></> 
        }

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
