import React, { FC } from 'react'
import { FiUser, FiBookOpen } from 'react-icons/fi'
import Button from '../../../atoms/Button'
import './SetupProgram.css'
import { ISetupProgram } from '../../../../@types/dashboard.interface'

const SetupProgram: FC<ISetupProgram> = ({ openModal }) => {
    return (
        <div className='setup-program-container gap-2'>
            <h3 className='manrope-600'>Welcome Admin</h3>
            <div className='icon-container'>
                <FiUser className='icon-left' />
                <h2 className='manrope-600'>Setup Your Program</h2>
                <FiBookOpen className='icon-right' />
            </div>
            <p>With Cohut, Create and Launch Your Program in 5 minutes. Start Today</p>
            <div>
                <Button children='Setup Your Program' type='button' action={openModal} fill={true} />
            </div>
        </div>
    )
}

export default SetupProgram
