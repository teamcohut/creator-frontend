import { FC } from 'react'
import { ISetupModal } from '../../../../@types/dashboard.interface';
import Modal from '../../../templates/Modal';
import DangerDeleteProgram from '../../forms/Settings/DangerDeleteProgram';

const DeleteProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "deleteProgram")}
      >
        <DangerDeleteProgram modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Modal>
    </>
  );
};

export default DeleteProgramModal
