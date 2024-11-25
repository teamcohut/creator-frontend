import React from 'react'
import DeadlineCalendar from '../components/organisms/dashboard/upcomingDeadline'
import Overview from '../components/organisms/dashboard/Overview'
import RecentActivity from '../components/organisms/dashboard/RecentActivity';

const Preview = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {/* <DeadlineCalendar deadlines={[]} /> */}
        {/* <Overview /> */}
        <RecentActivity />
      </div>
    </>
  );
}

export default Preview