import React, { useContext, useState } from "react";
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

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0); // Step-based state
  const { user } = useContext(AuthContext);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false)
  };

  // Step-based component rendering
  // const renderStep = () => {
  //   switch (currentStep) {
  //     case 0:
  //       return (
  //         <SetupProgram
  //           openModal={() => {
  //             openModal();
  //             setCurrentStep(1); // Move to the next step
  //           }}
  //         />
  //       );
  //     case 1:
  //       return (
  //         <Modal open={modalOpen}>
  //           <ProgramDetail
  //             onContinue={() => {
  //               closeModal();
  //               setCurrentStep(2);
  //             }}
  //           />
  //         </Modal>
  //       );
  //     case 2:
  //       return (
  //         <Modal open={modalOpen}>
  //           <CustomizeProgram />
  //         </Modal>
  //       );
  //     default:
  //       return <div>Unknown step</div>;
  //   }
  // };

  return (
    <>
      {/* <DashBoard /> */}

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

      {/* {
          currentStep === 1?
          <Modal open={modalOpen} setModalOpen={setModalOpen}>
            <ProgramDetail
              onContinue={() => {
                setCurrentStep(2);
              }}
            />
          </Modal>:
          currentStep === 2?
          <Modal open={modalOpen} setModalOpen={setModalOpen}>
            <CustomizeProgram />
          </Modal>:
          <></>
        } */}
    </>
  );
};

export default Dashboard;
