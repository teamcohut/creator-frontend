import React, { FC, useState } from "react";
import Button from "../../../atoms/Button";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DateInput from "../../../atoms/inputs/DateInput";


const AddTask = () => {

    return (
        <>
            <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">Add New Task</h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Add a task or to-do and assign to your participants
                    </span>
                </div>

                <div className="d-flex flex-column gap-4">
                    <TextInput id='task' label='Task Title' placeHolder='Enter title' onchange={() => { }} />

                    <TextAreaInput
                        id="description"
                        label="Task Description"
                        placeHolder="Something about your task"
                        onchange={() => { }}
                    />

                    {/* <DateInput /> */}
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Save"
                        action={() => { }}
                        type="button"
                        fill={true}
                    />
                </div>
            </form>
        </>
    );
};


export default AddTask;
