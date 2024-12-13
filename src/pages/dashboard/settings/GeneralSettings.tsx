import Header from "../../../components/organisms/dashboard/Header";
import React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css'
import AccountSettings from "./AccountSettings";
import PermissionsSettings from "./PermissionsSettings";
import ProgramSettings from "./ProgramSettings";

const GeneralSettings = () => {
  const header = [
    "Full Name",
    "Email Address",
    "Role",
    "Status",
    "Last Login",
    "",
  ];
  const onChange = (key: string) => {
    console.log(`Active Tab Key: ${key}`);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Account',
      children: <AccountSettings />,
    },
    {
      key: '2',
      label: 'Program',
      children: <ProgramSettings />,
    },
    {
      key: '3',
      label: 'Permissions',
      children: <PermissionsSettings header={header} body={[]} />,
    },
    // {
    //   key: '4',
    //   label: 'Payment',
    //   children: 'Payment',
    // },
  ];

  return (
    <>
      <Header
        title="General Settings"
        subtitle="View and manage your account information here."
      >
        <></>
      </Header>

      <Tabs items={items} 
      onChange={onChange} 
      animated={{
        tabPane: true, // Enable tab pane animation
      }}
      className="custom-tabs"
      />
    </>
  );
};

export default GeneralSettings;
