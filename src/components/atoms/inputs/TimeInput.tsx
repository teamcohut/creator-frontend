import React, { useState } from 'react';
import { ITimeInput } from './types';
import '../style.css';

const TimeInput: React.FC<ITimeInput> = (props) => {
  const {
    id,
    label,
    icon,
    defaultValue = "",
    placeHolder = "HH:MM",
    onchange,
    width = "100%",
    value,
  } = props;

  const [time, setTime] = useState(value || defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    if (onchange) onchange(e);
  };

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement) {
      (inputElement as HTMLInputElement).showPicker?.();
      inputElement.focus();
    }
  };

  const isPlaceholderVisible = !time;

  return (
    <div
      className="input-cont d-flex flex-column align-items-stretch gap-2"
      style={{ width }}
    >
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
        {isPlaceholderVisible && (
          <span className="placeholder-text position-absolute">
            {placeHolder}
          </span>
        )}
        <input
          id={id}
          name={id}
          className="input bg-transparent w-100 h-100 border-none"
          type="time"
          value={time}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TimeInput;
