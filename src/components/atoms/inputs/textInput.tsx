import React, { useState } from 'react';
import { ITextInput } from "./types";
import "./index.css";

const TextInput: React.FC<ITextInput> = (props) => {
    const { label, id, icon, placeHolder, onchange } = props;
    
    const [isInvalid, setIsInvalid] = useState(false);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onchange?.(e); 
        setIsInvalid(false); 
    };

    const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
        e.preventDefault(); 
        setIsInvalid(true); 
    };

    return (
        <>
            <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
                {label && (
                    <label className='manrope-600 fs-body' htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
                    {icon && icon}
                    <input
                        id={id}
                        className="input bg-transparent w-100 h-100 border-none"
                        type="text"
                        placeholder={placeHolder}
                        onChange={handleOnChange}
                        onInvalid={handleOnInvalid}
                        required
                    />
                </div>

                {isInvalid && (
                    <p className="text-danger fs-caption">
                        {label} is required.
                    </p>
                )}
            </div>
        </>
    );
};

export default TextInput;
