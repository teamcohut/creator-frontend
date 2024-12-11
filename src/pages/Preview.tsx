import React from "react";
import AddSession from "../components/organisms/forms/Session/AddSession";
import AdditionalSession from "../components/organisms/forms/Session/AdditionalSession";
import AddTask from "../components/organisms/forms/Task/AddTask";
import InviteParticipants from "../components/organisms/forms/Participants/InviteParticipants";

const Preview = () => {
  return (
    <>
      {/* <h1 className='fs-h3 manrope-700 primary-800'>This page is for previewing components <br /> Preview your component below</h1>
      <DeadlineCalendar deadlines={[]} /> */}

      {/* <AddTask /> */}
      {/* <SetupProgram />   */}
      {/* <ProgramDetail /> */}
      {/* <CustomizeProgram /> */}
      {/* <Congratulations /> */}
      {/* <DashBoard /> */}
      {/* <OnboardCohort /> */}
      {/* <OnboardCohortModal /> */}
      {/* <SendEmail /> */}
      {/* <UploadParticipants /> */}
      {/* <SessionsDisplay /> */}
      {/* <SessionDetails /> */}
      {/* <AddSession /> */}
      {/* <AdditionalSession /> */}
      {/* <TimeInput id='time' onchange={()=>{}} placeHolder=''  /> */}
      {/* <CalendarComponent /> */}
      {/* <ParticipantsPage /> */}
      <div className="bg-primary">
        <InviteParticipants />
      </div>
    </>
  );
};

export default Preview;
