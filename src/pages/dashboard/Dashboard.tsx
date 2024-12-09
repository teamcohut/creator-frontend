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
import { useGetCohorts } from "../../hooks/program/useGetCohorts";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const { activeProgram } = useContext(ProgramContext);

  // const { getProgram, error, isLoading } = useGetProgram();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["programs"],
    queryFn: () => api.program.getPrograms(),
  });

  // console.log("programs", programs.data);
  useEffect(() => {
    // getProgram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (activeProgram) {
  //     getCohorts();
  //   }
  // }, [activeProgram]);

  const openModal = (modal: TModal) => {
    setActiveModal(modal);
    setModalOpen(true);
  };

  if (isPending) {
    return <Skeleton loading />;
  }

  if (isError) {
    return (
      <div>
        <h3>Err...</h3>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <>Hello</>
      {/* {data?.data ? (
        <DashBoard openModal={openModal} />
      ) : (
        <SetupProgram openModal={openModal} />
      )} */}

      {activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      {activeModal === "cohort" && (
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      {activeModal === "session" && (
        <SessionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default Dashboard;
