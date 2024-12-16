import React, { useState } from "react";
import { FiBell, FiCheckCircle, FiUser } from "react-icons/fi";
import AddSession from "../components/organisms/forms/Session/AddSession";
import AdditionalSession from "../components/organisms/forms/Session/AdditionalSession";
import AddTask from "../components/organisms/forms/Task/AddTask";
import InviteParticipants from "../components/organisms/forms/Participants/InviteParticipants";
import TaskModal from "../components/organisms/dashboard/modals/TaskModal";
import ChangePassword from "../components/organisms/forms/Settings/ChangePassword";
import SuccessCard from "../components/molecules/auth/SuccessCard";
import StatusCard from "../components/organisms/forms/Settings/SettingsStatusCard";
import SettingsStatusCard from "../components/organisms/forms/Settings/SettingsStatusCard";
import ChangeSuccess from "../components/organisms/forms/Settings/ChangePasswordSuccess";
import RemoveAdminSuccess from "../components/organisms/forms/Settings/RemoveParticipantSuccess";
import EditSaved from "../components/organisms/forms/Settings/EditPermissionSaved";
import AddAdminSuccess from "../components/organisms/forms/Settings/AddAdminSuccess";
import EditPermissionSaved from "../components/organisms/forms/Settings/EditPermissionSaved";
import ChangePasswordSuccess from "../components/organisms/forms/Settings/ChangePasswordSuccess";
import OwnerTransferSuccess from "../components/organisms/forms/Settings/OwnerTransferSuccess";
import ConfirmAdminRemoval from "../components/organisms/forms/Settings/ConfirmAdminRemoval";
import ConfirmOwnerTransfer from "../components/recycle/ConfirmOwnerTransfer";
import ConfirmDelete from "../components/organisms/forms/Settings/ConfirmTrackDelete";
import ConfirmTrackDelete from "../components/organisms/forms/Settings/ConfirmTrackDelete";
import DeleteTrackSuccess from "../components/organisms/forms/Settings/DeleteTrackSuccess";
import ConfirmDeleteCohort from "../components/organisms/forms/Settings/DangerDeleteCohort";
import RemoveParticipantSuccess from "../components/organisms/forms/Settings/RemoveParticipantSuccess";
import DangerDeleteCohort from "../components/organisms/forms/Settings/DangerDeleteCohort";
import DangerDeleteProgram from "../components/organisms/forms/Settings/DangerDeleteProgram";
import DangerDeleteAccount from "../components/organisms/forms/Settings/DangerDeleteAccount";
import AddNewAdmin from "../components/recycle/AddNewAdmin";
import AccountSettings from "./dashboard/settings/AccountSettings";
import EditPermissions from "../components/organisms/forms/Settings/EditPermissions";
import SendEmail from "../components/recycle/SendEmail";
import ErrorUI from "../helpers/ErrorUI";

const Preview = () => {
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };
  return (
    <>
      {/* <h1 className='fs-h3 manrope-700 primary-800'>This page is for previewing components <br /> Preview your component below</h1>
      <DeadlineCalendar deadlines={[]} /> */}

      {/* <AddTask closeModal={()=>{}} /> */}
      {/* <SetupProgram />   */}
      {/* <ProgramDetail /> */}
      {/* <CustomizeProgram /> */}
      {/* <Congratulations /> */}
      {/* <DashBoard /> */}
      {/* <OnboardCohort /> */}
      {/* <OnboardCohortModal /> */}
      {/* <SendEmail onSubmit={()=>{}} /> */}
      {/* <UploadParticipants /> */}
      {/* <SessionsDisplay /> */}
      {/* <SessionDetails /> */}
      {/* <AddSession /> */}
      {/* <AdditionalSession /> */}
      {/* <TimeInput id='time' onchange={()=>{}} placeHolder=''  /> */}
      {/* <CalendarComponent /> */}
      {/* <ParticipantsPage /> */}

      {/* <ChangePassword /> */}
      {/* <ChangePasswordSuccess /> */}
      {/* <RemoveParticipantSuccess /> */}
      {/* <EditPermissionSaved /> */}
      {/* <AddAdminSuccess/> */}
      {/* <OwnerTransferSuccess/> */}
      {/* <ConfirmAdminRemoval /> */}
      {/* <ConfirmOwnerTransfer/> */}
      {/* <ConfirmTrackDelete/> */}
      {/* <DeleteTrackSuccess /> */}
      {/* <DangerDeleteCohort/> */}
      {/* <RemoveAdminSuccess /> */}
      {/* <DangerDeleteProgram /> */}
      {/* <DangerDeleteAccount /> */}
      {/* <AddNewAdmin /> */}
      {/* <EditPermissions /> */}
      {/* <ErrorUI /> */}



    </>
  );
};

export default Preview;
