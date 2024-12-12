import React from 'react'
import TextInput from '../../../atoms/inputs/TextInput'
import EmailInput from '../../../atoms/inputs/EmailInput'

const IndividualInvite = () => {
    return (
        <>
            <form className="">
                <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-row gap-4">
                        <TextInput id='firstName' label='First Name' placeHolder='FirstName' onchange={() => { }} />
                        <TextInput id='lastName' label='Last Name' placeHolder='LastName' onchange={() => { }} />
                    </div>
                    <EmailInput
                        label="Email"
                        id="email"
                        onchange={() => { }}
                        placeholder="Email"
                    />
                </div>
            </form>
        </>
    )
}

export default IndividualInvite