import { FC, useState } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import InviteParticipants from "../../forms/Participants/InviteParticipants";

const ParticipantModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentStep, setCurrentStep] = useState<number>(1);
  const closeModal = () => {
    setModalOpen(false, '')
  }
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "participant")}
      >
        {currentStep === 1 ? <InviteParticipants closeModal={closeModal} /> : null}
      </Modal>
    </>
  );
};

export default ParticipantModal;
