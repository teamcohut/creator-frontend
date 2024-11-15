import React from "react";
import { IBadge } from "../../../../../@types/participants.interface";
import "./index.css";

const StatusBadge: React.FC<IBadge> = ({ status }) => {
  return (
    <>
      {status === "active" ? (
        <span className="active-badge manrope-400">Active</span>
      ) : (
        <span className="inactive">Inactive</span>
      )}
    </>
  );
};

export default StatusBadge;
