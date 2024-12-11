import React, { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import { axiosPrivate } from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";

const UploadParticipants: FC<IUploadParticipants> = ({ onSubmit, hasTrack }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tracks, setTracks] = useState<Array<ITracks>>([])
  const [currentTrack, setCurrentTrack] = useState<string>("");
  const { activeCohort } = useContext(ProgramContext)
  const [api, contextHolder] = notification.useNotification()

  const handleFileInput = async (file: File) => {
    setIsLoading(true);
  
    try {
      // Construct the endpoint dynamically
      const endpoint = hasTrack
        ? `/cohort/${activeCohort.id}/upload-participants-csv?track=${currentTrack}`
        : `/cohort/${activeCohort.id}/upload-participants-csv?track=General`;
  
      // Validate track name if `hasTrack` is true
      if (hasTrack && currentTrack.trim() === '') {
        api.warning({
          message: 'Track name is required when adding participants to a track.',
          placement: 'top',
        });
        setIsLoading(false);
        return;
      }
  
      // Send the file to the endpoint
      const response = await axiosPrivate.put(endpoint, file);
      console.log('Upload response:', response);
  
      // Update state with the track name and CSV file name
      if (hasTrack && currentTrack.trim() !== '') {
        setTracks([
          ...tracks,
          { name: currentTrack, file: file.name },
        ]);

      }
  
      // Notify user of success
      api.success({
        message: 'File uploaded successfully!',
        placement: 'top',
      });
  
      // Trigger additional action if required
      onSubmit();
    } catch (error: any) {
      console.error('Error uploading file:', error);
  
      api.error({
        message: "Error uploading file",
        placement: 'topRight',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <>
      {contextHolder}
      <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
        <ProgressBar
          height={8}
          length={3}
          page={2}
          absolute={true}
          gap
          rounded={false}
        />
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">
            Upload Cohort Participants
          </h1>
          <span className="manrope-500 dark-700 fs-body">
            Upload a list of your learners based on their respective tracks
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          {/* <TextInput id='track' label='Upload Participants List' placeHolder='Pick track' onchange={() => { }} /> */}

          {
            hasTrack &&
            <div>
            <TextInput
              id="track"
              label="Tracks"
              placeHolder="Type a track and press Enter"
              onchange={(e)=>setCurrentTrack(e.target.value)}
              // onKeyDown={handleTrackAdd}
              value={currentTrack}
              // tracks={tracks}
              // onRemove={handleTrackRemove} // Handle item removal
            />
          </div>
          }

          <DragNDropInput
            label=""
            id="thumbnail-upload"
            detail="Cohort's list of Participants"
            onchange={(file: any) => handleFileInput(file)}
          />
          <span className="fs-caption primary-400">
            A csv (Comma separated Values) File containing First names, Last
            names and Emails of Participants
          </span>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={onSubmit}
            type="button"
            fill={true}
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
};

interface IUploadParticipants {
  onSubmit: () => void;
  hasTrack: boolean;
}

interface ITracks {
  name: string,
  file: string
}

export default UploadParticipants;
