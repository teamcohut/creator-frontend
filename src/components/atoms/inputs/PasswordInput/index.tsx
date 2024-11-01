import React, { useState } from 'react';
import { IInput } from '../../../../@types/input.interface';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import "../index.css";

const PasswordInput: React.FC<IInput> = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const { label, id, placeHolder, onchange } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsInvalid(false);
        onchange?.(e);
        
        if (value.length < 8) {
            setIsInvalid(true);
        }
    };

    return (
        <>
            <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
                {label && <label className='manrope-600 fs-body' htmlFor={id}>{label}</label>}
                <div className='input-div d-flex align-items-center gap-2 rounded-pill px-3'>
                    <FiLock className='icon' />
                    <input 
                        id={id} 
                        className="input bg-transparent w-100 h-100 border-none" 
                        type={showPassword ? "text" : "password"} 
                        placeholder={placeHolder} 
                        onChange={handleOnChange} 
                        onInvalid={() => setIsInvalid(true)} 
                        required
                    />
                    <button 
                        type='button' 
                        className='password-eye bg-transparent icon btn border-transparent' 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FiEyeOff className='icon' /> : <FiEye className='icon' />}
                    </button>
                </div>
                {isInvalid && (
                    <div className="validation-message text-danger">
                        Password must be at least 8 characters long.
                    </div>
                )}
            </div>
        </>
    );
}

export default PasswordInput;
