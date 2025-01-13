import { useState } from 'react';
import { TModal } from '../../../../@types/dashboard.interface';
import SessionsDisplay from '../Sessions/SessionsDisplay';
import TaskDisplay from './TaskDisplay';
import { Tabs, TabsProps } from 'antd';
import { FiPlus } from 'react-icons/fi';
import Button from '../../../atoms/Button';
import Header from '../Header';
import SessionModal from '../modals/SessionModal';
import TaskModal from '../modals/TaskModal';

const LearningTabs = () => {
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });


  // Storage key for persisting active tab
  const STORAGE_KEY = "activeTabKey";
  
  // Retrieve saved active tab from localStorage or default to '1'
  const [activeKey, setActiveKey] = useState<string>(
    localStorage.getItem(STORAGE_KEY) || "1"
  );

  // Save active tab to localStorage whenever it changes
  const handleTabChange = (key: string) => {
    setActiveKey(key);
    localStorage.setItem(STORAGE_KEY, key);
  };

  const setModalOpenState = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };


  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Sessions",
      children: <SessionsDisplay />,
    },
    {
      key: "2",
      label: "Tasks",
      children: <TaskDisplay />,
    },
  ];

  return (
    <div>
        <Header title="Learning" subtitle="View and Manage your Cohort's learning activities here">
        <div></div>
        <div className="d-flex gap-4">
              <Button
                action={() => setModal({ open: true, name: "task" })}
                fill={false}
                type="button"
                border
                gap
                outline="primary"
              >
                <FiPlus className="fs-body" /> Add New Task
              </Button>
              <Button
                action={() =>
                  setModal((prev) => ({ open: true, name: "session" }))
                }
                gap
                fill
                type="button"
                border={false}
              >
                <FiPlus className="fs-body" /> Create New Session
              </Button>
            </div>
      </Header>
      <div>
        <Tabs
          items={items}
          activeKey={activeKey} // Set the active tab key
          onChange={handleTabChange} // Handle tab change
          animated={{
            tabPane: true, // Enable tab pane animation
          }}
          className="custom-tabs"
        />
      </div>

      {modal.name === "session" && (
        <SessionModal modalOpen={modal.open} setModalOpen={setModalOpenState} />
      )}

      {modal.name === "task" && (
        <TaskModal modalOpen={modal.open} setModalOpen={setModalOpenState} />
      )}
    </div>
  )
}

export default LearningTabs
