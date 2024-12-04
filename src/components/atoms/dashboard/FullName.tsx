import React from "react";
import { IFullname } from "../../../@types/participants.interface";
import "../style.css";

const FullName: React.FC<IFullname> = ({ fullName }) => {
  const [firstName, lastName] = fullName.split(" ");
  const first = firstName?.charAt(0) || "";
  const last = lastName?.charAt(0) || "";
  const initials = `${first}${last}`;
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <span className="d-flex justify-content-center align-items-center fs-small manrope-600 dark-950 rounded-circle table-avatar">{initials}</span>
        <span className="fs-body manrope-500">{fullName}</span>
      </div>
    </>
  );
};

export default FullName;
