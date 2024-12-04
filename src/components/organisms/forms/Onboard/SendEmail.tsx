import React, { FC } from "react";
import Button from "../../../atoms/Button";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";


const SendEmail: FC<ISendEmail> = ({ onSubmit }) => {
    return (
        <>
            <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
                <ProgressBar
                    height={8}
                    length={3}
                    page={3}
                    absolute={true}
                    gap
                    rounded={false}
                />
                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">Send Participants Emails</h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Let’s invite and guide your Cohort to Success
                    </span>
                </div>

                <div className="d-flex flex-column gap-4">
                    <TextInput id='subject' label='Email Subject' placeHolder='Welcome to the Brave Redemptive, Cohort 2' onchange={() => { }} />

                    <TextAreaInput
                        label="Body"
                        id="description"
                        placeHolder="Write your mail here"
                        onchange={(e: any) => console.log(e.target.value)}
                    />
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Onboard Cohort"
                        action={onSubmit}
                        type="button"
                        fill={true}
                    />
                </div>
            </form>
        </>
    );
};

interface ISendEmail {
    onSubmit: () => void;
}

export default SendEmail;
