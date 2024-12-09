// import React, { FC, useState } from "react";
// import Button from "../../../atoms/Button";
// import { useNavigate } from "react-router-dom";
// import ProgressBar from "../../../molecules/auth/PregressBar";
// import TextAreaInput from "../../../atoms/inputs/TextareaInput";
// import TextInput from "../../../atoms/inputs/TextInput";
// import "../../style.css";

// const AdditionalSession: FC = () => {
//     const [locationType, setLocationType] = useState<string>("Online");

//     const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setLocationType(event.target.value);
//     };

//     return (
//         <>
//             <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
//                 <ProgressBar height={8} length={2} page={2} absolute={true} gap rounded={false} />
//                 <div className="d-flex flex-column gap-2">
//                     <h1 className="manrope-600 primary-950 fs-h2">Additional Session Info</h1>
//                     <span className="manrope-500 dark-700 fs-body">
//                         Add more information which you want your participants to know
//                     </span>
//                 </div>

//                 <div className="d-flex flex-column gap-4">
//                     <div>
//                         <h2>Location</h2>
//                         <div className="location-input d-flex align-items-center">
//                             <select
//                                 value={locationType}
//                                 onChange={handleDropdownChange}
//                                 className="form-select location-dropdown"
//                                 style={{ flex: "0 0 30%" }}
//                             >
//                                 <option value="Online">Online</option>
//                                 <option value="Physical">Physical</option>
//                             </select>
//                             <input
//                                 type="text"
//                                 placeholder={locationType === "Online" ? "Link" : "Address"}
//                                 className="form-control location-text"
//                                 style={{ flex: "1" }}
//                             />
//                         </div>
//                     </div>

//                     <TextInput id="zone" label="" placeHolder="Select Time Zone" onchange={() => { }} />
//                     <TextInput
//                         id="track"
//                         label="Add Session to Track"
//                         placeHolder="ALL"
//                         onchange={() => { }}
//                     />
//                     <TextAreaInput
//                         id="resources"
//                         label="Useful Links/Resources"
//                         placeHolder="Useful links or resources"
//                         onchange={() => { }}
//                     />
//                 </div>

//                 <div className="d-flex flex-column align-items-center gap-3">
//                     <Button
//                         children="Create Session"
//                         action={() => { }}
//                         type="button"
//                         fill={true}
//                     />
//                 </div>
//             </form>
//         </>
//     );
// };

// export default AdditionalSession;

import React, { FC, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";

const AdditionalSession: FC = () => {
  const [locationType, setLocationType] = useState<string>("Online");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLocationType(event.target.value);
  };

  return (
    <>
      <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
        <ProgressBar
          height={8}
          length={2}
          page={2}
          absolute={true}
          gap
          rounded={false}
        />
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">
            Additional Session Info
          </h1>
          <span className="manrope-500 dark-700 fs-body">
            Add more information which you want your participants to know
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <div>
            <h2>Location</h2>
            <div className="location-input-wrapper">
              <select
                value={locationType}
                onChange={handleDropdownChange}
                className="location-dropdown"
              >
                <option value="Online">Online</option>
                <option value="Physical">Physical</option>
              </select>
              <input
                type="text"
                placeholder={locationType === "Online" ? "Link" : "Address"}
                className="location-text"
              />
            </div>
          </div>

          <TextInput
            id="zone"
            label=""
            placeHolder="Select Time Zone"
            onchange={() => {}}
          />
          <TextInput
            id="track"
            label="Add Session to Track"
            placeHolder="ALL"
            onchange={() => {}}
          />
          <TextAreaInput
            id="resources"
            label="Useful Links/Resources"
            placeHolder="Useful links or resources"
            onchange={() => {}}
          />
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Create Session"
            action={() => {}}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </>
  );
};

export default AdditionalSession;
