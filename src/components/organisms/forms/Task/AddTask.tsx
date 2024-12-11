import React, { useState } from "react";
import Button from "../../../atoms/Button";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DateInput from "../../../atoms/inputs/DateInput";
import TimeInput from "../../../atoms/inputs/TimeInput";
import { ITask } from "../../../../@types/task.interface";


const AddTask = () => {
    const [track, setTrack] = useState<string>("Online");
    const [form, setForm] = useState<ITask>({
        title: "",
        description: "",
        dueTime: "",
        dueDate: "",
        assignedToTracks: [],
        assignedToAll: false,
        cohortId: ""
    })

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTrack(event.target.value);
    if (event.target.value === 'All') {
        setForm({ ...form, assignedToAll: true });
    } else {

    }
  };

  const handleInputChange = (name: string, value: string) => {
    setForm({...form, [name]: value})
  }

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
                    <TextInput
                     id='title'
                     label='Task Title' 
                     placeHolder='Enter title' 
                     onchange={(e) => handleInputChange(e.target.name, e.target.value)} 
                    />

                    <TextAreaInput
                        id="description"
                        label="Task Description"
                        placeHolder="Something about your task"
                        onchange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />

                    <div className="d-flex align-items-end gap-4 w-75">
                        <div className="w-50">
                            <TimeInput
                             id="dueTime" 
                             onchange={(e) => handleInputChange(e.target.name, e.target.value)} 
                             placeHolder="" 
                             label="Task Due" 
                             />
                        </div>
                        <DateInput
                         id="dueDate" 
                         onchange={(e) => handleInputChange(e.target.name, e.target.value)} 
                         placeHolder="" 
                         />
                    </div>
                    <div>
                        <label htmlFor="track" className="manrope-600 fs-body pb-2">Assign Task</label>
                        <div className="location-input-wrapper">
                            <select
                                id="track"
                                value={track}
                                onChange={handleDropdownChange}
                                className="location-dropdown"
                              >
                                <option value="Online">Online</option>
                                <option value="Physical">Physical</option>
                              </select>
                              <input
                                type="text"
                                placeholder={track === "Online" ? "Link" : "Address"}
                                className="location-text"
                            />
                        </div>
                    </div>
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
