import React from 'react'
import DeadlineCalendar from '../components/organisms/dashboard/upcomingDeadline'
import AddTask from '../components/organisms/dashboard/Calendar/AddTask'
import SetupProgram from '../components/organisms/dashboard/SetupProgram/SetupProgram';
import UserChoice from '../components/organisms/forms/CustomizeProgram';
import ProgramDetail from '../components/organisms/forms/CustomizeProgram/programdetails';
import CustomizeProgram from '../components/organisms/forms/CustomizeProgram/CustomizeProgram';
import Congratulations from '../components/molecules/dashboard/Congratulations';
import DashBoard from '../components/organisms/dashboard/MainDashboard/DashBoard';
import OnboardCohort from '../components/molecules/dashboard/OnboardCohort';
import OnboardCohortModal from '../components/organisms/forms/Onboard/OnboardCohortModal';
import SendEmail from '../components/organisms/forms/Onboard/SendEmail';
import UploadParticipants from '../components/organisms/forms/Onboard/UploadParticipants';
import SessionsDisplay from '../components/organisms/dashboard/Sessions/SessionsDisplay';
import SessionDetails from '../components/organisms/dashboard/Sessions/SessionDetails';
import AddSession from '../components/organisms/forms/Session/AddSession';
import AdditionalSession from '../components/organisms/forms/Session/AdditionalSession';
import CalendarComponent from '../components/organisms/dashboard/Calendar/Calendar';
import ParticipantsPage from './dashboard/participants/Participants';

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
      {/* <CalendarComponent /> */}
      {/* <ParticipantsPage /> */}
    </>
  );
}

export default Preview