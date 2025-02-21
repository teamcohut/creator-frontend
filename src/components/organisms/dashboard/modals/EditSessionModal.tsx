import { notification } from "antd";
import { FC, useState } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import Modal from "../../../templates/Modal";
import EditSession from "../../forms/Session/EditSession";
import EditAdditionalSession from "../../forms/Session/EditAdditionalSession";




const EditSessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [api, contextHolder] = notification.useNotification();

  const nextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1);
  };

  const handleSuccess = () => {
    api.success({ message: "Session successfully created!" });
    setModalOpen(false, "session");
    setCurrentStep(1);
    setFormData({});
  };

  // const handleError = (error: string) => {
  //   api.error({ message: "Error", description: error });
  // };

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={(open: boolean) => setModalOpen(open, "session")}>
        {currentStep === 1 ? (
          <EditSession onSubmit={nextStep} setModal={setModalOpen} />
        ) : currentStep === 2 ? (
          <EditAdditionalSession
            initialData={formData}
            onSuccess={handleSuccess}
            setModal={setModalOpen}
            prevStep={()=>setCurrentStep(1)}
          // onError={handleError}
          />
        ) : null}
      </Modal>
    </>
  );
};

export default EditSessionModal;
