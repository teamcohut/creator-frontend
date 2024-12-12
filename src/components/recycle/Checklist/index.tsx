import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import ProgressBar from '../../molecules/auth/PregressBar'
import ChecklistItem from '../../atoms/dashboard/ChecklistItem'
import { ChecklistArray } from './ChecklistArray'
import { IChecklistItem } from '../../../@types/dashboard.interface'
import '../../style.css'

const Checklist = () => {
    const [percentage, setPercentage] = useState(10)
    const [strength, setStrength] = useState(1)
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={`checklist rounded-3 py-3 px-4 ${open ? 'open' : 'close'}`}>
                <button className='w-100 d-flex flex-column align-items-stretch gap-2 border-none bg-transparent' onClick={() => setOpen(!open)}>
                    <span className='d-flex align-items-start justify-content-between'>
                        <span className='w-100 manrope-600 fs-h4 primary-950 d-flex'>Getting Started Checklist &nbsp; <span className='primary-700'>{percentage}%</span></span>
                        {
                            open ? <FiChevronUp className='fs-body' /> : <FiChevronDown className='fs-body' />
                        }
                    </span>
                    <ProgressBar height={4} length={6} page={strength} absolute={false} gap={false} rounded={true} />
                </button>
                <div className='checklist-box d-flex flex-column p-3 mt-4'>
                    {
                        ChecklistArray.map((el: IChecklistItem, i) => (
                            <ChecklistItem key={i} checked={el.checked} title={el.title} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Checklist