import { FC, useContext, useState } from "react";
import SendEmail from "../../forms/Onboard/SendEmail";
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

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const createCohort = async (cohort: ICohort) => {
    console.log("Cohort: Setup Cohort Modal", cohort);
    createCohortMutation.mutate(cohort);
  };

  return (
    <>
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 ? (
          <OnboardCohortModal onSubmit={createCohort} />
        ) : currentStep === 2 ? (
          <UploadParticipants onSubmit={nextStep} hasTrack={hasTrack} />
        ) : currentStep === 3 ? (
          <SendEmail
            onSubmit={() => {
              setCurrentStep(1);
              setModalOpen(false, "");
            }}
          />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default SetupCohortModal;
