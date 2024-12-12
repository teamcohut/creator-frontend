import { FiPlus } from 'react-icons/fi';
import SearchInput from '../../../components/atoms/inputs/SearchInput';
import GroupButton from '../../../components/atoms/Button/GroupButton';
import OutlineButton from '../../../components/atoms/Button/OutlineButton';
import { useState } from 'react';
import Table from '../../../components/organisms/dashboard/participants/Table';

const PermissionsSettings = () => {
  const [activeView, setActiveView] = useState("All");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered ? {
    color: 'var(--primary-800) !important',
    borderColor: 'var(--primary-800) !important',
  } : {};
  
  const header = [
    "Full Name",
    "Email Address",
    "Role",
    "Status",
    "Last Login",
    "",
  ];

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
        <div>
          <button
            className="btn rounded-pill bg-secondary-450 manrope-500 primary-950"
            onClick={() => {}}
          >
            All
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={() => {}}
          >
            Active
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={() => {}}
          >
            Inactive
          </button>
        </div>

        <GroupButton buttons={buttonOptions} />
      </div>
      <Table header={header} body={[]} />
    </div>
    // </div>
  );
};

export default PermissionsSettings;
