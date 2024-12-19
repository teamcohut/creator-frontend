import React, { FC, useState } from 'react'
import Button from '../atoms/Button'
import { Link } from 'react-router-dom'
import RadioInput from '../atoms/inputs/RadioInput'
import { FiBookOpen, FiCalendar, FiStar, FiTool, FiUser } from 'react-icons/fi'
import FormFooter from '../molecules/auth/FormFooter'
import { IUserChoice } from '../../@types/auth.interface'

const UserChoice: FC<IUserChoice> = ({ onSubmit }) => {
    const [selected, setSelected] = useState("")

    const handleSubmit = () => {
        onSubmit(selected)
    }

    const handleRadioChange = (e: string) => {
        setSelected(e)
    }


    return (
        <>
            <form className='form bg-white d-flex flex-column rounded-5' onSubmit={handleSubmit} action="">
                <Link className='primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none' to={'/'}>Cohut</Link>
                <div className="d-flex flex-column gap-2">
                    <h1 className='manrope-600 primary-950 fs-h2'>What would you like to do with Cohut?</h1>
                </div>

                <div className="d-flex flex-column gap-3">
                    <span className='manrope-500 dark-700'>I want to ...</span>
                    <div className="d-flex flex-column gap-3">
                        <RadioInput
                            label='Launch a Bootcamp'
                            id='bootcamp' name='choice'
                            icon={<FiStar className='primary-700' />}
                            selected={selected === 'bootcamp'}
                            click={() => handleRadioChange('bootcamp')} />
                        <RadioInput
                            label='Host an online Course'
                            id='course' name='choice'
                            icon={<FiBookOpen className='fushia-500' />}
                            selected={selected === 'course'}
                            click={() => handleRadioChange('course')} />
                        <RadioInput
                            label='Create a Workshop'
                            id='workshop' name='choice'
                            icon={<FiTool className='rose-500' />}
                            selected={selected === 'workshop'}
                            click={() => handleRadioChange('workshop')} />
                        <RadioInput
                            label='Offer a Coaching/Mentorship'
                            id='mentorship' name='choice'
                            icon={<FiCalendar className='fushia-500' />}
                            selected={selected === 'mentorship'}
                            click={() => handleRadioChange('mentorship')} />
                        <RadioInput
                            label='Not sure - Just browsing through'
                            id='none' name='choice'
                            icon={<FiUser className='dark-400' />}
                            selected={selected === 'none'}
                            click={() => handleRadioChange('none')} />
                    </div>
                </div>
                <Button children='Continue' type='submit' action={handleSubmit} fill={true} />
                <FormFooter />
            </form>
        </>
    )
}

export default UserChoice