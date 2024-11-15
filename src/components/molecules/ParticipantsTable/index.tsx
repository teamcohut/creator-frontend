import React from "react";
import { IParticipantTable } from "../../../@types/participants.interface";
import "./index.css";
import FullName from "../../atoms/dashboard/Participants/FullName";
import { FiMoreVertical } from "react-icons/fi";
import StatusBadge from "../../atoms/dashboard/Participants/StatusBadge";

const ParticipantsTable: React.FC<IParticipantTable> = ({ participants }) => {
  return (
    <div className="p-table">
      <table className="table-spacing">
        <thead>
          <tr className="tr">
            <th className="btlr">Full Name</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Time Enrolled</th>
            <th className="btrr"></th>
          </tr>
        </thead>
        <tbody className="manrope-500 dark-700">
          {participants.map((participant) => (
            <tr key={participant.id}>
              {/* <td>{participant.fullName}</td> */}
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
