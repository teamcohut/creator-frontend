import Header from "../../../components/organisms/dashboard/Header";
import { useContext, useState } from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import './index.css'
import AccountSettings from "./AccountSettings";
import ProgramSettings from "./ProgramSettings";
import OutlineButton from "../../../components/atoms/Button/OutlineButton";
import { FiEdit3 } from "react-icons/fi";
import ChangePasswordModal from "../../../components/organisms/dashboard/modals/ChangePasswordModal";
import { ProgramContext } from "../../../context/programs/ProgramContext";


const GeneralSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });
const {activeProgram} = useContext(ProgramContext)

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };

  

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
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
      disabled: !activeProgram?.id,
    },
    // {
    //   key: '3',
    //   label: 'Permissions',
    //   children: <PermissionsSettings />,
    // },
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

      <div style={{ maxWidth: '100%', height: '100vh' }}>
      <Tabs items={items}
        onChange={onChange}
        animated={{
          tabPane: true, // Enable tab pane animation
        }}
        // tabBarStyle={{
        //   backgroundColor: '#f0f2f5', // Background color for the tab bar
        //   borderBottom: '2px solid #1890ff', // Border for the tab bar
        //   padding: '10px 20px', // Padding inside the tab bar
        // }}
        
        className="custom-tabs"
      />

      </div>

      {modal.name === "changePasswordModal" && (
        <ChangePasswordModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default GeneralSettings;
