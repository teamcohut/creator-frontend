import React from "react";
import "../style.css";
import InfoCard from "../../molecules/dashboard/InfoCard";
import { FiVideo } from "react-icons/fi";
import { sessionDisplayList } from "./sessionDisplayList";

const SessionsDisplay = () => {
  return (
    <div className="courseDisplay w-100 d-flex flex-column align-items-stretch gap-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h4 className="manrope-600 fs-h4 primary-950">Sessions </h4>
          <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
            4
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">
            All
          </button>
          <button className="btn rounded-pill border-secondary manrope-500 dark-400">
            Active
          </button>
          <button className="btn rounded-pill border-secondary manrope-500 dark-400">
            Inactive
          </button>
          <button className="btn rounded-pill border-secondary manrope-500 dark-400">
            Closed
          </button>
        </div>
      </div>

      {sessionDisplayList.map((el, i) => (
        <InfoCard
          title={el.title}
          subtitle={el.subtitle}
          isActive={el.isActive}
          dateOfSession={el.dateOfSession}
          isOngoing
          key={i}
          infoCardIcon={<FiVideo color="#D86DFF" />}
          infoCardIconBgColor="#FEF1FA"
        />
      ))}
    </div>
  );
};

export default SessionsDisplay;
