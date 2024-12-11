import React from "react";
import TextInput, { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import { FiEdit, FiEdit3, FiMail, FiUser } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
import Header from "../../../components/organisms/dashboard/Header";

const AccountSettings = () => {
  return (
    <>
      <div className="d-flex gap-133 align-items-start">
        <div className="d-flex flex-column w-60 gap-4">
          <div className="d-flex gap-4 ">
            <TextInput2 id="" label="Full Name" icon={<FiUser/>} />
            <TextInput2 id="" label="Last Name" icon={<FiUser/>} />
          </div>
          <TextInput2 id="" label="Email" icon={<FiMail/>} />

          <Button action={()=>{}} type="button" fill={false} outline='primary' gap={true} width={200} border={true}>
          <FiEdit3/>
          <span>Change Password</span>
        </Button>
        </div>
        <div>
        <Header
        title="Role"
        subtitle="Owner"
      >
        <></>
      </Header>

      <Header
        title="Danger Zone"
        subtitle="Deactivate Account"
      >
        <></>
      </Header>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
