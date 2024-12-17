// import { notification } from "antd";
// import { FC, useState } from "react";
// import Modal from "../Modal";
// import { ISetupModal } from "../../../../@types/dashboard.interface";
// import AddSession from "../../forms/Session/AddSession";
// import AdditionalSession from "../../forms/Session/AdditionalSession";

// const SessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [api, contextHolder] = notification.useNotification();

//   const nextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   return (
//     <>
//       {contextHolder}
//       <Modal open={modalOpen} setModalOpen={setModalOpen}>
//         {currentStep === 1 ? (
//           <AddSession onSubmit={nextStep} />
//         ) : currentStep === 2 ? (
//           <AdditionalSession />
//         ) : (
//           <></>
//         )}
//       </Modal>
//     </>
//   );
// };

// export default SessionModal;






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
          <AddSession onSubmit={nextStep} />
        ) : currentStep === 2 ? (
          <AdditionalSession
            initialData={formData}
            onSuccess={handleSuccess}
          // onError={handleError}
          />
        ) : null}
      </Modal>
    </>
  );
};

export default SessionModal;
