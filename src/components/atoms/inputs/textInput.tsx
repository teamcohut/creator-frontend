// import React, { useState } from 'react';
// import { ITextInput } from "./types";
// import "../style.css";

// const TextInput: React.FC<ITextInput> = (props) => {
//     const { label, id, icon, placeHolder, onchange } = props;

//     const [isInvalid, setIsInvalid] = useState(false);

//     const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         onchange?.(e); 
//         setIsInvalid(false); 
//     };

//     const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
//         e.preventDefault(); 
//         setIsInvalid(true); 
//     };

//     return (
//         <>
//             <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
//                 {label && (
//                     <label className='manrope-600 fs-body' htmlFor={id}>
//                         {label}
//                     </label>
//                 )}
//                 <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
//                     {icon && icon}
//                     <input
//                         id={id}
//                         className="input bg-transparent w-100 h-100 border-none"
//                         type="text"
//                         placeholder={placeHolder}
//                         onChange={handleOnChange}
//                         onInvalid={handleOnInvalid}
//                         required
//                     />
//                 </div>

//                 {isInvalid && (
//                     <p className="text-danger fs-caption">
//                         {label} is required.
//                     </p>
//                 )}
//             </div>
//         </>
//     );
// };

// export default TextInput;





import React from "react";
import "../style.css";

const TextInput: React.FC<{
    label?: string;
    id: string;
    icon?: React.ReactNode;
    placeHolder?: string;
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    value?: string;
    tracks?: string[];
    onRemove?: (index: number) => void;
}> = ({ label, id, icon, placeHolder, onchange, onKeyDown, value, tracks = [], onRemove }) => {
    return (
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
            {label && (
                <label className="manrope-600 fs-body" htmlFor={id}>
                    {label}
                </label>
            )}
            <div className="input-div d-flex flex-wrap align-items-center gap-2 rounded-pill px-3">
                {tracks.map((track, index) => (
                    <span key={index} className="track-block d-flex align-items-center px-2 py-1 rounded-pill">
                        {track}
                        <button
                            type="button"
                            className="remove-btn ms-2"
                            onClick={() => onRemove?.(index)}
                        >
                            ×
                        </button>
                    </span>
                ))}
                <input
                    id={id}
                    className="input bg-transparent w-100 h-100 border-none"
                    type="text"
                    placeholder={placeHolder}
                    onChange={onchange}
                    onKeyDown={onKeyDown}
                    value={value}
                />
            </div>
        </div>
    );
};

export default TextInput;
