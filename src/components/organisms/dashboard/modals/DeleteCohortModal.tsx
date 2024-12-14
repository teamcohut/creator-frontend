import { FC, useState } from 'react'
import Modal from '../../../templates/Modal';
import { ISetupModal } from '../../../../@types/dashboard.interface';
import DangerDeleteCohort from '../../forms/Settings/DangerDeleteCohort';

const DeleteCohortModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <>
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "deleteCohortModal")}
      >
        {currentStep === 1 ? <DangerDeleteCohort /> :''}
      </Modal>
    </>
  );
}; 

export default DeleteCohortModal
