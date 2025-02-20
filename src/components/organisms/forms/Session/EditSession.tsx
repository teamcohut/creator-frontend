import React, { useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import { DatePicker, TimePicker, notification } from "antd";
import "../../style.css";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import dayjs from "dayjs";

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
  const sessionId = localStorage.getItem('sessionId') || '';

  const handleDateChange = (date: dayjs.Dayjs | null, dateString: string | string[]) => {
    setFormData(prev => ({ 
      ...prev, 
      date: Array.isArray(dateString) ? dateString[0] : dateString,
      // Reset times when date changes to prevent invalid combinations
      start: "",
      end: "" 
    }));
  };

  const handleTimeChange = (field: "start" | "end") => (time: dayjs.Dayjs | null, timeString: string | string[]) => {
    if (!time) {
      setFormData((prev) => ({ ...prev, [field]: "" }));
      return;
    }

    setFormData((prev) => {
      const timeStr = Array.isArray(timeString) ? timeString[0] : timeString;
      const newData = { ...prev, [field]: timeStr };

      if (field === 'start') {
        const startTime = dayjs(timeStr, 'HH:mm');
        const suggestedEndTime = startTime.add(1, 'hour');
        newData.end = suggestedEndTime.format('HH:mm');

        if (prev.end) {
          const endTime = dayjs(prev.end, 'HH:mm');
          const minEndTime = startTime.add(30, 'minute');
          
          if (endTime.isBefore(minEndTime)) {
            notification.warning({ message: "End time adjusted to ensure minimum 30-minute duration" });
          }
        }
      }

      if (field === 'end' && newData.start) {
        const startTime = dayjs(newData.start, 'HH:mm');
        const endTime = dayjs(timeStr, 'HH:mm');
        const minEndTime = startTime.add(30, 'minute');
        
        if (endTime.isBefore(minEndTime)) {
          notification.error({ message: "Session must be at least 30 minutes long" });
          return prev;
        }
      }

      return newData;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // const validateForm = () => {
  //   if (!formData.title || !formData.date || !formData.start || !formData.end) {
  //     notification.error({ message: "Please fill all required fields." });
  //     return false;
  //   }
  //   return true;
  // };

  const nextPage = () => {
    // if (validateForm()) {
      onSubmit(formData);
    // }
  };

  const sessionMutation = useMutation({
    mutationFn: (payload: any) => api.session.editSession(payload, sessionId),
    onSuccess: () => {
      notification.success({ message: "Session details updated successfully!" });
    },
    onError: (error: any) => {
      notification.error({ message: "Failed to update. Please try again." });
    },
  });

  const handleSubmit = () => {
    // if (validateForm()) {
    console.log(formData);
    
      sessionMutation.mutate(formData);
    // }
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar height={8} length={2} page={1} absolute={true} gap rounded={false} />
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Session Details</h1>
        <span className="manrope-500 dark-700 fs-body">
          Edit and manage the details of your rescheduled session.
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
                disabledDate={(current) => {
                  return current && current < dayjs().startOf('day');
                }}
              />
            </div>
            <TimePicker
              className="rounded-5"
              value={formData.start ? dayjs(formData.start, "HH:mm") : null}
              onChange={handleTimeChange("start")}
              placeholder="Start Time"
              format="HH:mm"
              changeOnBlur
              showNow
              disabledTime={() => {
                if (!formData.date) return { disabledHours: () => [], disabledMinutes: () => [] };
                
                const currentDate = dayjs(formData.date).startOf('day');
                const today = dayjs().startOf('day');
                const currentHour = dayjs().hour();
                const currentMinute = dayjs().minute();

                return {
                  disabledHours: () => {
                    if (currentDate.isSame(today)) {
                      return Array.from({ length: currentHour }, (_, i) => i);
                    }
                    return [];
                  },
                  disabledMinutes: (selectedHour) => {
                    if (currentDate.isSame(today) && selectedHour === currentHour) {
                      return Array.from({ length: currentMinute }, (_, i) => i);
                    }
                    return [];
                  }
                };
              }}
            />
            <TimePicker
              className="rounded-5"
              value={formData.end ? dayjs(formData.end, "HH:mm") : null}
              onChange={handleTimeChange("end")}
              placeholder="End Time"
              format="HH:mm"
              changeOnBlur
              showNow={false}
              disabledTime={() => ({
                disabledHours: () => {
                  if (!formData.start) return [];
                  const startTime = dayjs(formData.start, 'HH:mm');
                  const currentHour = startTime.hour();
                  return Array.from({ length: currentHour }, (_, i) => i);
                },
                disabledMinutes: (selectedHour) => {
                  if (!formData.start) return [];
                  const startTime = dayjs(formData.start, 'HH:mm');
                  const startHour = startTime.hour();
                  
                  if (selectedHour === startHour) {
                    const minEndMinute = startTime.minute() + 30;
                    return Array.from({ length: minEndMinute }, (_, i) => i);
                  }
                  if (selectedHour < startHour) {
                    return Array.from({ length: 60 }, (_, i) => i);
                  }
                  return [];
                }
              })}
            />
          </div>
        </div>
        <TextInput
          id="title"
          label="Session Title"
          placeHolder="Enter Title"
          onchange={handleInputChange}  // Changed back to onchange (lowercase)
          value={formData.title}
        />
        <TextAreaInput
          id="description"
          label="Session Description"
          placeHolder="Enter Description"
          onchange={handleInputChange}  // Changed back to onchange (lowercase)
          defaultValue={formData.description}
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <Button children="Continue" action={nextPage} type="button" fill={false} border outline="primary" />
        <Button action={handleSubmit} children="Save Changes" fill type="button" loading={sessionMutation.isPending} />
      </div>
    </form>
  );
};

export default EditSession;

