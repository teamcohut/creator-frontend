import React, { FC, useState } from "react";
import { FiUser, FiBookOpen } from "react-icons/fi";
import Button from "../../../atoms/Button";
import "./SetupProgram.css";
import { ISetupProgram, TModal } from "../../../../@types/dashboard.interface";
import SetupProgramModal from "../modals/SetupProgramModal";

const SetupProgram: FC<ISetupProgram> = () => {
  const [activeModal, setActiveModal] = useState<TModal>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModalHandler = () => {
    setActiveModal("program");
    setModalOpen(true);
  };

  return (
    <>
      <div className="setup-program-container gap-2">
        <h3 className="manrope-600">Welcome Admin</h3>
        <div className="icon-container">
          <FiUser className="icon-left" />
          <h2 className="manrope-600">Setup Your Program</h2>
          <FiBookOpen className="icon-right" />
        </div>
        <p>
          With Cohut, Create and Launch Your Program in 5 minutes. Start Today
        </p>
        <div>
          <Button
            children="Setup Your Program"
            type="button"
            action={openModalHandler}
            fill={true}
          />
        </div>
      </div>

      {activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default SetupProgram;
