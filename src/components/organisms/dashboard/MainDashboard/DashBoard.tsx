import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import Header from "../Header";
import { FiPlus } from "react-icons/fi";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import { cardData } from "./DashBoardCard";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { TModal } from "../../../../@types/dashboard.interface";
import CalendarComponent from "../Calendar/Calendar";
import SetupCohortModal from "../modals/SetupCohortModal";
import SessionModal from "../modals/SessionModal";

const DashBoard: FC<IDashboard> = () => {
  const { activeProgram } = useContext(ProgramContext);
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = (modal: TModal) => {
    setActiveModal(modal);
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <Header
          title="Good morning Admin,"
          subtitle="A Cohort is a group of individuals leanring together through a shared program over a set period"
        >
          {activeProgram.cohorts.length > 0 ? (
            <div className="d-flex gap-4">
              <Button
                action={() => {}}
                fill={false}
                type="button"
                border
                outline="primary"
              >
                <FiPlus className="fs-body" /> Add Task
              </Button>
              <Button
                action={() => openModal("session")}
                fill
                type="button"
                border={false}
              >
                <FiPlus className="fs-body" /> Create New Session
              </Button>
            </div>
          ) : (
            <Button
              action={() => openModal("cohort")}
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

      {activeModal === "cohort" && (
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      {activeModal === "session" && (
        <SessionModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

interface IDashboard {}

export default DashBoard;
