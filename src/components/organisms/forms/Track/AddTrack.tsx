import React, { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import TextInput from "../../../atoms/inputs/TextInput";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import { notification } from "antd";
import { useMutation,useQueryClient  } from "@tanstack/react-query";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import api from "../../../../api/axios";

interface IAddTrack {
  closeModal: () => void;
}

const AddTrack: FC<IAddTrack> = ({ closeModal }) => {
  const { activeCohort } = useContext(ProgramContext);
  const [trackName, setTrackName] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient(); 

  const createTrackMutation = useMutation({
    mutationFn: (payload: { name: string; file?: File }) => {
      const formData = new FormData();
      formData.append("title", payload.name);
      formData.append("cohort", activeCohort?._id);
      formData.append("description", "Track description");

      if (!activeCohort?._id) {
        throw new Error("No active cohort selected");
      }

      return api.track.createTrack(formData);
    },
    onSuccess: (response) => {
      notification.success({
        message: "Track created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["track", activeCohort] });

      closeModal();
    },
    onError: (error: any) => {
      let errorMessage = "Failed to create track. Please try again.";
      console.error("Track creation error:", error.response?.data || error);

      if (error.response?.data?.errors?.[0]) {
        errorMessage = error.response.data.errors[0];
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      notification.error({
        message: errorMessage,
      });
    },
  });

  const handleSubmit = () => {
    if (showUpload && !file) {
      notification.error({ message: "Please upload a CSV file" });
      return;
    }
    if (!trackName.trim()) {
      notification.error({ message: "Please enter a track name" });
      return;
    }
    createTrackMutation.mutate({ name: trackName, file: file || undefined });
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (!file.name.endsWith(".csv")) {
        notification.error({ message: "Please upload a CSV file" });
        return;
      }
      setFile(file);
    } else {
      setFile(null);
    }
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <div
        className="d-flex flex-column"
        style={{ minHeight: "400px", padding: "1.5rem" }}
      >
        <div className="d-flex flex-row justify-content-between align-items-center mb-4">
          <div className="d-flex gap-2 align-items-center">
            <FiArrowLeft 
              className="cursor-pointer" 
              onClick={() => showUpload ? setShowUpload(false) : closeModal()} 
            />
            <span>Back</span>
          </div>
          <FiX className="cursor-pointer fs-h3" onClick={closeModal} />
        </div>

        <div className="d-flex flex-column gap-2 mb-5">
          <h1 className="manrope-600 primary-950 fs-h2">Add New Track</h1>
          <span className="manrope-500 dark-700 fs-body">
            Create a new learning track for your cohort
          </span>
        </div>

        <div className="d-flex flex-column gap-4 flex-grow-1">
          <div>
            <label className="mb-2 d-block manrope-600">Learning Track</label>
            <TextInput
              id="track-name"
              placeHolder="Enter Learning Track"
              value={trackName}
              onchange={(e) => setTrackName(e.target.value)}
            />
          </div>

          <div
            className={`cursor-pointer ${
              showUpload ? 'text-black' : trackName.trim() ? "primary-600" : "text-gray-400"
            }`}
            style={{ margin: "0" }}
            onClick={() => trackName.trim() && setShowUpload(true)}
          >
            {showUpload ? "Upload Participants list" : "Upload New Participants +"}
          </div>

          {/* Placeholder div when upload section is not shown */}
          {!showUpload && <div style={{ height: "229.5px" }}></div>}

          {showUpload && (
            <div className="mt-0">
              <DragNDropInput
                id="participant-upload"
                onchange={handleFileChange}
                accept=".csv"
                detail="CSV file"
                description={<></>}
              />
              <p className="text-start mb-0 primary-600" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                A .csv (Comma Separated Values) File containing First names, Last names and Emails of Participants
              </p>
            </div>
          )}

          <div className="flex-grow-1" style={{ minHeight: "40px" }}></div>
        </div>

        <div className="mt-auto">  {/* Removed pt-4 */}
          <Button
            children="Continue"
            action={handleSubmit}
            type="button"
            fill={true}
            loading={createTrackMutation.isPending}
            disabled={!trackName.trim()}
          />
        </div>
      </div>
    </form>
  );
};

export default AddTrack;
