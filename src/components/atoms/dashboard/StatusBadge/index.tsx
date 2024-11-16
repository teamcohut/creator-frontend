import React from "react";
import { IBadge } from "../../../../@types/participants.interface";
import "./index.css";

const StatusBadge: React.FC<IBadge> = ({ status }) => {
  return (
    <>
      {status === "active" ? (
        <span className="fs-small active-badge manrope-400">Active</span>
      ) : (
        <span className="fs-small inactive">Inactive</span>
      )}
    </>
  );
};

export default StatusBadge;
