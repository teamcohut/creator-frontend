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
import { FiX } from "react-icons/fi";

const AddTask: FC<IAddTask> = ({ closeModal }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTrackId, setSelectedTrackId] = useState("");
  const { activeCohort } = useContext(ProgramContext);
  const [api, contextHolder] = notification.useNotification();
  const [form, setForm] = useState<ITask>({
    title: "",
    description: "",
    dueTime: "",
    dueDate: "",
    assignedToTracks: [],
    assignedToAll: false,
    cohortId: activeCohort.id,
  });

  const tracks = activeCohort?.tracks;

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (value === "All") {
      setForm({
        ...form,
        assignedToAll: true,
      });
    } else {
      setForm({
        ...form,
        assignedToAll: false,
        assignedToTracks: [...form.assignedToTracks, value],
      });
    }
  };

  // const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedTrackId(e.target.value);
  // };

  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const taskMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.task.createTask(payload);
    },
    onSuccess(data) {
      notification.success({ message: "Task Added successfully!" });

      api.success({
        message: "Successful",
      });
      
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.title === "" ||
      form.description === "" ||
      form.dueTime === "" ||
      form.dueDate === ""
    ) {
      api.warning({
        message: "Missing required fields.",
        placement: "top",
      });
    }
    const payload = form;

    try {
      await taskMutation.mutate(payload);
      const error = taskMutation.error as any;
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
            <h1 className="manrope-600 primary-950 fs-h2">Add New Task</h1>
            <FiX className="fs-h3" onClick={closeModal} />
          </div>
          <span className="manrope-500 dark-700 fs-body">
            Add a task or to-do and assign to your participants
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <TextInput
            id="title"
            label="Task Title"
            placeHolder="Enter title"
            onchange={(e) => handleInputChange(e.target.name, e.target.value)}
          />

          <TextAreaInput
            id="description"
            label="Task Description"
            placeHolder="Something about your task"
            onchange={(e) => handleInputChange(e.target.name, e.target.value)}
          />

          <div className="d-flex align-items-end gap-4 w-75">
            <div className="">
              <TimeInput
                id="dueTime"
                onchange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
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
            <label className="py-2 primary-950 manrope-600" htmlFor="trackId">
              Tracks
            </label>
            <select
              id="trackId"
              name="trackId"
              className="form-select rounded-4"
              defaultValue={selectedTrackId}
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
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Save"
            action={() => {}}
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
  closeModal: () => void;
}

export default AddTask;
