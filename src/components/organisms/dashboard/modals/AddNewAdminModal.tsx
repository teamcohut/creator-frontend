import { FC } from 'react'
import { ISetupModal } from '../../../../@types/dashboard.interface';
import Modal from '../../../templates/Modal';
import AddNewAdmin from '../../../recycle/AddNewAdmin';

const AddNewAdminModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, null)}
      >
        <AddNewAdmin modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
    </>
  );
};

export default AddNewAdminModal
