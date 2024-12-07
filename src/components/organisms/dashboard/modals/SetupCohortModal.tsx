import React, { FC, useState } from 'react'
import Modal from '../Modal'
import SendEmail from '../../forms/Onboard/SendEmail'
import UploadParticipants from '../../forms/Onboard/UploadParticipants'
import OnboardCohortModal from '../../forms/Onboard/OnboardCohortModal'
import { ICohort } from '../../../../@types/dashboard.interface'
import { axiosPrivate } from '../../../../api/axios'
import { notification } from 'antd'
import { useGetProgram } from '../../../../hooks/program/useGetProgram'

const SetupCohortModal: FC<ISetupCohortModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [api, contextHolder] = notification.useNotification()
  const { getProgram } = useGetProgram()
  

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const createCohort = async (cohort: ICohort) => {
    try {
      const response = await axiosPrivate.post('/cohort', cohort)
      console.log(response);
      getProgram()
      setCurrentStep(currentStep + 1)
    } catch (error: any) {
      console.log(error);
      if (error.code === "ERR_BAD_RESPONSE" ) {
        let message = error.response.data.errors[0]
        console.log(message);
        if (!message && error.response.data.error.includes('duplicate key error')) {
          message = 'Cohort name already exists'
        }
        api.error({
          message,
        })
      }
      if ( error.code === "ERR_NETWORK" ) {
        const message = error.message
        api.error({
          message
        })
      }
    }
  }
  return (
    <>
      {contextHolder}
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