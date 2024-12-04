import React from 'react'
import Button from '../../../atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import TextAreaInput from '../../../atoms/inputs/TextareaInput'
import TextInput from '../../../atoms/inputs/TextInput'
import FormFooter from '../../../molecules/auth/FormFooter'
import EmailInput from '../../../atoms/inputs/EmailInput'

const AddTask = () => {
    const navigate = useNavigate()
    return (
        <>
            <form className='form bg-white d-flex flex-column rounded-5' action="">
                <div className="d-flex flex-column gap-2">
                    <h1 className='manrope-600 primary-950 fs-h2'>Add Task</h1>
                </div>

                <div className="d-flex flex-column gap-4">
                    <TextInput
                        label="Title"
                        id="title"
                        placeHolder="Enter Title"
                        onchange={(e: any) => console.log(e.target.value)}
                    />

                    <TextAreaInput
                        label="Details"
                        id="details"
                        placeHolder="Add details about the task"
                        onchange={(e: any) => console.log(e.target.value)}
                    />

                    <div className=''>

                    </div>

                    <EmailInput
                        label='Assign to'
                        id='email'
                        onchange={(e: any) => console.log(e.target.value)}
                        placeholder='Enter email'
                    />
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button children='Continue' action={() => { }} type='button' fill={true} />
                </div>
                <FormFooter />
            </form>
        </>
    )
}

export default AddTask;