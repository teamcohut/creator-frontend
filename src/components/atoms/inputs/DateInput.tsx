import React from 'react';
import { IDateInput } from './types';
import '../style.css';

const DateInput: React.FC<IDateInput> = (props) => {
  const { id, label, icon, placeHolder = "Select a date", onchange } = props;

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement) {
      (inputElement as HTMLInputElement).showPicker?.();
      inputElement.focus();
    }
  };

  return (
    <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
      {label && (
        <label className="manrope-600 fs-body" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className="input-div d-flex align-items-center gap-2 rounded-pill px-3 position-relative"
        onClick={handleDivClick}
        style={{ cursor: "pointer" }}
      >
        {icon && <span className="icon-container">{icon}</span>}
        <input
          id={id}
          name={id}
          className="input bg-transparent w-100 h-100 border-none"
          type="date"
          placeholder={placeHolder}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default DateInput;
