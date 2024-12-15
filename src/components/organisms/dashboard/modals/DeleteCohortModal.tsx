import { FC } from 'react'
import Modal from '../../../templates/Modal';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import DangerDeleteCohort from '../../forms/Settings/DangerDeleteCohort';

const DeleteCohortModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {

  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "deleteCohortModal")}
      >
        <DangerDeleteCohort modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Modal>
    </>
  );
}; 

export default DeleteCohortModal
