import React, { useState } from 'react';
import Button from '../../../atoms/Button';
import TextInput from '../../../atoms/inputs/TextInput';
import EmailInput from '../../../atoms/inputs/EmailInput';
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";
import { notification } from 'antd';

interface Track {
    id: string;
    title: string;
}

interface IndividualInviteProps {
    tracks: Track[];
    cohortId: string;
}

const IndividualInvite: React.FC<IndividualInviteProps> = ({ tracks, cohortId }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        trackId: '', // Track is optional
    });

    const inviteIndividualMutation = useMutation({
        mutationFn: (payload: any) =>
            axiosAPI.participant.inviteIndividualParticipant(cohortId, payload),
        onSuccess: () => {
            notification.success({ message: "Invitation sent successfully!" });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                trackId: '',
            });
        },
        onError: (error: any) => {
            console.error(error);
            notification.error({ message: "Failed to send invitation. Please try again." });
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = () => {
        // e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email) {
            notification.error({ message: "Please fill in all required fields before submitting." });
            return;
        }

        const payload: any = {
            participants: [
                {
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                },
            ],
        };

        if (formData.trackId) {
            payload.track = formData.trackId;
        }

        inviteIndividualMutation.mutate(payload);
    };

    return (
        <>
            <div className="d-flex flex-column gap-4">
                <div>
                    <label htmlFor="trackId">Tracks</label>
                    <select
                        id="trackId"
                        name="trackId"
                        className="form-select"
                        value={formData.trackId}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>
                            Select a Track (Optional)
                        </option>
                        {tracks?.map((track: Track) => (
                            <option key={track.id} value={track.id}>
                                {track.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="d-flex flex-row gap-4">
                    <TextInput
                        id="firstName"
                        label="First Name"
                        placeHolder="First Name"
                        value={formData.firstName}
                        onchange={handleInputChange}
                    />
                    <TextInput
                        id="lastName"
                        label="Last Name"
                        placeHolder="Last Name"
                        value={formData.lastName}
                        onchange={handleInputChange}
                    />
                </div>
                <EmailInput
                    label="Email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onchange={handleInputChange}
                />

                <div className="d-flex flex-column align-items-center gap-3 mt-4">
                    <Button
                        children="Invite"
                        action={handleSubmit}
                        type="button"
                        fill={true}
                        loading={inviteIndividualMutation.isPending}
                    />
                </div>
            </div>
        </>
    );
};

export default IndividualInvite;
