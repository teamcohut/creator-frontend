import React, { FC, useState } from 'react';
import Button from '../../../atoms/Button';
import DragNDropInput from '../../../atoms/inputs/DragNDropInput';
import { useMutation } from '@tanstack/react-query';
import axiosAPI from '../../../../api/axios';

interface Track {
    id: string;
    title: string;
}

interface GroupInviteProps {
    tracks: Track[];
    cohortId: string;
}

const GroupInvite: FC<GroupInviteProps> = ({ tracks, cohortId }) => {
    const [selectedTrackId, setSelectedTrackId] = useState('');
    const [csvFile, setCsvFile] = useState<File | null>(null);

    const inviteGroupMutation = useMutation({
        mutationFn: (payload: File) =>
            axiosAPI.participant.inviteGroupParticipant(cohortId, selectedTrackId, payload),
        onSuccess: () => {
            alert('Participants invited successfully!');
            setSelectedTrackId('');
            setCsvFile(null);
        },
        onError: (error: any) => {
            console.error(error);
            alert('Failed to invite participants. Please try again.');
        },
    });

    const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTrackId(e.target.value);
    };

    const handleFileChange = (file: File) => {
        console.log('Uploaded file:', file);
        setCsvFile(file);
    };

    const handleSubmit = () => {
        if (!selectedTrackId) {
            alert('Please select a track.');
            return;
        }

        if (!csvFile) {
            alert('Please upload a CSV file.');
            return;
        }

        inviteGroupMutation.mutate(csvFile);
    };

    return (
        <div className="d-flex flex-column gap-4">
            <div>
                <label htmlFor="trackId">Tracks</label>
                <select
                    id="trackId"
                    name="trackId"
                    className="form-select"
                    value={selectedTrackId}
                    onChange={handleTrackChange}
                >
                    <option value="" disabled>
                        Select a Track
                    </option>
                    {tracks?.map((track) => (
                        <option key={track.id} value={track.id}>
                            {track.title}
                        </option>
                    ))}
                </select>
            </div>
            <DragNDropInput
                label=""
                id="thumbnail-upload"
                detail="Upload the cohort's list of participants (CSV)"
                onchange={(file: any) => handleFileChange(file)}
            />
            <div className="d-flex flex-column align-items-center gap-3 mt-4">
                <Button
                    children="Invite"
                    action={handleSubmit}
                    type="button"
                    fill={true}
                    loading={inviteGroupMutation.isPending}
                />
            </div>
        </div>
    );
};

export default GroupInvite;
