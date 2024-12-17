import { notification } from "antd";
import { FC, useState } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddSession from "../../forms/Session/AddSession";
import AdditionalSession from "../../forms/Session/AdditionalSession";
import Modal from "../../../templates/Modal";

const SessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [api, contextHolder] = notification.useNotification();

  const nextStep = (data: any) => {
    // Merge new data with existing formData
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    // Simply decrement step without modifying formData
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const closeModal = () => {
    setModalOpen(false, null);
  };

  const handleSuccess = () => {
    api.success({ message: "Session successfully created!" });
    setModalOpen(false, "session");
    setCurrentStep(1);
    setFormData({});
  };

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={(open: boolean) => setModalOpen(open, "session")}>
        {currentStep === 1 ? (
          <AddSession
            initialData={formData} // Pass existing formData as initial values
            onSubmit={nextStep}
            closeModal={closeModal}
          />
        ) : currentStep === 2 ? (
          <AdditionalSession
            initialData={formData} // Pass formData to repopulate fields
            onSuccess={handleSuccess}
            closeModal={closeModal}
            prevStep={prevStep}
          />
        ) : null}
      </Modal>
    </>
  );
};

export default SessionModal;
