import React, { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DateInput from "../../../atoms/inputs/DateInput";
import TimeInput from "../../../atoms/inputs/TimeInput";
import { ITask } from "../../../../@types/task.interface";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";
import { notification } from "antd";


const AddTask: FC<IAddTask> = ({ closeModal }) => {
    const { activeCohort, programs } = useContext(ProgramContext)
    const [api, contextHolder] = notification.useNotification()
    const [track, setTrack] = useState<string>("Online");
    const [form, setForm] = useState<ITask>({
        title: "",
        description: "",
        dueTime: "",
        dueDate: "",
        assignedToTracks: [],
        assignedToAll: false,
        cohortId: activeCohort.id
    })

    console.log(activeCohort);
    

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value
    setTrack(value);
    if (value === 'All') {
        setForm({ 
            ...form, 
            assignedToAll: true 
        });
    } else {
        setForm({
            ...form, 
            assignedToAll: false, 
            assignedToTracks: [...form.assignedToTracks, value]
        })
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setForm({...form, [name]: value})
  }

  const taskMutation = useMutation({
    mutationFn: (payload: any) => {
        return axiosAPI.task.createTask(payload)
    },
    onSuccess(data) {
        console.log(data);
        api.success({
            message: 'Successful'
        })
        closeModal()
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.title === ""
        || form.description === ""
        || form.dueTime === ""
        || form.dueDate === ""
    ) {
        api.warning({
            message: "Missing required fields.",
            placement: 'top'
        })
    }
    const payload = form
    console.log(payload);
    
    try {
        await taskMutation.mutate(payload)
        const error = taskMutation.error as any
        let message = error.response.data.errors[0];

        if (error.code === "ERR_NETWORK") {
            message = error.message;
            api.error({
              message,
            });
        } else {
            api.error({
                message,
            });
        }
    } catch (error) {
        console.error(error);
        
    }
  }

    return (
        <>
            {contextHolder}
            <form onSubmit={handleSubmit} className="form bg-white d-flex flex-column rounded-5 mx-auto">
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
                        <label htmlFor="track" className="manrope-600 fs-body pb-2">Assign Task (Optional)</label>
                        {/* <div className=""> */}
                            <select
                                id="track"
                                value={track}
                                onChange={handleDropdownChange}
                                className="location-input-wrapper py-2 px-3 w-50"
                              >
                                <option value="All">All</option>
                                {
                                    activeCohort.tracks.map((el: any, i: number) => (
                                        <option key={i} value={el.id}>{el.name}</option>
                                    ))
                                }
                              </select>
                              {/* <input
                                type="text"
                                placeholder={track === "Online" ? "Link" : "Address"}
                                className="location-text"
                            /> */}
                        {/* </div> */}
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Save"
                        action={() => { }}
                        type="submit"
                        fill={true}
                        loading={taskMutation.isPending}
                    />
                </div>
            </form>
        </>
    );
};

interface IAddTask {
    closeModal: () => void
}

export default AddTask;
