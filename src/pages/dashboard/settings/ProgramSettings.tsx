import { Tabs, TabsProps } from "antd";
import CohortSettings from "./CohortSettings";
import ProgramGeneralSettings from "./ProgramGeneralSettings";
import { useState } from "react";

const ProgramSettings = () => {


  // Key for saving the active tab in localStorage
  const STORAGE_KEY = "programActiveTab";

  // Retrieve saved active tab or default to '1'
  const [activeKey, setActiveKey] = useState<string>(
    localStorage.getItem(STORAGE_KEY) || "1"
  );

  // Handle tab changes and persist to localStorage
  const onChange = (key: string) => {
    setActiveKey(key);
    localStorage.setItem(STORAGE_KEY, key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "General",
      children: <ProgramGeneralSettings />,
    },
    {
      key: "2",
      label: "Cohort",
      children: <CohortSettings />,
    },
  ];

  return (
    <>
      <div className="pb-4"></div>
      <div style={{ height: "100vh" }}>
        <Tabs
          items={items}
          activeKey={activeKey} // Controlled active tab key
          onChange={onChange} // Persist tab key on change
          tabPosition="left"
          animated={{
            tabPane: true, 
          }}
          className="custom-tabs"
        />
      </div>
    </>
  );
};

export default ProgramSettings;
