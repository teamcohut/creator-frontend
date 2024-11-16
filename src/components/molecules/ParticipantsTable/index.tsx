import React from "react";
import { IParticipantTable } from "../../../@types/participants.interface";
import "./index.css";
import FullName from "../../atoms/dashboard/Participants/Initials";
import { FiMoreVertical } from "react-icons/fi";
import StatusBadge from "../../atoms/dashboard/StatusBadge";

const ParticipantsTable: React.FC<IParticipantTable> = ({ participants }) => {
  return (
    <div className="p-table w-100">
      <table className="table-spacing">
        <thead>
          <tr className="tr fs-body">
            <th className="btlr">Full Name</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Time Enrolled</th>
            <th className="btrr"></th>
          </tr>
        </thead>
        <tbody className="fs-body manrope-500 dark-700">
          {participants.map((participant) => (
            <tr key={participant.id}>
              <td>
                <FullName fullName={participant.fullName} />
              </td>
              <td>{participant.email}</td>
              <td>
                <StatusBadge status={participant.status}></StatusBadge>
              </td>
              <td>{participant.enrollmentDate}</td>
              <td>
                <FiMoreVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsTable;
