import React, { useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import "../../style.css";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { TModal } from "../../../../@types/dashboard.interface";


interface IAdditionalSessionProps {
  initialData: any;
  onSuccess: () => void;
  setModal: (open: boolean, name: TModal) => void;
  prevStep: () => void;
}

const EditAdditionalSession: React.FC<IAdditionalSessionProps> = ({ initialData, onSuccess, setModal, prevStep }) => {
  const { activeCohort } = useContext(ProgramContext);

  const [locationType, setLocationType] = useState<string>("Online");
  const [formData, setFormData] = useState({
    // track: "",
    resources: "",
    address: "",
    cohort: activeCohort.id,
    sessionLink: "google",
    location: { name: locationType },
  });
  const sessionId = localStorage.getItem('sessionId') || ''


  const tracks = activeCohort?.tracks;



  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setLocationType(value);
    setFormData((prev) => ({
      ...prev,
      location: { ...prev.location, name: value, },
    }));
  };

  const handleChange = (
    id: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  const sessionMutation = useMutation({
    mutationFn: (payload: any) => axiosAPI.session.editSession(payload, sessionId),
    onSuccess: () => {
      notification.success({ message: "Session updated successfully!" });
      onSuccess();
    },
    onError: (error: any) => {
      notification.error({ message: "Failed to update. Please try again." });
    },
  });

  const handleSubmit = () => {
    const payload = { ...initialData, ...formData };
    payload.location.address = formData.address;

    sessionMutation.mutate(payload);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar height={8} length={2} page={2} absolute={true} gap rounded={false} />
      <div className="d-flex flex-row justify-content-between">
        <button className="border-none bg-transparent" onClick={prevStep}><FiArrowLeft /> Back</button>
        <button onClick={()=> setModal(false, 'session')} className="border-none bg-transparent">
          <FiX className="fs-h3" />
        </button>
      </div>
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Additional Session Info</h1>
        <span className="manrope-500 dark-700 fs-body">
          Add more information for your participants.
        </span>
      </div>

      <div className="d-flex flex-column gap-4">
        <div>
          <label className="mb-2 d-block manrope-600">Location</label>
          <div className="location-input-wrapper rounded-5" style={{ height: '48px' }}>
            <select
              value={locationType}
              onChange={handleDropdownChange}
              className="location-dropdown rounded-5"
              style={{ height: '100%' }}
            >
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
            </select>
            <input
              type="text"
              placeholder={locationType === "Online" ? "Link" : "Address"}
              className="location-text border-0"
              style={{ height: '100%' }}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 d-block manrope-600" htmlFor="trackId">Tracks</label>
          <select
            id="trackId"
            name="trackId"
            className="form-select rounded-5"
            style={{ height: '48px', padding: '12px' }}
            defaultValue={''}
            onChange={(e) => handleChange("track", e.target.value)}
          >
            <option value="" disabled>Select a Track</option>
            {tracks?.map((track: any) => (
              <option key={track.id} value={track.id}>{track.title}</option>
            ))}
          </select>
        </div>

        <TextAreaInput
          id="resources"
          label="Useful Links/Resources"
          placeHolder="Add Resources"
          onchange={(e) => handleChange("resources", e.target.value)}
        />

      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <Button children="Save Changes" action={handleSubmit} loading={sessionMutation.isPending} type="button" fill={true} />
      </div>
    </form>
  );
};

export default EditAdditionalSession;



