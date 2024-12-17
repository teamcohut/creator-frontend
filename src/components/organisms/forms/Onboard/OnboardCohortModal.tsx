import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import "../../style.css";
import DateInput from "../../../atoms/inputs/DateInput";
import { ICohort } from "../../../../@types/dashboard.interface";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import TextInput from "../../../atoms/inputs/TextInput";
import { FiX } from "react-icons/fi";

const OnboardCohortModal: FC<IOnboardCohortModal> = ({ onSubmit, pending, closeModal }) => {
  const { activeProgram } = useContext(ProgramContext);
  const [api, contextHolder] = notification.useNotification();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const programId = localStorage.getItem('programId') || activeProgram._id

  const [form, setForm] = useState<ICohort>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    hasTrack: false,
    program: programId,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handleInputChange = (
    name: string,
    value: string | boolean | number
  ) => {
    console.log(name, " : ", value);

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (form.name === "" || form.endDate === "" || form.startDate === "") {
      api.warning({
        message: "Please enter all input fields",
        placement: "top",
      });
      return;
    }
    console.log(form);
    await onSubmit(form);
  };

  return (
    <>
      {contextHolder}
      <div
        className="form bg-white d-flex flex-column rounded-5 mx-auto"
      >
        {/* Progress bar dynamically changes length */}
        <ProgressBar
          height={8}
          length={2} // Adjust progress bar length based on state
          page={1}
          absolute={true}
          gap
          rounded={false}
        />
        <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-row justify-content-between">
            <h1 className="manrope-600 primary-950 fs-h2">Onboard New Cohort</h1>
            <FiX className="fs-h3" onClick={closeModal} />
          </div>
          <span className="manrope-500 dark-700 fs-body">
            Let's invite and guide your Cohort to Success
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <div className="">
            <TextInput
              id="name"
              onchange={(e) => handleInputChange(e.target.name, e.target.value)}
              placeHolder="E.g; Cohort 1"
              label="Cohort Name"
            />
          </div>

          <div className="d-flex flex-row align-items-end gap-3">
            <DateInput
              id="startDate"
              onchange={(e) => handleInputChange(e.target.name, e.target.value)}
              placeHolder=""
              label="Set Cohort Duration"
            />
            <h2>-</h2>
            <DateInput
              id="endDate"
              onchange={(e) => handleInputChange(e.target.name, e.target.value)}
              placeHolder=""
            />
          </div>
          {/* Checkbox to toggle track */}
          <div className="d-flex flex-column gap-2">
            <label className="d-flex gap-2 manrope-500" htmlFor="hasTrack">
              <input
                type="checkbox"
                id="hasTrack"
                name="hasTrack"
                defaultChecked={form.hasTrack}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.checked)
                } // Update state
              />
              Enable Tracks
            </label>
            <p className="fs-caption primary-400">
              (E.g Data Analysis, Software Engineering, Product Design)
            </p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={handleSubmit}
            type="button"
            fill={true}
            loading={pending}
          />
        </div>
      </div>
    </>
  );
};

interface IOnboardCohortModal {
  onSubmit: (cohort: ICohort) => void;
  pending: boolean;
  closeModal: any;
}

export default OnboardCohortModal;
