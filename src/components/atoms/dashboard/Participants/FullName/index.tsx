import React from "react";
import { IFullname } from "../../../../../@types/participants.interface";
import "./index.css";

const FullName: React.FC<IFullname> = ({ fullName }) => {
  const [firstName, lastName] = fullName.split(" ");
  const first = firstName?.charAt(0) || "";
  const last = lastName?.charAt(0) || "";
  const initials = `${first}${last}`;
  return (
    <>
      <span className="avatar">{initials}</span>
      <span>{fullName}</span>
    </>
  );
};

export default FullName;
