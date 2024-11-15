import React, { FC } from 'react';
import { FiSearch } from 'react-icons/fi';
import "./index.css";
import { ISearchInput } from './types';

const SearchInput: FC<ISearchInput> = (props) => {
    const { id, label, onchange, placeHolder } = props

    return (
        <>
            <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
                <label className='manrope-600 fs-body' htmlFor={id}>{label}
                    <div className='input-div d-flex align-items-center gap-2 rounded-pill'>
                        <input 
                            id={id} 
                            name='password'
                            className="input search bg-transparent w-100 h-100 border-none px-3 fs-caption manrope-500" 
                            type="text"
                            placeholder={placeHolder} 
                            onChange={onchange} 
                            required
                        />
                        <button 
                            type='submit' 
                            className='search-icon bg-transparent icon btn border-transparent' 
                        >
                            <FiSearch />
                        </button>
                    </div>
                </label>
                
            </div>
        </>
    );
}

export default SearchInput;