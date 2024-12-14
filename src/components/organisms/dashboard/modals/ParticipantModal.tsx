import { FC, useState } from "react";
import Modal from "../../../templates/Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import InviteParticipants from "../../forms/Participants/InviteParticipants";

const ParticipantModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "participantModal")}
      >
        {currentStep === 1 ? <InviteParticipants /> : null}
        {/* currentStep === 2 ? (
                    <AdditionalSession
                        initialData={formData}
                        onSuccess={handleSuccess}
                    // onError={handleError}
                    />
                ) : null} */}
      </Modal>
    </>
  );
};

export default ParticipantModal;
