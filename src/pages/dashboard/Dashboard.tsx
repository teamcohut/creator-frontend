import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import { AuthContext } from "../../context/auth/AuthContext";
import Modal from "../../components/organisms/dashboard/Modal";
import ProgramDetail from "../../components/organisms/forms/CustomizeProgram/programdetails";
import CustomizeProgram from "../../components/organisms/forms/CustomizeProgram/CustomizeProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    
  }, [])
  

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false)
  };

  return (
    <>
      <DashBoard />

      <SetupProgram
        openModal={() => {
          openModal();
          setCurrentStep(1);
        }}
      />

      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {
          currentStep === 1 ?
            <ProgramDetail
              onContinue={() => {
                setCurrentStep(2);
              }}
            /> :
          currentStep === 2 ?
            <CustomizeProgram /> :
            <></>
        }
      </Modal>
    </>
  );
};

export default Dashboard;
