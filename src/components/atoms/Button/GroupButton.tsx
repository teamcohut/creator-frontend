import React from "react";

interface ButtonOption {
  label: string;
  onClick: () => void;
  active?: boolean; // Optional to mark the active button
}

interface GroupButtonProps {
  buttons: ButtonOption[];
}

const GroupButton: React.FC<GroupButtonProps> = ({ buttons }) => {
  return (
    <div className="d-flex flex-row gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`btn rounded-pill min-width-button manrope-500 ${
            button.active
              ? "bg-secondary-450 primary-950"
              : "border-secondary dark-400"
          }`}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default GroupButton;
