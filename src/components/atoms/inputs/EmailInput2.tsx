import { FC, useState } from "react";
import { IEmailInput } from "./types";
import { FiMail } from "react-icons/fi";
import "../style.css";

const EmailInput2: FC<IEmailInput> = (props) => {
  const { id, label, placeholder, onchange, icon, value } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Call the parent onChange handler to update the value in the parent state
    onchange?.(e);

    // Validation for empty or invalid values
    value === "" || value === null || value === undefined
      ? setIsInvalid(true)
      : setIsInvalid(false);
  };

  const handleOnInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsInvalid(true);
  };

  return (
    <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
      {label && (
        <label className="manrope-600 fs-body" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-div d-flex align-items-center gap-2 rounded-pill px-3">
        {icon ? icon : <FiMail className="icon" />}
        <input
          id={id}
          name="email"
          className="input bg-transparent w-100 h-100 border-none"
          type="email"
          placeholder={placeholder}
          value={value} // Controlled value
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          required
        />
      </div>

      {isInvalid && (
        <div className="text-danger fs-caption">
          {label} is required and should be a valid email.
        </div>
      )}
    </div>
  );
};

export default EmailInput2;
