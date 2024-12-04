import React, { FC, useState } from "react";
import Button from "../../../atoms/Button";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";


const UploadParticipants: FC<IUploadParticipants> = ({ onSubmit }) => {

    const [tracks, setTracks] = useState<string[]>([]);
    const [currentTrack, setCurrentTrack] = useState<string>("");

    const handleTrackAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && currentTrack.trim() !== "") {
            e.preventDefault();
            if (!tracks.includes(currentTrack.trim())) {
                setTracks((prevTracks) => [...prevTracks, currentTrack.trim()]);
                setCurrentTrack("");
            }
        }
    };

    const handleTrackRemove = (index: number) => {
        setTracks((prevTracks) => prevTracks.filter((_, i) => i !== index));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTrack(e.target.value); // Update current input value
    };

    return (
        <>
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
                    <h1 className="manrope-600 primary-950 fs-h2">Upload Cohort Participants</h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Upload a list of your learners based on their respective tracks
                    </span>
                </div>

                <div className="d-flex flex-column gap-4">
                    {/* <TextInput id='track' label='Upload Participants List' placeHolder='Pick track' onchange={() => { }} /> */}

                    <div>
                        <TextInput
                            id="track"
                            label="Tracks"
                            placeHolder="Type a track and press Enter"
                            onchange={handleInputChange}
                            onKeyDown={handleTrackAdd}
                            value={currentTrack}
                            tracks={tracks}
                            onRemove={handleTrackRemove} // Handle item removal
                        />
                    </div>

                    <DragNDropInput
                        label=""
                        id="thumbnail-upload"
                        detail="Cohort's list of Participants"
                        onchange={(file) => console.log("Uploaded file:", file)}
                    />
                    <span className="fs-caption primary-400">
                        A csv (Comma separated Values) File containing First names, Last names and Emails of
                        Participants
                    </span>
                </div>

                <div className="d-flex flex-column align-items-center gap-3">
                    <Button
                        children="Continue"
                        action={onSubmit}
                        type="button"
                        fill={true}
                    />
                </div>
            </form>
        </>
    );
};

interface IUploadParticipants {
    onSubmit: () => void
}

export default UploadParticipants;
