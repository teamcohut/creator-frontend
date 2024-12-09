import React, { FC, useState } from 'react'
import Modal from '../Modal'
import SendEmail from '../../forms/Onboard/SendEmail'
import UploadParticipants from '../../forms/Onboard/UploadParticipants'
import OnboardCohortModal from '../../forms/Onboard/OnboardCohortModal'
import { ICohort, ISetupModal } from '../../../../@types/dashboard.interface'
import { axiosPrivate } from '../../../../api/axios'
import { notification } from 'antd'
import { useGetProgram } from '../../../../hooks/program/useGetProgram'

const SetupCohortModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [hasTrack, setHasTrack] = useState<boolean>(false)
  const [api, contextHolder] = notification.useNotification()
  const { getProgram } = useGetProgram()
  

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const createCohort = async (cohort: ICohort) => {
    try {
      setHasTrack(cohort.hasTrack)
      const response = await axiosPrivate.post('/cohort', cohort)
      console.log(response);
      getProgram()
      setCurrentStep(currentStep + 1)
      return true
    } catch (error: any) {
      console.log(error);
      if (error.code === "ERR_BAD_RESPONSE" ) {
        let message = error.response.data.errors[0]
        console.log(message);
        if (!message && error.response.data.message.includes('duplicate key error')) {
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
      return false
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
                <UploadParticipants onSubmit={nextStep} hasTrack={hasTrack} /> :
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

export default SetupCohortModal