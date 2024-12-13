import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import Header from "../Header";
import { FiPlus } from "react-icons/fi";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import { generateCardData } from "./DashBoardCard";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import CalendarComponent from "../Calendar/Calendar";
import SetupCohortModal from "../modals/SetupCohortModal";
import SessionModal from "../modals/SessionModal";
import TaskModal from "../modals/TaskModal";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api/axios";

const DashBoard: FC<IDashboard> = () => {
  const { activeProgram, activeCohort } = useContext(ProgramContext);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["participants"],
    queryFn: () => api.participant.getParticipants(activeCohort._id),
    enabled: !!activeCohort._id,
  });

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const cardData = generateCardData(data?.data?.data);

  return (
    <>
      <div>
        <Header
          title={`${getGreeting()} Admin,`}
          subtitle="A Cohort is a group of individuals learning together through a shared program over a set period"
        >
          {activeProgram.cohorts?.length > 0 ? (
            <div className="d-flex gap-4">
              <Button
                action={() => setModal({ open: true, name: "task" })}
                fill={false}
                type="button"
                border
                outline="primary"
              >
                <FiPlus className="fs-body" /> Add Task
              </Button>
              <Button
                action={() =>
                  setModal((prev) => ({ open: true, name: "session" }))
                }
                fill
                type="button"
                border={false}
              >
                <FiPlus className="fs-body" /> Create New Session
              </Button>
            </div>
          ) : (
            <Button
              action={() => setModal((prev) => ({ ...prev, name: "cohort" }))}
              fill
              gap
              type="button"
              border={false}
            >
              <FiPlus className="fs-body" />
              Onboard Your First Cohort
            </Button>
          )}
        </Header>

        <div className="overview-container d-flex">
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading data</p>
          ) : (
            cardData.map((card, index) => <OverviewCard key={index} {...card} />)
          )}
        </div>

        <CalendarComponent />
      </div>

      {modal.name === "cohort" && (
        <SetupCohortModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}

      {modal.name === "session" && (
        <SessionModal modalOpen={modal.open} setModalOpen={setModalOpenState} />
      )}

      {modal.name === "task" && (
        <TaskModal modalOpen={modal.open} setModalOpen={setModalOpenState} />
      )}
    </>
  );
};

interface IDashboard { }

export default DashBoard;
