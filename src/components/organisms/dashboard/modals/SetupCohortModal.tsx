import { FC, useContext, useState } from "react";
import UploadParticipants from "../../forms/Onboard/UploadParticipants";
import OnboardCohortModal from "../../forms/Onboard/OnboardCohortModal";
import { ICohort, ISetupModal } from "../../../../@types/dashboard.interface";
import api from "../../../../api/axios";
import { notification } from "antd";
import Modal from "../../../templates/Modal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { useMutation } from "@tanstack/react-query";

const SetupCohortModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [hasTrack] = useState<boolean>(false);
  const { dispatch } = useContext(ProgramContext);

  const createCohortMutation = useMutation({
    mutationFn: (payload: any) => api.cohort.createCohort(payload),
    onSuccess: (data: any) => {
      notification.success({ message: data.data.message });
      dispatch({ type: "ACTIVE_COHORT", payload: data.data.data });
      setCurrentStep(currentStep + 1);
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.message || "Failed to create cohort",
      });
    },
  });

  const createCohort = async (cohort: ICohort) => {
    console.log("Cohort: Setup Cohort Modal", cohort);
    createCohortMutation.mutate(cohort);
  };

  const closeModal = () => {
    setModalOpen(false, '')
  }

  const prevStep = (data: any) => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 ? (
          <OnboardCohortModal onSubmit={createCohort} closeModal={closeModal} />
        ) : currentStep === 2 ? (
          <UploadParticipants onSubmit={() => {
            setCurrentStep(1);
            setModalOpen(false, "");
          }} hasTrack={hasTrack}
            closeModal={closeModal}
            prevStep={prevStep} />
        ) :
          (
            <></>
          )}
      </Modal>
    </>
  );
};

export default SetupCohortModal;
