import React, { FC, useContext, useState } from 'react'
import Button from '../../../atoms/Button'
import DragNDropInput from '../../../atoms/inputs/DragNDropInput'
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";

interface Track {
    id: string;
    title: string;
}

interface IndividualInviteProps {
    tracks: Track[];
    cohortId: string;
}

const GroupInvite: FC<IndividualInviteProps> = ({ tracks, cohortId }) => {
    const [track, setTrack] = useState<string>("Online");

    return (
        <>
            <form className="">
                <div className="d-flex flex-column gap-4">
                    <div>
                        <select id="tracks" name="tracks" className="form-select">
                            <option value="" disabled selected>
                                Select a Track
                            </option>
                            {tracks.map((track: any) => (
                                <option key={track?.id} value={track?.id}>
                                    {track?.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <DragNDropInput
                        label=""
                        id="thumbnail-upload"
                        detail="Cohort's list of Participants"
                        onchange={(file: any) => { }}
                    />
                    <div className="d-flex flex-column align-items-center gap-3 mt-4">
                        <Button
                            children="Invite"
                            action={() => { }}
                            type="button"
                            fill={true}
                        />
                    </div>
                </div>

            </form>
        </>
    )
}

export default GroupInvite