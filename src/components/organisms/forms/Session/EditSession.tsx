import React, { useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import DateInput from "../../../atoms/inputs/DateInput";
import TimeInput from "../../../atoms/inputs/TimeInput";
import "../../style.css";
import { notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";


interface ISessionModal {
  onSubmit: (data: any) => void;
}

const EditSession: React.FC<ISessionModal> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    description: "",
  });
  const sessionId = localStorage.getItem('sessionId') || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const nextPage = () => {
    if (!formData.title || !formData.date || !formData.start || !formData.end) {
      notification.error({ message: "Please fill all required fields." });
      return;
    }
    onSubmit(formData);
  };

  const sessionMutation = useMutation({
    mutationFn: (payload: any) => api.session.editSession(payload, sessionId),
    onSuccess: () => {
      notification.success({ message: "Session details updated successfully!" });
    },
    onError: (error: any) => {
      console.error(error);
      notification.error({ message: "Failed to update. Please try again." });
    },
  });

  const handleSubmit = () => {
    sessionMutation.mutate(formData);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      {/* <ProgressBar height={8} length={2} page={1} absolute={true} gap rounded={false} /> */}
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Session Details</h1>
        <span className="manrope-500 dark-700 fs-body">
          Edit and manage the details of your rescheduled session.
        </span>
      </div>

      <div className="d-flex flex-column gap-4">
        <div>
          <div className="d-flex flex-row align-items-end">
            <div className="w-35">
              <DateInput id="date" onchange={handleChange} placeHolder="Select date" label="Set a time" />
            </div>
            <TimeInput id="start" onchange={handleChange} placeHolder="Start Time" label="" />
            <TimeInput id="end" onchange={handleChange} placeHolder="End Time" label="" />
          </div>
        </div>
        <TextInput id="title" label="Session Title" placeHolder="Enter Title" onchange={handleChange} />
        <TextAreaInput id="description" label="Session Description" placeHolder="Enter Description" onchange={handleChange} />
      </div>

      <div className="d-flex align-items-center gap-3">
        <Button children="Continue" action={nextPage} type="button" fill={false} border outline="primary" />
        <Button action={handleSubmit} children="Save Changes" fill type="button" loading={sessionMutation.isPending} />
      </div>
    </form>
  );
};

export default EditSession;

