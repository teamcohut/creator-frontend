import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import "../../style.css";
import DateInput from "../../../atoms/inputs/DateInput";
import { ICohort } from "../../../../@types/dashboard.interface";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import TextInput from "../../../atoms/inputs/TextInput";

const OnboardCohortModal: FC<IOnboardCohortModal> = ({ onSubmit }) => {
  const { activeProgram } = useContext(ProgramContext);
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [form, setForm] = useState<ICohort>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    hasTrack: false,
    program: activeProgram._id,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handleInputChange = (
    name: string,
    value: string | boolean | number
  ) => {
    console.log(name, " : ", value);

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.name === "" || form.endDate === "" || form.startDate === "") {
      api.warning({
        message: "Please enter all input fields",
        placement: "top",
      });
      setIsLoading(false);
      return;
    }
    console.log(form);
    await onSubmit(form);
    setIsLoading(false);
  };

  return (
    <>
      {contextHolder}
      <form
        className="form bg-white d-flex flex-column rounded-5 mx-auto"
        onSubmit={handleSubmit}
        action=""
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
          <h1 className="manrope-600 primary-950 fs-h2">Onboard New Cohort</h1>
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
            action={() => { }}
            type="submit"
            fill={true}
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
};

interface IOnboardCohortModal {
  onSubmit: (cohort: ICohort) => void;
}

export default OnboardCohortModal;
