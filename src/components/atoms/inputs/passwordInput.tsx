import React, { ChangeEvent, useState } from 'react';
import { IPasswordInput } from './Types';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import "./index.css";
import ProgressBar from '../../molecules/forms/ProgressBar';

const PasswordInput: React.FC<IPasswordInput> = (props) => {
    const { id, label, placeHolder, onchange, showStrength } = props;

    const [strengthBar, setStrengthBar] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [strength, setStrength] = useState(0);
    const [status, setStatus] = useState('Weak');

    const checkStrength = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        // SHOW PASSWORD STRENGTH BAR
        showStrength && setStrengthBar(true)

        // CHECK FOR PASSWORD STRENGTH
        const checkCaps = /[A-Z]/.test(value)
        const checkNums = /[0-9]/.test(value)
        const checkSpecialCharacter = /[!@#$%^&*()_\-+=;:'",<.>/?`~]/.test(value)
        const checkLength = value.length >= 8

        const result = [ checkCaps, checkNums, checkSpecialCharacter, checkLength ]
        const passedChecks = result.filter(Boolean).length;

        if (passedChecks <= 2) {
            setStatus('Weak')
        } else {
            setStatus('Strong')
        }

        setStrength(passedChecks);        
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsInvalid(false);
        onchange?.(e);
        
        if (value.length < 8) {
            setIsInvalid(true);
        }
        checkStrength(e)
        
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
                        onFocus={checkStrength}
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
                {
                    strengthBar && (
                        <>
                            <ProgressBar height={4} page={strength} length={4} />
                            <span className='manrope-500 dark-600'>Password strength: &nbsp; <span className={`${status === 'Weak'? 'text-danger': 'success-600'}`}>{status}</span></span>
                        </>
                    )
                }
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
