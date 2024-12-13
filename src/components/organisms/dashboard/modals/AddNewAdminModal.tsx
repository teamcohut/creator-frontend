import { FC, useState } from 'react';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import Modal from '../../../templates/Modal';
import AddNewAdmin from '../../forms/Settings/AddNewAdmin';

const AddNewAdminModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "addNewAdminModal")}
      >
        {currentStep === 1 ? <AddNewAdmin /> :''}
      </Modal>
    </>
  );
};

export default AddNewAdminModal
