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
import Modal from "../../components/organisms/dashboard/Modal/Modal";
import ProgramDetail from "../../components/organisms/forms/CustomizeProgram/programdetails";
import CustomizeProgram from "../../components/organisms/forms/CustomizeProgram/CustomizeProgram";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0); // Step-based state
  const { user } = useContext(AuthContext);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Step-based component rendering
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <SetupProgram
            openModal={() => {
              openModal();
              setCurrentStep(1); // Move to the next step
            }}
          />
        );
      case 1:
        return (
          <Modal open={modalOpen}>
            <ProgramDetail
              onContinue={() => {
                closeModal();
                setCurrentStep(2);
              }}
            />
          </Modal>
        );
      case 2:
        return <CustomizeProgram />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <>
      <>
        {/* <DashBoard /> */}

        {renderStep()}
        {/* <SetupProgram openModal={openModal} /> */}
        {/* <Modal open={modalOpen}> */}
        {/* <button onClick={closeModal} className="close-btn">Close</button> */}
        {/* <ProgramDetail /> */}
        {/* </Modal> */}
      </>









      {

        /* <Header
          title="Good morning Evergreen,"
          subtitle={`Here’s an overview of your program, My First Bootcamp`}
        >
          <Button action={() => {}} fill gap type="button">
            <FiPlus />
            Create New
            <FiChevronDown />
          </Button>
          <Button action={() => {}} fill={false} border={false} type="button">
            <FiDownload className="fs-h3" />
          </Button>
        </Header>
        <Overview />
        <div className="w-100 d-flex gap-5 align-items-start">
          <div className="dashboard-section1">
            <CourseDisplay />
          </div>
          <div className="dashboard-section2 d-flex flex-column">
            <RecentActivity />
            <DeadlineDisplay />
          </div>
        </div> */}
    </>
  );
};

export default Dashboard;
