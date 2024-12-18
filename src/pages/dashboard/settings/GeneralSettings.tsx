import Header from "../../../components/organisms/dashboard/Header";
import { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import AccountSettings from "./AccountSettings";
import ProgramSettings from "./ProgramSettings";
import ChangePasswordModal from "../../../components/organisms/dashboard/modals/ChangePasswordModal";
import { TModal } from "../../../@types/dashboard.interface";

const GeneralSettings = () => {
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
      label: "Account",
      children: <AccountSettings />,
    },
    {
      key: "2",
      label: "Program",
      children: <ProgramSettings />,
    },
  ];

  return (
    <>
      <Header
        title="General Settings"
        subtitle="View and manage your account information here."
      >
        <></>
      </Header>

      <div style={{ maxWidth: "100%", height: "100vh" }}>
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

      {modal.name === "changepassword" && (
        <ChangePasswordModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default GeneralSettings;
