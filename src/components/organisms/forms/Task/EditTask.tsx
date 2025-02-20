import React, { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import { DatePicker, TimePicker, notification } from "antd";
import { ITask } from "../../../../@types/task.interface";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";
import { FiX } from "react-icons/fi";
// import dayjs from "dayjs";

const EditTask: FC<IEditTask> = ({ task, closeModal }) => {
  const { activeCohort } = useContext(ProgramContext);
  const [api, contextHolder] = notification.useNotification();
  const [form, setForm] = useState<any>({});

  // const [selectedTrackId, setSelectedTrackId] = useState("");
  const tracks = activeCohort?.tracks;

  console.log(task);
  

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "All") {
      setForm({ ...form, assignedToAll: true });
    } else {
      setForm({
        ...form,
        assignedToAll: false,
        assignedToTracks: [value],
      });
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const taskMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.task.editTask(task._id, payload);
    },
    onSuccess(data) {
      notification.success({ message: "Task Updated successfully!" });
      api.success({ message: "Successful" });
      closeModal();

    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await taskMutation.mutate(form);
    } catch (error) {
      console.error(error);
      api.error({ message: "An error occurred while adding the task." });
    }
  };

  return (
    <>
      {contextHolder}
      <form
        onSubmit={handleSubmit}
        className="form bg-white d-flex flex-column rounded-5 mx-auto"
      >
        <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-row justify-content-between">
            <h1 className="manrope-600 primary-950 fs-h2">Task Details</h1>
            <button onClick={closeModal} className="border-none bg-transparent">
              <FiX className="fs-h3" />
            </button>
          </div>
          <span className="manrope-500 dark-700 fs-body">
          View and make changes to your task          
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <TextInput
            id="title"
            label="Task Title"
            placeHolder={task.title}
            defaultValue={task.title}
            onchange={(e) => handleInputChange(e.target.name, e.target.value)}
          />

          <TextAreaInput
            id="description"
            label="Task Description"
            placeHolder="Something about your task"
            defaultValue={task.description}
            onchange={(e) => handleInputChange(e.target.name, e.target.value)}
          />

          {/* Tracks Dropdown */}
          {tracks && (
            <div>
              <label className="py-2 primary-950 manrope-600" htmlFor="trackId">
                Tracks
              </label>
              <select
                id="trackId"
                name="trackId"
                className="form-select rounded-4"
                defaultValue={task.assignedToTracks[0]}
                onChange={handleDropdownChange}
              >
                <option value="" disabled>
                  Select a Track
                </option>
                {tracks?.map((track: any) => (
                  <option key={track.id} value={track.id}>
                    {track.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date and Time Inputs */}
          <div className="d-flex align-items-center gap-4">
            <div>
              <label htmlFor="dueDate" className="py-2 primary-950 manrope-600">
                Task Due Date
              </label>
              <DatePicker
                className="rounded-5"
                id="dueDate"
                // defaultValue={task.dueDate}
                style={{ borderRadius: "8px", width: "100%" }}
                onChange={(date, dateString) => {
                  if (typeof dateString === "string") {
                    handleInputChange("dueDate", dateString);
                  }
                }}
              />
            </div>
            <div>
              <label htmlFor="dueTime" className="py-2 primary-950 manrope-600">
                Task Due Time
              </label>
              <TimePicker
                className="rounded-5"
                id="dueTime"
                // defaultValue={task.dueTime}
                style={{ borderRadius: "8px", width: "100%" }}
                onChange={(time, timeString) => {
                  if (typeof timeString === "string") {
                    handleInputChange("dueTime", timeString);
                  }
                }}
                format="HH:mm"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
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

interface IEditTask {
  closeModal: () => void;
  task: any
}

export default EditTask;

