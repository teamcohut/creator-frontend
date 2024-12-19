import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FiSave, FiTrash2 } from "react-icons/fi";
import { notification, Select } from "antd";
import api from "../../../api/axios";
import { ProgramContext } from "../../../context/programs/ProgramContext";
import { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import OutlineButton from "../../../components/atoms/Button/OutlineButton";
import DeleteCohortModal from "../../../components/organisms/dashboard/modals/DeleteCohortModal";
import DateInput2 from "../../../components/atoms/inputs/DateInput2";
import TextAreaInput from "../../../components/atoms/inputs/TextareaInput";
import { TModal } from "../../../@types/dashboard.interface";
import SetupCohort from "../../../components/organisms/dashboard/SetupProgram/SetupCohort";
import { Option } from "antd/es/mentions";
import { ITrack } from "../../../@types/settings.interface";

const CohortSettings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch, activeCohort } = useContext(ProgramContext);
  const [cohortName, setCohortName] = useState(activeCohort?.name);
  const [startDate, setStartDate] = useState(
    activeCohort?.startDate?.split("T")[0]
  );
  const [endDate, setEndDate] = useState(activeCohort?.endDate?.split("T")[0]);
  const [tags, setTags] = useState(activeCohort?.tracks)
  const [message, setMessage] = useState(activeCohort?.graduationMessage)
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });

  const tracks: ITrack[] = activeCohort?.tracks;

  const handleTagsChange = (value: ITrack[]) => {
    setTags(value);
  };

  const handleChange = (e: any) => {
    setCohortName(e.target.value);
  };

  const tagRender = (props: any) => {
    const { label, closable, onClose } = props;

    return (
      <span
        style={{
          borderRadius: "20px",
          backgroundColor: "#ECF1FF",
          color: "#888888",
          padding: "4px 12px",
          display: "inline-flex",
          alignItems: "center",
          margin: "8px",
        }}
      >
        {label}
        {closable && (
          <span
            onClick={onClose} // Call the default onClose to remove the tag
            style={{
              marginLeft: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            &#x78;
          </span>
        )}
      </span>
    );
  };

  const updateCohortInfoMutation = useMutation({
    mutationFn: (payload: any) =>
      api.cohort.updateCohort(activeCohort.id, payload),
    onSuccess: (data: any) => {
      notification.success({ message: "Account updated successfully" });
      dispatch({ type: "ACTIVE_COHORT", payload: data.data.data });
    },
    onError: (error: any) => {
      let errorMessage = "An unexpected error occurred.";

      if (error.response?.data) {
        // Handle backend-provided error messages
        if (
          Array.isArray(error.response.data.errors) &&
          error.response.data.errors.length > 0
        ) {
          errorMessage = error.response.data.errors[0];
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.message) {
        // Handle JavaScript errors or other network issues
        errorMessage = error.message;
      }

      // Special case for ObjectId casting error
      if (errorMessage.includes("Cast to ObjectId failed")) {
        errorMessage =
          "No cohort found, setup your program and onboard new cohort.";
      }

      // Display the notification
      notification.error({
        message: errorMessage,
      });
    },
  });

  const setModalOpenState = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hoverStyle = isHovered
    ? {
        color: "var(--primary-800) !important",
        borderColor: "var(--primary-800) !important",
      }
    : {};

  return (
    <>
      {activeCohort.id ? (
        <div>
          <div className="w-75">
            <div className="d-flex gap-2">
              <p className="d-flex justify-content-center align-items-center w-45">
                <TextInput2
                  id="cohort-name"
                  placeHolder="Cohut123"
                  label="Cohort Name"
                  onchange={handleChange}
                  defaultValue={activeCohort?.name}
                />
              </p>
            </div>
            <div className="d-flex flex-row align-items-end gap-3 pt-4 pb-4">
              <DateInput2
                id="startDate"
                onchange={(e) => setStartDate(e.target.value)}
                placeHolder=""
                label="Set Cohort Duration"
                value={activeCohort?.startDate?.split("T")[0]}
              />
              <h3 className="dark-700">-</h3>
              <DateInput2
                id="endDate"
                onchange={(e) => {
                  setEndDate(e.target.value);
                }}
                placeHolder="mm/dd/yy"
                value={activeCohort?.endDate?.split("T")[0]}
              />
            </div>

            <span className='fs-body manrope-600 primary-950'>Track</span>

      <Select
      mode="tags"
      style={{ width: "100%" }}
      tagRender={tagRender}
      placeholder="Input and press 'Enter' to add a track or simply select one"
      defaultValue={activeCohort?.tracks}
      onChange={handleTagsChange}
      >
      {tracks.map((option, i) => (
        <Option value={option.title}>
          {option.title}
        </Option>
      ))}
    </Select>
    <div className='pb-4'></div>

            {/* <TextInput2 id='link' 
          label='Link to Generate Certificate' 
          placeHolder='Unique link for learners to access their certificates' 
          icon={<FiLink/>} 
        />
        
        <span className='fs-small manrope-500 primary-700'>
          You'll need to have created digital certificates on an external platform
        </span> */}
            <div className="pb-3"></div>

            <TextAreaInput
              id="message"
              placeHolder="Enter Text"
              label="Graduation Message"
              defaultValue={activeCohort.graduationMessage}
              onchange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <span className="fs-small manrope-500 primary-700">
              Once you graduate a learner, this message will automatically get
              sent to them
            </span>

            <div className="pb-4"></div>
            <div className="pb-3"></div>

            <OutlineButton
              action={() => {
                updateCohortInfoMutation.mutate({
                  name: cohortName,
                  startDate,
                  endDate,
                  graduationMessage: message,
                });
              }}
              type="button"
              fill={false}
              outline="primary"
              gap={true}
              width={120}
              border={true}
              customStyle={hoverStyle}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              loading={updateCohortInfoMutation.isPending}
              disabled={updateCohortInfoMutation.isPending}
            >
              <FiSave />
              <span>Save</span>
            </OutlineButton>

            <div className="pb-5"></div>
            <div className="pb-4"></div>

            <div>
              <h4 className="manrope-600 fs-h4 primary-950 pb-1">
                Danger Zone
              </h4>
              <span
                onClick={() => setModal({ name: "deletecohort", open: true })}
                className="d-flex align-items-center gap-1 manrope-700 fs-body error-400"
                style={{ cursor: "pointer" }}
              >
                Delete Cohort <FiTrash2 />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <SetupCohort />
      )}
      {modal.name === "deletecohort" && (
        <DeleteCohortModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default CohortSettings;
