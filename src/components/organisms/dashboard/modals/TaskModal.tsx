import { notification } from "antd";
import { FC } from "react";
import Modal from "../Modal";
import { ISetupModal } from "../../../../@types/dashboard.interface";
import AddTask from "../../forms/Task/AddTask";

const TaskModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
          <AddTask />
      </Modal>
    </>
  );
};

export default TaskModal;
