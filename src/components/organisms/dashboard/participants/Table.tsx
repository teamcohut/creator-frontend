// import React from "react";
// import { FiMoreVertical } from "react-icons/fi";
// import FullName from "../../../atoms/dashboard/FullName";
// import StatusBadge from "../../../atoms/dashboard/StatusBadge";
// import { ITable } from "../../../../@types/participants.interface";
// import "../../style.css";
// import SearchInput from "../../../atoms/inputs/SearchInput";

// const Table: React.FC<ITable> = ({ header, body }) => {
//   console.log("body", body)
//   return (
//     <div className="p-table w-100">

//       <div className="d-flex align-items-center justify-content-between py-3">
//         <div className="d-flex align-items-center gap-2">
//           <h4 className="manrope-600 fs-h4 primary-950 align-content-center">Participants
//             <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
//               {body.length}
//             </span>
//           </h4>
//         </div>

//         <div>
//           <SearchInput
//             id="session"
//             label=""
//             placeHolder="Search"
//             onchange={(e) => { }}
//           />
//         </div>

//         <div className="d-flex align-items-center gap-2">
//           <input type="checkbox" name="" id="" /> <label> Select</label>
//           <FiMoreVertical />

//         </div>
//       </div>


//       <table className="table-div w-100">
//         <thead>
//           <tr className="manrope-600 fs-body primary-950">
//             {header.map((el, i) => (
//               <th key={i}>{el}</th>
//             ))}
//           </tr>
//         </thead>

//         <tbody className="fs-body manrope-500 dark-700">
//           {body?.map(({ participant, trackTitle }, idx) => (
//             <tr key={idx}>
//               <td>
//                 {`${participant.firstName} ${participant.lastName}`}
//               </td>
//               <td>{participant.email}</td>
//               <td>{trackTitle}</td>
//               <td>
//                 <StatusBadge status={participant.status}></StatusBadge>
//               </td>
//               <td>{participant.createdAt}</td>
//               <td>
//                 <FiMoreVertical />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;









import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import StatusBadge from "../../../atoms/dashboard/StatusBadge";
import { ITable } from "../../../../@types/participants.interface";
import "../../style.css";
import SearchInput from "../../../atoms/inputs/SearchInput";

const Table: React.FC<ITable> = ({ header, body }) => {
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedParticipants([]);
    } else {
      setSelectedParticipants(body.map((b) => b.participant.email));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectIndividual = (email: string) => {
    if (selectedParticipants.includes(email)) {
      setSelectedParticipants(selectedParticipants.filter((e) => e !== email));
    } else {
      setSelectedParticipants([...selectedParticipants, email]);
    }
  };

  const handleDropdownAction = (action: string, email?: string) => {
    if (email) {
      // Action for a specific participant
      console.log(`Action: ${action} for ${email}`);
    } else {
      // Action for all selected participants
      console.log(`Action: ${action} for ${selectedParticipants}`);
    }
  };

  return (
    <div className="p-table w-100">
      <div className="d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-2">
          <h4 className="manrope-600 fs-h4 primary-950 align-content-center">
            Participants
            <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
              {body.length}
            </span>
          </h4>
        </div>

        <div>
          <SearchInput
            id="session"
            label=""
            placeHolder="Search"
            onchange={(e) => { }}
          />
        </div>

        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          <label> Select All</label>
          <div className="dropdown">
            <FiMoreVertical
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            />
            <ul className="dropdown-menu">
              <li
                onClick={() => handleDropdownAction("Send Mail")}
                className="dropdown-item"
              >
                Send Mail
              </li>
              <li
                onClick={() => handleDropdownAction("Remove")}
                className="dropdown-item"
              >
                Remove
              </li>
              <li
                onClick={() => handleDropdownAction("Graduate")}
                className="dropdown-item"
              >
                Graduate
              </li>
            </ul>
          </div>
        </div>
      </div>

      <table className="table-div w-100">
        <thead>
          <tr className="manrope-600 fs-body primary-950">
            <th>Select</th>
            {header.map((el, i) => (
              <th key={i}>{el}</th>
            ))}
          </tr>
        </thead>

        <tbody className="fs-body manrope-500 dark-700">
          {body?.map(({ participant, trackTitle }, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedParticipants.includes(participant.email)}
                  onChange={() => toggleSelectIndividual(participant.email)}
                />
              </td>
              <td>
                {`${participant.firstName} ${participant.lastName}`}
              </td>
              <td>{participant.email}</td>
              <td>{trackTitle}</td>
              <td>
                <StatusBadge status={participant.status}></StatusBadge>
              </td>
              <td>{participant.createdAt}</td>
              <td>
                <div className="dropdown">
                  <FiMoreVertical
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                  />
                  <ul className="dropdown-menu">
                    <li
                      onClick={() =>
                        handleDropdownAction("Send Mail", participant.email)
                      }
                      className="dropdown-item"
                    >
                      Send Mail
                    </li>
                    <li
                      onClick={() =>
                        handleDropdownAction("Remove", participant.email)
                      }
                      className="dropdown-item"
                    >
                      Remove
                    </li>
                    <li
                      onClick={() =>
                        handleDropdownAction("Graduate", participant.email)
                      }
                      className="dropdown-item"
                    >
                      Graduate
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

