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
import { TModal } from "../../../@types/dashboard.interface";


const GeneralSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });
const {activeProgram} = useContext(ProgramContext)

  const setModalOpenState = (open: boolean, name: TModal) => {
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
        <OutlineButton
          action={() => setModal((prev) => ({ open: true, name: "changepassword" }))}
          type="button"
          fill={false}
          outline='primary'
          gap={true} width={200}
          border={true}
          customStyle={hoverStyle}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}>
          <FiEdit3 />
          <span>Change Password</span>
        </OutlineButton>
      </Header>

      <Tabs items={items}
        onChange={onChange}
        animated={{
          tabPane: true, // Enable tab pane animation
        }}
        className="custom-tabs"
      />

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
