import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import Header from "../Header";
import { FiPlus } from "react-icons/fi";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import { cardData } from "./DashBoardCard";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import CalendarComponent from "../Calendar/Calendar";
import SetupCohortModal from "../modals/SetupCohortModal";
import SessionModal from "../modals/SessionModal";
import TaskModal from "../modals/TaskModal";

const DashBoard: FC<IDashboard> = () => {
  const { activeProgram } = useContext(ProgramContext);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };

  return (
    <>
      <div>
        <Header
          title="Good morning Admin,"
          subtitle="A Cohort is a group of individuals learning together through a shared program over a set period"
        >
          {activeProgram.cohorts.length > 0 ? (
            <div className="d-flex gap-4">
              <Button
                action={() => 
                  setModal({ open: true, name: 'task' })
                }
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
          {cardData.map((card, index) => (
            <OverviewCard key={index} {...card} />
          ))}
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
