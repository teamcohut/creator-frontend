import { FC, useContext, useState } from "react";
import { FiUser, FiBookOpen } from "react-icons/fi";
import Button from "../../../atoms/Button";
import "./SetupProgram.css";
import { ISetupProgram, TModal } from "../../../../@types/dashboard.interface";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { AuthContext } from "../../../../context/auth/AuthContext";

const SetupCohort: FC<ISetupProgram> = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { activeProgram } = useContext(ProgramContext);

  const openModalHandler = (open: boolean, modal: TModal) => {
    setActiveModal(modal);
    setModalOpen(open);
  };
  // const user = JSON.parse(localStorage.getItem("user") || "Admin")
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="setup-program-container d-flex align-items-center justify-content-center">
        <div className="gap-2">

        <h3 className="manrope-600">Welcome {user?.firstName}</h3>
        <div className="icon-container">
          <FiUser className="icon-left" />
          <h2 className="manrope-600 fs-h3">
            {!activeProgram?.id
              ? "Setup Your Program to Onboard your First Cohort"
              : "Onboard your First Cohort"}
          </h2>
          <FiBookOpen className="icon-right" />
        </div>
        <p className="manrope-500 dark-300 fs-body">
          You do not have a cohort onboarded
        </p>
        <div>
          {!activeProgram?.id ? (
            <Button
              children="Setup Your Program"
              type="button"
              action={() => openModalHandler(true, "program")}
              fill={true}
            />
          ) : (
            <Button
              children="Onboard your First Cohort"
              type="button"
              action={() => openModalHandler(true, "cohort")}
              fill={true}
            />
          )}
        </div>
        </div>
      </div>

      {activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {activeModal === "cohort" && (
        <SetupCohortModal
          modalOpen={modalOpen}
          setModalOpen={openModalHandler}
        />
      )}
    </>
  );
};

export default SetupCohort;
