import React, { FC, useState } from 'react';
import Button from '../../../atoms/Button';
import DragNDropInput from '../../../atoms/inputs/DragNDropInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosAPI from '../../../../api/axios';
import { notification } from 'antd';
import { FaFileCsv } from 'react-icons/fa';

interface Track {
    id: string;
    title: string;
}

interface GroupInviteProps {
    tracks: Track[];
    cohortId: string;
    closeModal: any;
}

const GroupInvite: FC<GroupInviteProps> = ({ tracks, cohortId, closeModal }) => {
    const [selectedTrackId, setSelectedTrackId] = useState('');
    const [csvFile, setCsvFile] = useState<File | null>(null);
    const queryClient = useQueryClient();

    const inviteGroupMutation = useMutation({
        mutationFn: (payload: File) =>
            axiosAPI.participant.inviteGroupParticipant(cohortId, selectedTrackId, payload),
        onSuccess: () => {
            notification.success({ message: "Participants invited successfully!" });
            queryClient.invalidateQueries({ queryKey: ["participants", cohortId] });

            setSelectedTrackId('');
            setCsvFile(null);
            closeModal();
        },
        onError: (error: any) => {
            notification.error({ message: "Failed to invite participants. Please try again." });

        },
    });

    const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTrackId(e.target.value);
    };

    const handleFileChange = (file: File) => {
        setCsvFile(file);
    };

    const handleSubmit = () => {
        if (!selectedTrackId) {
            notification.error({ message: "Please select a track." });
            return;
        }

        if (!csvFile) {
            notification.error({ message: "Please upload a CSV file" });
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
                    className="form-select rounded-5"
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
                label="Upload Participant List"
                id="thumbnail-upload"
                icon={<FaFileCsv className="fs-small-icon dark-300" />}
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
