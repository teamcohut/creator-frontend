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
  const [currentTrack, setCurrentTrack] = useState<string>("");
  const { activeCohort } = useContext(ProgramContext)
  const [api, contextHolder] = notification.useNotification()

  const handleFileInput = async (file: any) => {
    setIsLoading(true)
    try {
      if (!hasTrack) {
        const response = await axiosPrivate.post(`/v1/cohort/${activeCohort.id}/upload-participants-csv`, file)
        console.log(response);
        setIsLoading(false)
      } else {
        if (currentTrack === '') {
          api.warning({
            message: 'Enter a track name',
            placement: 'top'
          })
          setIsLoading(false)
          return
        }
        const response = await axiosPrivate.post(`/v1/cohort/${activeCohort.id}/upload-participants-csv/${currentTrack}`, file)
        console.log(response);
        setIsLoading(false)
        onSubmit()
      }

    } catch (error: any) {
      console.log(error);
      api.error({
        message: error.message
      })
      setIsLoading(false)
    }
  }

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

export default UploadParticipants;
