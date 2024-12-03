import React, { useContext, useEffect, useState } from "react";
// import Button from "../../components/atoms/Button";
// import { FiChevronDown, FiDownload, FiPlus } from "react-icons/fi";
// import CourseDisplay from "../../components/organisms/dashboard/CourseDisplay";
// import DeadlineDisplay from "../../components/organisms/dashboard/upcomingDeadline/DeadlineDisplay";
// import RecentActivity from "../../components/organisms/dashboard/RecentActivity";
// import Overview from "../../components/organisms/dashboard/Overview";
// import Header from "../../components/organisms/dashboard/Header";
// import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import { AuthContext } from "../../context/auth/AuthContext";
import Modal from "../../components/organisms/dashboard/Modal";
import ProgramDetail from "../../components/organisms/forms/CustomizeProgram/programdetails";
import CustomizeProgram from "../../components/organisms/forms/CustomizeProgram/CustomizeProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<TActiveModal>(null);
  const [currentStep, setCurrentStep] = useState<number>(0); // Step-based state
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
          setActiveModal('program')
        }}
      />

      {
        activeModal === 'program'?
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
        </Modal>:
        activeModal === 'cohort'?
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
        </Modal>:
        <></>
      }
    </>
  );
};

type TActiveModal = "program" | "cohort" | null

export default Dashboard;
