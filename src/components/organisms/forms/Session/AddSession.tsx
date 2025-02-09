import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker, notification } from "antd";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import { FiX } from "react-icons/fi";
import dayjs from "dayjs";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";

interface ISessionModal {
  onSubmit: (data: any) => void;
  closeModal: any;
  initialData: Record<string, any>;
}

const AddSession: React.FC<ISessionModal> = ({ initialData, onSubmit, closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    description: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...initialData,
    }));
  }, [initialData]);

  const handleDateChange = (date: any, dateString: any) => {
    setFormData((prev) => ({ ...prev, date: dateString }));
  };

  const handleTimeChange = (field: any) => (time: any, timeString: any) => {
    setFormData((prev) => ({ ...prev, [field]: timeString }));
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.date || !formData.start || !formData.end) {
      notification.error({ message: "Please fill all required fields." });
      return;
    }
    onSubmit(formData);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar height={8} length={2} page={1} absolute={true} gap rounded={false} />
      <div className="d-flex flex-column gap-2">
        <div className="d-flex flex-row justify-content-between">
          <h1 className="manrope-600 primary-950 fs-h2">Add New Session</h1>
          <button onClick={closeModal} className="border-none bg-transparent">
          <FiX className="fs-h3" />
          </button>
        </div>
        <span className="manrope-500 dark-700 fs-body">
          Schedule a live session or event and notify participants.
        </span>
      </div>

      <div className="d-flex flex-column gap-4">
        <div>
          <div className="d-flex flex-row align-items-end gap-3">
            <div className="w-35">
              <label htmlFor="date-picker" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                Select Date
              </label>
              <DatePicker
                className="rounded-5"
                value={formData.date ? dayjs(formData.date, "YYYY-MM-DD") : null}
                onChange={handleDateChange}
                placeholder="Select Date"
              />
            </div>
            <TimePicker
              className="rounded-5"
              value={formData.start ? dayjs(formData.start, "HH:mm") : null}
              onChange={handleTimeChange("start")}
              placeholder="Start Time"
              format="HH:mm"
            />
            <TimePicker
              className="rounded-5"
              value={formData.end ? dayjs(formData.end, "HH:mm") : null}
              onChange={handleTimeChange("end")}
              placeholder="End Time"
              format="HH:mm"
            />
          </div>
        </div>
        <TextInput
          id="title"
          label="Session Title"
          placeHolder="Enter Title"
          onchange={handleInputChange}
          value={formData.title}
        />
        <TextAreaInput
          id="description"
          label="Session Description"
          placeHolder="Enter Description"
          onchange={handleInputChange}
          defaultValue={formData.description}
        />
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <Button children="Continue" action={handleSubmit} type="button" fill={true} />
      </div>
    </form>
  );
};

export default AddSession;

