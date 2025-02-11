import { FC } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import AddTrack from "../../forms/Track/AddTrack";

const TrackModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false, null);
  };

  return (
    <Modal open={modalOpen} setModalOpen={setModalOpen}>
      <div style={{ minWidth: "600px", padding: "0 0 1rem 0" }}> {/* Added padding bottom */}
        <AddTrack closeModal={closeModal} />
      </div>
    </Modal>
  );
};

export default TrackModal;