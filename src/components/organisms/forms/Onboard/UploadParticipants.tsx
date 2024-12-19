import React, { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextInput from "../../../atoms/inputs/TextInput";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import api from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { FaFileCsv } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Track from "../../../molecules/dashboard/Track";

const UploadParticipants: FC<IUploadParticipants> = ({
  onSubmit,
  hasTrack,
  closeModal,
}) => {
  const [tracks, setTracks] = useState<{ name: string; file?: File | null }[]>([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<{ name: string; file: File | null }>({ name: "", file: null });
  const { activeCohort } = useContext(ProgramContext);

  const inviteParticipantsMutation = useMutation({
    mutationFn: (payload: { track: string; file: File }) =>
      api.participant.inviteGroupParticipant(
        activeCohort?._id,
        payload.track,
        payload.file,
      ),
    onSuccess: () => {
      notification.success({ message: "Participants invited successfully!" });
      setTracks([...tracks, currentTrack]);
      setCurrentTrack({ name: "", file: null });
      setFormVisible(false);
      if (!hasTrack) {
        onSubmit()
      }
    },
    onError: () => {
      notification.error({
        message: "Failed to invite participants. Please try again.",
      });
    },
  });

  const handleTrackChange = (name: string) => {
    setCurrentTrack({ ...currentTrack, name });
  };

  const handleFileChange = (file: File) => {
    setCurrentTrack({ ...currentTrack, file });
  };

  const removeTrack = (index: number) => {
    const updatedTracks = tracks.filter((_, i) => i !== index);
    setTracks(updatedTracks);
  };

  const handleAddTrackClick = () => {
    setFormVisible(true);
  };

  const handleSubmitForm = () => {
    if (hasTrack && (!currentTrack.name || !currentTrack.file)) {
      notification.error({
        message: "Please provide both a track name and a file.",
      });
      return
    }
    inviteParticipantsMutation.mutate({
      track: currentTrack.name,
      file: currentTrack.file!,
    });
  };

  return (
    <>
      <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
        <ProgressBar
          height={8}
          length={2}
          page={2}
          absolute={true}
          gap
          rounded={false}
        />
        <div className="d-flex flex-row justify-content-between">
          <FiX className="fs-h3" onClick={closeModal} />
        </div>
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">
            Upload Cohort Participants
          </h1>
          <span className="manrope-500 dark-700 fs-body">
            Upload a list of your learners based on their respective tracks
          </span>
        </div>

        {
          hasTrack ?
            <div className="d-flex flex-column gap-4">
              {tracks.map((track, index) => (
                <Track
                  key={index}
                  name={track.name}
                  fileName={track.file?.name || ""}
                  onRemove={() => removeTrack(index)}
                />
              ))}

              {isFormVisible && (
                <div className="d-flex flex-column mb-4 gap-4">
                  <TextInput
                    id="track-name"
                    label="Track Name"
                    placeHolder="Enter Learning Track"
                    value={currentTrack.name}
                    onchange={(e) => handleTrackChange(e.target.value)}
                  />
                  <DragNDropInput
                    label="Upload Participants List"
                    icon={<FaFileCsv className="fs-small-icon dark-300" />}
                    id="file-upload"
                    detail="Cohort's list of Participants"
                    onchange={(file: any) => handleFileChange(file)}
                  />
                  <Button
                    children="Submit Track"
                    action={handleSubmitForm}
                    type="button"
                    fill={false}
                    outline='primary'
                    loading={inviteParticipantsMutation.isPending}
                  />
                </div>
              )}

              {!isFormVisible && (
                <Button
                  children="Add Track"
                  action={handleAddTrackClick}
                  type="button"
                  border
                  fill={false}
                />
              )}
            </div> :
            <DragNDropInput
              label="Upload Participants List"
              icon={<FaFileCsv className="fs-small-icon dark-300" />}
              id="file-upload"
              detail="Cohort's list of Participants"
              onchange={(file: any) => handleFileChange(file)}
            />
        }

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={() => {
              hasTrack ?
                onSubmit() :
                handleSubmitForm()
            }}
            type="button"
            fill={true}
            loading={inviteParticipantsMutation.isPending}
          />
        </div>
      </form>
    </>
  );
};

interface IUploadParticipants {
  onSubmit: () => void;
  hasTrack: boolean;
  closeModal: any;
}

export default UploadParticipants;