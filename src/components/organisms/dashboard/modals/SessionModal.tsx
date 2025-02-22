import { notification } from "antd";
import { FC, useState } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddSession from "../../forms/Session/AddSession";
import AdditionalSession from "../../forms/Session/AdditionalSession";
import Modal from "../../../templates/Modal";
import { useNavigate } from "react-router-dom";

const SessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate()

  const nextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const closeModal = () => {
    setModalOpen(false, null);
    setCurrentStep(1);
    setFormData({});
  };

  const handleSuccess = () => {
    api.success({ message: "Session successfully created!" });
    setModalOpen(false, null);
    setCurrentStep(1);
    setFormData({});
    // navigate('/learning')
  };

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={(open: boolean) => setModalOpen(open, "session")}>
        {currentStep === 1 ? (
          <AddSession
            initialData={formData}
            onSubmit={nextStep}
            closeModal={closeModal}
          />
        ) : currentStep === 2 ? (
          <AdditionalSession
            initialData={formData}
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
