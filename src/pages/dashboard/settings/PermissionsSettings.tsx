import { FiMoreVertical, FiPlus } from 'react-icons/fi';
import SearchInput from '../../../components/atoms/inputs/SearchInput';
import GroupButton from '../../../components/atoms/Button/GroupButton';
import OutlineButton from '../../../components/atoms/Button/OutlineButton';
import { useState } from 'react';
import { ITable } from '../../../@types/participants.interface';
import StatusBadge from '../../../components/atoms/dashboard/StatusBadge';

const PermissionsSettings: React.FC<ITable> = ({ header, body }) => {
  const [activeView, setActiveView] = useState("All");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    []
  );
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

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
  
  

  const handleButtonClick = (view: string) => {
    setActiveView(view);
  };

  const buttonOptions = [
    {
      label: "All",
      onClick: () => handleButtonClick("All"),
      active: activeView === "All",
    },
    {
      label: "Active",
      onClick: () => handleButtonClick("Active"),
      active: activeView === "Active",
    },
    {
      label: "Inactive",
      onClick: () => handleButtonClick("Inactive"),
      active: activeView === "Inactive",
    },
  ];

  return (
    <div>
      <div className="d-flex w-100 justify-content-between align-items-center pb-5">
        <h5>Admin Accounts</h5>
        <OutlineButton action={()=>{}} 
          type="button" fill={false} 
          outline='primary' 
          gap={true} 
          width={177} 
          border={true}
          customStyle={hoverStyle}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          >
          <FiPlus/>
          <span>Add New Admin</span>
        </OutlineButton>
      </div>
      <div className="d-flex justify-content-between pb-4">
        <SearchInput
          id=""
          placeHolder="Search by name"
          onchange={() => {}}
          width={18}
        />

        <GroupButton buttons={buttonOptions} />

      </div>
      <div className="p-table w-100">
  
      <table className="table-div w-100">
        <thead>
          <tr className="manrope-600 fs-body primary-950">
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
              <td>{`${participant.firstName} ${participant.lastName}`}</td>
              <td>{participant.email}</td>
              <td>{trackTitle}</td>
              <td>
                <StatusBadge
                  status={participant.isActive ? "active" : "inactive"}
                ></StatusBadge>
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
    </div>
    // </div>
  );
};

export default PermissionsSettings;
