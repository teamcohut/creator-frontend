import { FC, useState } from "react";
import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
import Congratulations from "../../../molecules/dashboard/Congratulations";
import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
import { axiosPrivate } from "../../../../api/axios";
import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
import { useGetProgram } from "../../../../hooks/program/useGetProgram";
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
  const { getProgram } = useGetProgram();

  const updateProgramData = (data: Partial<ProgramData>) => {
    setProgramData((prev) => ({ ...prev, ...data }));
  };

  // Helper function to convert File to Base64
  const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
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

  const handleProgramSubmit = async () => {
    try {
      const payload = {
        ...programData,
        cover: programData.cover
          ? await fileToBase64(programData.cover)
          : "https://www.shutterstock.com/image-photo/group-workers-people-isolated-on-white-221842699",
        logo: programData.logo
          ? await fileToBase64(programData.logo)
          : "https://media.gettyimages.com/id/1397998210/vector/stock-market.jpg?s=612x612&w=0&k=20&c=USOZhCCA9PuJa7ffVr5w6r2NLyuCIYet0rm4v3SIT1I=",
      };
      console.log(payload);

      const response = await axiosPrivate.post("/program", payload);

      console.log("Program created:", response.data);
      getProgram();

      setCurrentStep(3);
    } catch (error) {
      console.error("Error submitting program:", error);
      alert("Failed to create the program. Please try again.");
    }
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
            onSubmit={handleProgramSubmit}
            updateProgramData={updateProgramData}
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
