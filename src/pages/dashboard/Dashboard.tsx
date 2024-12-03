import React, { useState } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import Modal from "../../components/organisms/dashboard/Modal";
import ProgramDetail from "../../components/organisms/forms/CustomizeProgram/programdetails";
import CustomizeProgram from "../../components/organisms/forms/CustomizeProgram/CustomizeProgram";
import axiosPublic from "../../../src/api/axios";

interface ProgramData {
  title: string;
  description: string;
  cover: File | null;
  logo: File | null;
  format: string;
  communities: string[];
  certificates: string[];
}

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [programData, setProgramData] = useState<ProgramData>({
    title: "",
    description: "",
    cover: null,
    logo: null,
    format: "hybrid",
    communities: [],
    certificates: [],
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleProgramDetailContinue = (data: { title: string; description: string }) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleProgramSubmit = async () => {
    try {
      const formData = new FormData();
      Object.keys(programData).forEach((key) => {
        const value = programData[key as keyof ProgramData];
        if (value !== null) {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value as any);
          }
        }
      });

      const response = await axiosPublic.post("/program", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Program created:", response.data);
      alert("Program successfully created!");

      // Reset state and close modal
      setModalOpen(false);
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
    } catch (error) {
      console.error("Error submitting program:", error);
      alert("Failed to create the program. Please try again.");
    }
  };

  const updateProgramData = (data: Partial<ProgramData>) => {
    setProgramData((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <SetupProgram
        openModal={() => {
          openModal();
          setCurrentStep(1);
        }}
      />

      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 && (
          <ProgramDetail onContinue={handleProgramDetailContinue} />
        )}
        {currentStep === 2 && (
          <CustomizeProgram
            programData={programData}
            onSubmit={handleProgramSubmit}
            updateProgramData={updateProgramData} // Pass the corrected prop
          />
        )}
      </Modal>
    </>
  );
};

export default Dashboard;
