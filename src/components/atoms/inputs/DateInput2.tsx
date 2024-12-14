import React, { FC, useState } from "react";
import { IDateInput } from "./types";
import "../style.css";

const DateInput2: FC<IDateInput> = (props) => {
  const { id, label, icon, placeHolder, onchange, value } = props;
  const [dateValue, setDateValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDateValue(newValue);
    onchange?.(e); // Invoke the parent onChange handler
  };

  return (
    <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
      {label && (
        <label className="manrope-600 fs-body" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
        {icon && icon}
        <input
          id={id}
          name={id}
          className="input bg-transparent w-100 h-100 border-none"
          type="date"
          placeholder={placeHolder}
          value={dateValue} 
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DateInput2;
