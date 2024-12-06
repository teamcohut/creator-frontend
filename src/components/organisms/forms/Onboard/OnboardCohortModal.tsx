// import React from 'react'
// import Button from '../../../atoms/Button'
// import { Link, useNavigate } from 'react-router-dom'
// import ProgressBar from '../../../molecules/auth/PregressBar'
// import { FiArrowLeft, FiCalendar, FiImage } from 'react-icons/fi'
// import '../../style.css'
// import DragNDropInput from '../../../atoms/inputs/DragNDropInput'
// import TextInput from '../../../atoms/inputs/TextInput'



// const OnboardCohortModal = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//             <form className="form bg-white d-flex flex-column rounded-5 mx-auto" action="">
//                 <ProgressBar
//                     height={8}
//                     length={2}
//                     page={1}
//                     absolute={true}
//                     gap
//                     rounded={false}
//                 />
//                 <div className="w-100 d-flex justify-content-between">
//                     {/* <Link
//                     className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
//                     to={"/"}
//                 >
//                     Cohut
//                    </Link> */}
//                     {/* <span className="dark-700 back" onClick={() => { }}>
//                         <FiArrowLeft /> Back
//                     </span> */}
//                 </div>
//                 <div className="d-flex flex-column gap-2">
//                     <h1 className="manrope-600 primary-950 fs-h2">Onboard New Cohort</h1>
//                     <span className="manrope-500 dark-700 fs-body">
//                         Let's invite and guide your Cohort to Success
//                     </span>
//                 </div>

//                 <div className="d-flex flex-column gap-2">
//                     <div>
//                         <p>Cohort Number</p>
//                         <span className='rounded-5 px-4 py-2 border'>1</span>
//                     </div>

//                     <div>
//                         <p>Set Cohort Duration</p>
//                         <div className='d-flex flex-row gap-3'>
//                             <p className='rounded-5 px-2 py-2 border gap-4'>01/10/2024  <FiCalendar /></p>
//                             <span>-</span>
//                             <p className='rounded-5 px-2 py-2 border'>01/10/2024  <FiCalendar /></p>
//                         </div>
//                         <input type="checkbox" /> <label className='manrope-500' htmlFor="">Enable Tracks</label>
//                         <p className="fs-caption primary-400">(E.g Data Analysis, Software Engineering, Product Design)</p>
//                     </div>


//                     <DragNDropInput
//                         label="Upload Participants List"
//                         id="thumbnail-upload"
//                         detail="Cohort's list of Participants"
//                         onchange={(file) => console.log('Uploaded file:', file)}
//                     />
//                     <span className="fs-caption primary-400">A csv (Comma separated Values) File containing First names, Last names and Emails of Participants</span>



//                 </div>

//                 <div className="d-flex flex-column align-items-center gap-3">
//                     <Button
//                         children="Continue"
//                         action={() => { }}
//                         type="button"
//                         fill={true}
//                     />
//                 </div>
//             </form>
//         </>
//     );
// };

// export default OnboardCohortModal;



import React, { FC, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import "../../style.css";
import NumberInput from "../../../atoms/inputs/NumberInput";
import DateInput from "../../../atoms/inputs/DateInput";
import { ICohort } from "../../../../@types/dashboard.interface";

const OnboardCohortModal: FC<IOnboardCohortModal> = ({ onSubmit }) => {
    const [form, setForm] = useState({
        number: 1,
        description: "",
        startDate: "",
        endDate: "",
        hasTrack: true,
        program: ""
    })
    const [isTrackEnabled, setIsTrackEnabled] = useState(false); // State for checkbox

    const handleInputChange = (name: string, value: string | boolean | number) => {
        setForm({ ...form, [name]: value });
      };

    return (
        <>
            <form className="form bg-white d-flex flex-column rounded-5 mx-auto" onSubmit={()=>{onSubmit(form)}} action="">
                {/* Progress bar dynamically changes length */}
                <ProgressBar
                    height={8}
                    length={3} // Adjust progress bar length based on state
                    page={1}
                    absolute={true}
                    gap
                    rounded={false}
                />
                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">Onboard New Cohort</h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Let's invite and guide your Cohort to Success
                    </span>
                </div>

                <div className="d-flex flex-column gap-3">
                    <div className="w-25">
                        {/* <p>Cohort Number</p> */}
                        <NumberInput id="number" onchange={(e) => handleInputChange(e.target.name, e.target.value)} placeHolder="" label="Cohort Number" />
                    </div>

                    <div className="d-flex flex-row align-items-end gap-3">
                        <DateInput id="startDate" onchange={(e) => handleInputChange(e.target.name, e.target.value)} placeHolder="" label="Set Cohort Duration" />
                        <h2>-</h2>
                        <DateInput id="endDate" onchange={(e) => handleInputChange(e.target.name, e.target.value)} placeHolder="" />
                    </div>
                    {/* Checkbox to toggle track */}
                    <div>
                        <label className="d-flex gap-2 manrope-500" htmlFor="enable-track">
                        <input
                            type="checkbox"
                            id="hasTrack"
                            checked={isTrackEnabled}
                            onChange={(e) => handleInputChange(e.target.name, e.target.checked)} // Update state
                        />
                            Enable Tracks
                        </label>
                        <p className="fs-caption primary-400">
                            (E.g Data Analysis, Software Engineering, Product Design)
                        </p>
                    </div>

                    {/* Conditionally render DragNDropInput or TextInput */}
                    {/* {isTrackEnabled ? (
                        <div>
                            <TextInput
                                id="track"
                                label="Track"
                                placeHolder="Input track"
                                onchange={() => { }}
                            />

                            <span className="fs-caption primary-400">
                                Enter track and press 'Enter' to add a track
                            </span>
                        </div>

                    ) : (
                        <div>
                            <DragNDropInput
                                label="Upload Participants List"
                                id="thumbnail-upload"
                                detail="Cohort's list of Participants"
                                onchange={(file) => console.log("Uploaded file:", file)}
                            />
                            <span className="fs-caption primary-400">
                                A csv (Comma separated Values) File containing First names, Last names and Emails of
                                Participants
                            </span>
                        </div>

                    )} */}

                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button children="Continue" action={()=>{}} type="submit" fill={true} />
                </div>
            </form>
        </>
    );
};

interface IOnboardCohortModal {
    onSubmit: (cohort: ICohort) => void;
}

export default OnboardCohortModal;
