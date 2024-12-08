import { useContext, useEffect, useState } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useGetProgram } from "../../hooks/program/useGetProgram";
import { TModal } from "../../@types/dashboard.interface";
import SetupProgramModal from "../../components/organisms/dashboard/modals/SetupProgramModal";
import SetupCohortModal from "../../components/organisms/dashboard/modals/SetupCohortModal";
import SessionModal from "../../components/organisms/dashboard/modals/SessionModal";
import { Skeleton } from "antd";

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { activeProgram } = useContext(ProgramContext)
  const { getProgram, error, isLoading } = useGetProgram()

  useEffect(() => {
    getProgram()
  }, [])


  const openModal = (modal: TModal) => {
    setActiveModal(modal)
    setModalOpen(true)
  };

  if (isLoading) {
    return (
      <Skeleton loading />
    )
  }

  if (error) {
    return (
      <div>
          <div>
            <h3>Err...</h3>
            <p>Something went wrong ...</p>
          </div>
        <Skeleton loading avatar active paragraph title />
      </div>
    )
  }

  return (
    <>

      {
        activeProgram ?
          <DashBoard openModal={openModal} /> :
          <SetupProgram
            openModal={openModal}
          />
      }

      {
        activeModal === 'program' &&
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      }

      {
        activeModal === 'cohort' &&
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      }

      {
        activeModal === 'session' &&
        <SessionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      }

    </>
  );
};

export default Dashboard;

