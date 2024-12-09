import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";

const AddSession = () => {
  return (
    <>
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
          <h1 className="manrope-600 primary-950 fs-h2">Add New Session</h1>
          <span className="manrope-500 dark-700 fs-body">
            Sechedule a live session or event and notify participants.
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <div>
            <h2>Set a time</h2>
            <div className="d-flex flex-row">
              <p>01/01/2024</p>
              <p>5:00am</p>
              <p>5:00am</p>
            </div>
          </div>
          <TextInput
            id="zone"
            label=""
            placeHolder="Select Time Zone"
            onchange={() => {}}
          />

          <TextInput
            id="title"
            label="Session Title"
            placeHolder="Enter Title"
            onchange={() => {}}
          />

          <TextAreaInput
            id="description"
            label="Session Description"
            placeHolder="Something about the session"
            onchange={() => {}}
          />
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={() => {}}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </>
  );
};

export default AddSession;
