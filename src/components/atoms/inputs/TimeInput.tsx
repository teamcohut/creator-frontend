// import React from 'react'
// import { ITimeInput } from './types'
// import '../style.css'

// const TimeInput: React.FC<ITimeInput> = (props) => {
//   const { id, label, icon, placeHolder, onchange } = props
//   return (
//     <>
//       <div className="input-cont d-flex flex-column align-items-stretch gap-2">
//         {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
//         <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
//           {icon && icon}
//           <input id={id} className="input bg-transparent w-100 h-100 border-none" type="time" placeholder={placeHolder} onChange={onchange} />
//         </div>
//       </div>
//     </>
//   )
// }

// export default TimeInput





import React, { useState } from 'react';
import { ITimeInput } from './types';
import '../style.css';

const TimeInput: React.FC<ITimeInput> = (props) => {
  const {
    id,
    label,
    icon,
    defaultValue = "12:00",
    placeHolder,
    onchange,
    width = "100%",
  } = props;

  const [time, setTime] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    if (onchange) onchange(e);
  };

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
      <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
        {icon && icon}
        <input
          id={id}
          name={id}
          className="input bg-transparent w-100 h-100 border-none"
          type="time"
          value={time}
          placeholder={placeHolder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TimeInput;
