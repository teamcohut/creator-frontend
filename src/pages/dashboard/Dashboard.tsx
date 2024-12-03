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

const Dashboard = () => {
  const [modalOpen, setmodalOpen] = useState<boolean>(false)
  const { user } = useContext(AuthContext)
  console.log(user);
  

  const openModal = () => {
    console.log(modalOpen);
    setmodalOpen(true)
    
  }

  return (
    <>
        {
          <>
          {/* <DashBoard /> */}
        
          <SetupProgram openModal={openModal} />

          <Modal open={modalOpen}>
            <ProgramDetail />
          </Modal>

          </>
        
        
        
        
        
        
        
        
        
        
        
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
