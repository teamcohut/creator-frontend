import { notification } from "antd";
import { FC, useState } from "react";
import Modal from "../Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddSession from "../../forms/Session/AddSession";
import AdditionalSession from "../../forms/Session/AdditionalSession";

const SessionModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentStep, setCurrentStep] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 ? (
          <AddSession />
        ) : currentStep === 2 ? (
          <AdditionalSession />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default SessionModal;
