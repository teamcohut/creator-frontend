import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import FullName from "../../atoms/dashboard/FullName";
import StatusBadge from "../../atoms/dashboard/StatusBadge";
import { ITable } from "../../../@types/participants.interface";
import "../style.css";

const Table: React.FC<ITable> = ({ header, body }) => {
  return (
    <div className="p-table w-100">
      <table className="table-div w-100">
        <thead>
          <tr className="manrope-600 fs-body primary-950">
            {
              header.map((el, i) => (
                <th key={i}>{el}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="fs-body manrope-500 dark-700">
          {body.map((participant, i) => (
            <tr key={i}>
              <td> <FullName fullName={participant.fullName} /> </td>
              <td>{participant.email}</td>
              <td> <StatusBadge status={participant.status}></StatusBadge>  </td>
              <td>{participant.enrollmentDate}</td>
              <td> <FiMoreVertical />  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
