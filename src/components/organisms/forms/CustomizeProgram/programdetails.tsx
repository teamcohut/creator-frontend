import React, { useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import { notification } from "antd";

interface ProgramDetailProps {
  onContinue: (data: {
    title: string;
    description: string;
    format: string;
  }) => void;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ onContinue }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("");

  const handleFormatSelect = (selectedFormat: string) => {
    setFormat(selectedFormat);
  };

  const handleContinue = () => {
    if (!title || !description || !format) {
      notification.error({ message: "Please fill in all fields, including selecting a format." });
      return;
    }
    onContinue({ title, description, format });
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar
        height={8}
        length={2}
        page={1}
        absolute={true}
        gap
        rounded={false}
      />
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Program Details</h1>
        <span className="manrope-500 dark-700 fs-body">
          Let&apos;s input what makes your learning program special
        </span>
      </div>
      <div className="d-flex flex-column gap-4">
        <TextInput
          label="Program Title"
          id="programtitle"
          placeHolder="Enter Title"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <TextAreaInput
          label="Description"
          id="description"
          placeHolder="What is your program about?"
          onchange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />
        <div className="d-flex flex-column">
          <p className="manrope-600 primary-950 fs-body">Program Format</p>
          <div className="d-flex flex-row gap-3">
            {["hybrid", "virtual", "physical"].map((option: any) => (
              <button
                key={option}
                type="button"
                className={`format-option ${format === option ? "selected" : ""
                  }`}
                onClick={() => handleFormatSelect(option)}
                style={{
                  padding: "8px 16px",
                  border: "1px solid #ecf1ff",
                  borderRadius: "8px",
                  background: format === option ? "#ecf1ff" : "#fff",
                  color: format === option ? "#191650" : "#888888",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Button
          children="Continue"
          action={handleContinue}
          type="button"
          fill={true}
        />
      </div>
    </form>
  );
};

export default ProgramDetail;
