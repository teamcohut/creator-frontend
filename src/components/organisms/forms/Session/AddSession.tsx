// import Button from "../../../atoms/Button";
// import ProgressBar from "../../../molecules/auth/PregressBar";
// import TextAreaInput from "../../../atoms/inputs/TextareaInput";
// import TextInput from "../../../atoms/inputs/TextInput";
// import "../../style.css";
// import DateInput from "../../../atoms/inputs/DateInput";
// import TimeInput from "../../../atoms/inputs/TimeInput";
// import { FiClock } from "react-icons/fi";
// import { FC } from "react";

// interface ISessionModal {
//   onSubmit: () => void;
// }
// const AddSession: FC<ISessionModal> = ({ onSubmit }) => {
//   return (
//     <>
//       <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
//         <ProgressBar
//           height={8}
//           length={2}
//           page={1}
//           absolute={true}
//           gap
//           rounded={false}
//         />
//         <div className="d-flex flex-column gap-2">
//           <h1 className="manrope-600 primary-950 fs-h2">Add New Session</h1>
//           <span className="manrope-500 dark-700 fs-body">
//             Sechedule a live session or event and notify participants.
//           </span>
//         </div>

//         <div className="d-flex flex-column gap-4">
//           <div>
//             <h2>Set a time</h2>
//             <div className="d-flex flex-row">
//               <div>
//                 <DateInput id="startDate" onchange={(e) => { }} placeHolder="" label="" />
//               </div>
//               <TimeInput
//                 id="time-picker"
//                 label=""
//                 icon=""
//                 defaultValue="08:30"
//                 placeHolder="Select time"
//                 onchange={(e) => { }}
//                 width=""
//               />
//               <TimeInput id="startTime" onchange={(e) => { }} placeHolder="5:00am" label="" />
//             </div>
//           </div>
//           <TextInput
//             id="title"
//             label="Session Title"
//             placeHolder="Enter Title"
//             onchange={() => { }}
//           />

//           <TextAreaInput
//             id="description"
//             label="Session Description"
//             placeHolder="Something about the session"
//             onchange={() => { }}
//           />
//         </div>

//         <div className="d-flex flex-column align-items-center gap-3">
//           <Button
//             children="Continue"
//             action={onSubmit}
//             type="button"
//             fill={true}
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// export default AddSession;





import React, { useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import DateInput from "../../../atoms/inputs/DateInput";
import TimeInput from "../../../atoms/inputs/TimeInput";
import { FiClock } from "react-icons/fi";
import "../../style.css";


interface ISessionModal {
  onSubmit: (data: any) => void; // Adjust to the appropriate data type
}

const AddSession: React.FC<ISessionModal> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.date || !formData.start || !formData.end) {
      alert("Please fill all required fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar height={8} length={2} page={1} absolute={true} gap rounded={false} />
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Add New Session</h1>
        <span className="manrope-500 dark-700 fs-body">
          Schedule a live session or event and notify participants.
        </span>
      </div>

      <div className="d-flex flex-column gap-4">
        <div>
          <h2>Set a time</h2>
          <div className="d-flex flex-row">
            <DateInput id="date" onchange={handleChange} placeHolder="Select date" label="" />
            <TimeInput id="start" onchange={handleChange} placeHolder="Start Time" label="" />
            <TimeInput id="end" onchange={handleChange} placeHolder="End Time" label="" />
          </div>
        </div>
        <TextInput id="title" label="Session Title" placeHolder="Enter Title" onchange={handleChange} />
        <TextAreaInput id="description" label="Session Description" placeHolder="Enter Description" onchange={handleChange} />
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <Button children="Continue" action={handleSubmit} type="button" fill={true} />
      </div>
    </form>
  );
};

export default AddSession;

