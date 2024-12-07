import React from "react";
import DeadlineDisplay from "../../../components/organisms/dashboard/upcomingDeadline/DeadlineDisplay";
import Header from "../../../components/organisms/dashboard/Header";
import SessionsDisplay from "../../../components/organisms/dashboard/Sessions/SessionsDisplay";

const Sessions = () => {
  return (
    <>
      <Header
        title="Sessions"
        subtitle={`View and manage your live program sessions here`}
      >
        <></>
      </Header>
      <div className="w-100">
        <div className="d-flex flex-row gap-5">
          <DeadlineDisplay />
          <div className="dashboard-section1">
            <SessionsDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sessions;
