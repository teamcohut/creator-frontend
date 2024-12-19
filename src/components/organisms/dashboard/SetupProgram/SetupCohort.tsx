import { FC, useContext, useState } from "react";
import { FiUsers } from "react-icons/fi";
import Button from "../../../atoms/Button";
import "./SetupProgram.css";
import { ISetupProgram, TModal } from "../../../../@types/dashboard.interface";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import Setup from "../../../molecules/dashboard/Setup";

const SetupCohort: FC<ISetupProgram> = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { activeProgram } = useContext(ProgramContext);

  const openModalHandler = (open: boolean, modal: TModal) => {
    setActiveModal(modal);
    setModalOpen(open);
  };
  
  

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="gap-2">

      <Setup 
        icon={<FiUsers color="#B0B0B0" size={48}/>}
        subtitle1="You do not have a cohort onboarded"
        title={!activeProgram?.id ? "Setup Your Program to Onboard your First Cohort": ""}
        /> 
  
        
        <div className="d-flex justify-content-center align-items-center">
          {!activeProgram?.id ? (
            <Button
              children="Setup Your Program"
              type="button"
              action={() => openModalHandler(true, "program")}
              fill={true}
              width={261}
            />
          ) : (
            <Button
              children="Onboard your First Cohort"
              type="button"
              action={() => openModalHandler(true, "cohort")}
              fill={true}
              width={261}
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
