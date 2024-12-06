import React, { FC, useState } from 'react'
import Modal from '../Modal'
import SendEmail from '../../forms/Onboard/SendEmail'
import UploadParticipants from '../../forms/Onboard/UploadParticipants'
import OnboardCohortModal from '../../forms/Onboard/OnboardCohortModal'
import { ICohort } from '../../../../@types/dashboard.interface'
import { axiosPrivate } from '../../../../api/axios'

const SetupCohortModal: FC<ISetupCohortModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const createCohort = async (cohort: ICohort) => {
    try {
      const response = await axiosPrivate.post('/cohort', cohort)
      console.log(response);
      setCurrentStep(currentStep + 1)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
        <Modal open={modalOpen} setModalOpen={setModalOpen} >
          {
            currentStep === 1 ?
              <OnboardCohortModal onSubmit={createCohort} /> :
              currentStep === 2 ?
                <UploadParticipants onSubmit={nextStep} /> :
                currentStep === 3 ?
                  <SendEmail onSubmit={() => {
                    setCurrentStep(1)
                    setModalOpen(false)
                  }} /> :
                  <></>
          }
        </Modal>
    </>
  )
}

interface ISetupCohortModal {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export default SetupCohortModal