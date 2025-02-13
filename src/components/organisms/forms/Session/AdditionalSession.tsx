import React, { useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import "../../style.css";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import { FiArrowLeft, FiVideo, FiX } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";


interface IAdditionalSessionProps {
  initialData: any;
  onSuccess: () => void;
  closeModal: any;
  prevStep: any;
}

const AdditionalSession: React.FC<IAdditionalSessionProps> = ({ initialData, onSuccess, closeModal, prevStep }) => {
  const { activeCohort } = useContext(ProgramContext);

  const [openLocation, setOpenLocation] = useState(false)
  const [useZoom, setUseZoom] = useState(false)
  // const [locationType, setLocationType] = useState<string>("Online");
  const [formData, setFormData] = useState({
    // track: "",
    resources: "",
    cohort: activeCohort.id,
    sessionLink: "",
    location: {
      name: "Online",
      address: ""
    },
  });


  const tracks = activeCohort?.tracks;



  // const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { value } = e.target;
  //   setLocationType(value);
  //   setFormData((prev) => ({
  //     ...prev,
  //     location: { ...prev.location, name: value, },
  //   }));
  // };

  const handleChange = (
    id: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    value === "" ? setOpenLocation(true) : setOpenLocation(false)
  };

  const changeAddress = (
    id: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      sessionLink: value,
      location: {
        ...prev.location,
        [id]: value,
      }
    }));
    value === "" ? setOpenLocation(true) : setOpenLocation(false)
  };


  const sessionMutation = useMutation({
    mutationFn: (payload: any) => axiosAPI.session.createSession(payload),
    onSuccess: () => {
      notification.success({ message: "Session created successfully!" });
      onSuccess();
    },
    onError: (error: any) => {
      notification.error({ message: "Failed to create session. Please try again." });
    },
  });

  const handleSubmit = () => {
    // console.log(formData);
    
    const payload = { ...initialData, ...formData };
    payload.location.address = formData.location.address;

    console.log(payload);
    
    sessionMutation.mutate(payload);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar height={8} length={2} page={2} absolute={true} gap rounded={false} />
      <div className="d-flex flex-row justify-content-between">
        <p className="" onClick={prevStep}><FiArrowLeft /> Back</p>
        <button onClick={closeModal} className="border-none bg-transparent">
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
          <div className="d-flex flex-column relative w-100">
            <div className="location-input-wrapper w-100 d-flex flex-row gap-2 rounded-5" style={{ height: '48px', border: '1px solid #E5E7EB' }}>
              <label htmlFor="location" className="p-2">
                <CiLocationOn className="fs-h3" />
              </label>

              {useZoom ? (
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <span className="border w-25 rounded-5 px-1 no-wrap overflow-x-hidden">https://zoom.com/u/0</span>
                  <button onClick={() => setUseZoom(false)} className="border-none bg-transparent px-3">
                    <FiX />
                  </button>
                </div>
              ) : (
                <input
                  id="location"
                  type="text"
                  placeholder='Enter location or virtual link'
                  className="location-text border-0 w-100"
                  style={{ height: '100%', outline: 'none' }}
                  onFocus={() => {
                    formData.location.address === "" ? setOpenLocation(!openLocation) : setOpenLocation(false)
                  }}
                  onChange={(e) => changeAddress("address", e.target.value)}
                />
              )}
            </div>
            
            <div className={`w-100 d-flex flex-column gap-4 py-3 rounded-3 shadow ${!openLocation ? 'hidden' : ''}`}>
              <span className="dark-300 fs-small manrope-500 px-3">Virtual Link Options</span>
              <button onClick={() => {
                setUseZoom(true)
                setOpenLocation(false)
                setFormData({
                  ...formData,
                  location: {
                    name: "Online",
                    address: "https://zoom.com/u/0/",
                  }
                })
              }} type="button" className="primary-950 manrope-500 fs-body d-flex justify-content-start align-items-center gap-3 bg-white border-none p-2 px-3">
                <FiVideo className="" />
                Generate Zoom Link
              </button>
            </div>
          </div>
        </div>

        <div>
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
        <Button children="Create Session" action={handleSubmit} loading={sessionMutation.isPending} type="button" fill={true} />
      </div>
    </form>
  );
};

export default AdditionalSession;



