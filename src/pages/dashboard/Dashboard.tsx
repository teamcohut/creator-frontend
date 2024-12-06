import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import Modal from "../../components/organisms/dashboard/Modal";
import ProgramDetail from "../../components/organisms/forms/CustomizeProgram/programdetails";
import CustomizeProgram from "../../components/organisms/forms/CustomizeProgram/CustomizeProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { axiosPrivate } from "../../../src/api/axios";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useGetProgram } from "../../hooks/program/useGetProgram";
import Congratulations from "../../components/molecules/dashboard/Congratulations";
import OnboardCohortModal from "../../components/organisms/forms/Onboard/OnboardCohortModal";
import UploadParticipants from "../../components/organisms/forms/Onboard/UploadParticipants";
import SendEmail from "../../components/organisms/forms/Onboard/SendEmail";
import { TModal } from "../../@types/dashboard.interface";

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
  const [activeModal, setActiveModal] = useState<TModal>(null)
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
  const { program } = useContext(ProgramContext)
  const { getProgram, error, isLoading } = useGetProgram()

  useEffect(() => {
    getProgram()
  }, [])
  


  const openModal = (modal: TModal) => {
    setCurrentStep(1)
    setActiveModal(modal)
    setModalOpen(true)
  };

  const handleProgramDetailContinue = (data: { title: string; description: string }) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };


  const handleProgramSubmit = async () => {
    try {
      const payload = {
        ...programData,
        cover: programData.cover ? await fileToBase64(programData.cover) : "https://www.shutterstock.com/image-photo/group-workers-people-isolated-on-white-221842699",
        logo: programData.logo ? await fileToBase64(programData.logo) : "https://media.gettyimages.com/id/1397998210/vector/stock-market.jpg?s=612x612&w=0&k=20&c=USOZhCCA9PuJa7ffVr5w6r2NLyuCIYet0rm4v3SIT1I=",
      };
      console.log(payload);
      

      const response = await axiosPrivate.post("/program", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Program created:", response.data);
      alert("Program successfully created!");

      // Reset state and close modal
      // resetState();
      setCurrentStep(3)
    } catch (error) {
      console.error("Error submitting program:", error);
      alert("Failed to create the program. Please try again.");
    }
  };

  // Helper function to convert File to Base64
  const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // Helper function to reset state
  const resetState = () => {
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
  };

  const nextStep = () => {
    setCurrentStep(currentStep+1)
  }

  const updateProgramData = (data: Partial<ProgramData>) => {
    setProgramData((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
    {
      program?.data.length > 0?
      <DashBoard openModal={openModal} />:
      <SetupProgram
        openModal={() => {
          openModal('program');
          setCurrentStep(1);
        }}
      />
    }
      

      {
        activeModal === 'program' &&
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
          {
            currentStep === 3 && (
              <Congratulations clear={resetState} openModal={openModal} />
            )
          }
        </Modal>
      }

      {
        activeModal === 'cohort' &&
        <Modal open={modalOpen} setModalOpen={setModalOpen} >
                {
                    currentStep === 1 ?
                    <OnboardCohortModal onSubmit={nextStep} />:
                    currentStep === 2?
                    <UploadParticipants onSubmit={nextStep} />:
                    currentStep === 3?
                    <SendEmail onSubmit={()=>{
                        setCurrentStep(1)
                        setModalOpen(false)
                    }} />:
                    <></>
                }
            </Modal>
      }

      
    </>
  );
};

export default Dashboard;

