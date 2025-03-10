import { FC, useContext, useState } from "react";
import { FiUser, FiBookOpen } from "react-icons/fi";
import Button from "../../../atoms/Button";
import "./SetupProgram.css";
import { ISetupProgram, TModal } from "../../../../@types/dashboard.interface";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";
import { AuthContext } from "../../../../context/auth/AuthContext";

const SetupProgram: FC<ISetupProgram> = () => {
  const [modal, setModal] = useState({name: null, open: false} as {name: TModal, open: boolean});

  const openModalHandler = (open: boolean, modal: TModal) => {
    setModal({name: modal, open});
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
            action={() => openModalHandler(true, "program")}
            fill={true}
          />
        </div>
        </div>
      </div>

      {modal.name === "program" && (
        <SetupProgramModal modalOpen={modal.open} setModalOpen={openModalHandler} />
      )}
      {modal.name === "cohort" && (
        <SetupCohortModal modalOpen={modal.open} setModalOpen={openModalHandler} />
      )}
    </>
  );
};

export default SetupProgram;
