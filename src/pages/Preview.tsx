import { useState } from "react";
// import EditTask from "../components/organisms/forms/Task/EditTask";

const Preview = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  // const setModalOpenState = (open: boolean, name: string) => {
  //   setModal({ name, open });
  // };
  return (
    <div>
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
      {/* <TaskInfoCard /> */}

      {/* <Track /> */}

      {/* <EditTask /> */}
    </div>
  );
};

export default Preview;
