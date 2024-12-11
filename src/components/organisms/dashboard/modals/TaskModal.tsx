import { notification } from "antd";
import { FC } from "react";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddTask from "../../forms/Task/AddTask";
import Modal from "../../../templates/Modal";

const TaskModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [api, contextHolder] = notification.useNotification();

  const closeModal = () => {
    setModalOpen(false, '')
  }

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        <AddTask closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default TaskModal;
