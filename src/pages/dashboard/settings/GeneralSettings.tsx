import Header from "../../../components/organisms/dashboard/Header";
import React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css'
import AccountSettings from "./AccountSettings";
import Permissions from "./PermissionsSettings";
import PermissionsSettings from "./PermissionsSettings";

const GeneralSettings = () => {
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
      children: 'Program',
    },
    {
      key: '3',
      label: 'Permissions',
      children: <PermissionsSettings />,
    },
    {
      key: '4',
      label: 'Payment',
      children: 'Payment',
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

      <Tabs items={items} onChange={onChange} />
    </>
  );
};

export default GeneralSettings;
