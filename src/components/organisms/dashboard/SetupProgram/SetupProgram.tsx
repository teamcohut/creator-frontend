import  { FC, useState } from "react";
import { FiUser, FiBookOpen } from "react-icons/fi";
import Button from "../../../atoms/Button";
import "./SetupProgram.css";
import { ISetupProgram, TModal } from "../../../../@types/dashboard.interface";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";

const SetupProgram: FC<ISetupProgram> = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModalHandler = (open: boolean, modal: TModal) => {
    setActiveModal(modal);
    setModalOpen(open);
  };
  const user = JSON.parse(localStorage.getItem("user") || "Admin")

  return (
    <>
      <div className="setup-program-container gap-2">
        <h3 className="manrope-600">Welcome {user?.firstName}</h3>
        <div className="icon-container">
          <FiUser className="icon-left" />
          <h2 className="manrope-600">Setup Your Program</h2>
          <FiBookOpen className="icon-right" />
        </div>
        <p className="dark-700 manrope-600 fs-body">
          With Cohut, Create and Launch Your Program in 5 minutes. Start Today
        </p>
        <div>
          <Button
            children="Setup Your Program"
            type="button"
            action={()=>openModalHandler(true, 'program')}
            fill={true}
          />
        </div>
      </div>

      {activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {activeModal === "cohort" && (
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={openModalHandler} />
      )}
    </>
  );
};

export default SetupProgram;
