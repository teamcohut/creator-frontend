export { }
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





// import React, { useState } from 'react';
// import { ITimeInput } from './types';
// import '../style.css';

// const TimeInput: React.FC<ITimeInput> = (props) => {
//   const {
//     id,
//     label,
//     icon,
//     defaultValue = "12:00",
//     placeHolder,
//     onchange,
//     width = "100%",
//     value,
//   } = props;

//   const [time, setTime] = useState(defaultValue);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTime(e.target.value);
//     if (onchange) onchange(e);
//   };

//   return (
//     <div
//       className="input-cont d-flex flex-column align-items-stretch gap-2"
//       style={{ width }}
//     >
//       {label && (
//         <label className="manrope-600 fs-body" htmlFor={id}>
//           {label}
//         </label>
//       )}
//       <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
//         {icon && icon}
//         <input
//           id={id}
//           name={id}
//           className="input bg-transparent w-100 h-100 border-none"
//           type="time"
//           value={time}
//           placeholder={placeHolder}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default TimeInput;






// import React, { useState, useEffect } from 'react';
// import '../style.css';

// interface IDateInput {
//   id: string;
//   label?: string;
//   icon?: React.ReactNode;
//   defaultValue?: string; // Initial date in 'YYYY-MM-DD' format
//   placeHolder?: string;
//   onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   width?: string;
//   value?: string; // Controlled value
// }

// const DateInput: React.FC<IDateInput> = (props) => {
//   const {
//     id,
//     label,
//     icon,
//     defaultValue = "",
//     placeHolder,
//     onchange,
//     width = "100%",
//     value,
//   } = props;

//   // State for internal date management
//   const [date, setDate] = useState(value || defaultValue);

//   // Effect to update state if the `value` prop changes
//   useEffect(() => {
//     if (value !== undefined) {
//       setDate(value);
//     }
//   }, [value]);

//   // Handle changes to the input
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newDate = e.target.value;
//     setDate(newDate); // Update local state
//     if (onchange) onchange(e); // Call parent change handler
//   };

//   return (
//     <div
//       className="input-cont d-flex flex-column align-items-stretch gap-2"
//       style={{ width }}
//     >
//       {label && (
//         <label className="manrope-600 fs-body" htmlFor={id}>
//           {label}
//         </label>
//       )}
//       <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
//         {icon && icon}
//         <input
//           id={id}
//           name={id}
//           className="input bg-transparent w-100 h-100 border-none"
//           type="time"
//           value={date}
//           placeholder={placeHolder}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default DateInput;















// import React, { useState, useEffect } from 'react';
// import { ITimeInput } from './types';
// import '../style.css';

// const TimeInput: React.FC<ITimeInput> = (props) => {
//   const {
//     id,
//     label,
//     icon,
//     defaultValue = "12:00",
//     placeHolder,
//     onchange,
//     width = "100%",
//     value,
//   } = props;

//   // State for internal time management
//   const [time, setTime] = useState(value || defaultValue);

//   // Effect to update state if the `value` prop changes
//   useEffect(() => {
//     if (value !== undefined) {
//       setTime(value);
//     }
//   }, [value]);

//   // Handle changes to the input
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newTime = e.target.value;
//     setTime(newTime); // Update local state
//     if (onchange) onchange(e); // Call parent change handler
//   };

//   return (
//     <div
//       className="input-cont d-flex flex-column align-items-stretch gap-2"
//       style={{ width }}
//     >
//       {label && (
//         <label className="manrope-600 fs-body" htmlFor={id}>
//           {label}
//         </label>
//       )}
//       <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
//         {icon && icon}
//         <input
//           id={id}
//           name={id}
//           className="input bg-transparent w-100 h-100 border-none"
//           type="time"
//           value={time}
//           placeholder="12:00"
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default TimeInput;





// the above work
