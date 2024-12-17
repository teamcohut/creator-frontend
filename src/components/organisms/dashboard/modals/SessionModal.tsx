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






// import { notification } from "antd";
// import { FC, useState } from "react";
// import { ISetupModal } from "../../../../@types/dashboard.interface";
// import AddSession from "../../forms/Session/AddSession";
// import AdditionalSession from "../../forms/Session/AdditionalSession";
// import Modal from "../../../templates/Modal";




// const SessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [formData, setFormData] = useState<Record<string, any>>({});
//   const [api, contextHolder] = notification.useNotification();

//   const nextStep = (data: any) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setCurrentStep(currentStep + 1);
//   };

//   const prevStep = (data: any) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setCurrentStep(currentStep - 1);
//   };

//   const closeModal = () => {
//     setModalOpen(false, '')
//   }

//   const handleSuccess = () => {
//     api.success({ message: "Session successfully created!" });
//     setModalOpen(false, "sessionModal");
//     setCurrentStep(1);
//     setFormData({});
//   };

//   return (
//     <>
//       {contextHolder}
//       <Modal open={modalOpen} setModalOpen={(open: boolean) => setModalOpen(open, "sessionModal")}>
//         {currentStep === 1 ? (
//           <AddSession onSubmit={nextStep} closeModal={closeModal} />
//         ) : currentStep === 2 ? (
//           <AdditionalSession
//             initialData={formData}
//             onSuccess={handleSuccess}
//             closeModal={closeModal}
//             prevStep={prevStep}
//           // onError={handleError}
//           />
//         ) : null}
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
    // Merge new data with existing formData
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    // Simply decrement step without modifying formData
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const closeModal = () => {
    setModalOpen(false, "");
  };

  const handleSuccess = () => {
    api.success({ message: "Session successfully created!" });
    setModalOpen(false, "sessionModal");
    setCurrentStep(1); // Reset step
    setFormData({}); // Clear form data
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={modalOpen}
        setModalOpen={(open: boolean) => setModalOpen(open, "sessionModal")}
      >
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
