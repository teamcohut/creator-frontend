import { useContext, useEffect, useState } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useGetProgram } from "../../hooks/program/useGetProgram";
import { TModal } from "../../@types/dashboard.interface";
import SetupProgramModal from "../../components/organisms/dashboard/modals/SetupProgramModal";
import SetupCohortModal from "../../components/organisms/dashboard/modals/SetupCohortModal";

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { program } = useContext(ProgramContext)
  const { getProgram, error, isLoading } = useGetProgram()

  useEffect(() => {
    getProgram()
  }, [])


  const openModal = (modal: TModal) => {
    setActiveModal(modal)
    setModalOpen(true)
  };

  const closeModal = () => {
    setActiveModal(null)
    setModalOpen(false)
  }

  return (
    <>

      {
        program?.length > 0 ?
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

    </>
  );
};

export default Dashboard;

