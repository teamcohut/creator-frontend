import { FC } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import DangerDeleteAccount from "../../forms/Settings/DangerDeleteAccount";

const DeactivateAccountModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {

  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "deactivateaccount")}
      >
        <DangerDeleteAccount modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Modal>
    </>
  );
};

export default DeactivateAccountModal
