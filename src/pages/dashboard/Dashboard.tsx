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
        program?.data.length > 0 ?
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

