import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FiCalendar, FiClock, FiEdit, FiVideo } from 'react-icons/fi';
import Button from '../../../atoms/Button';
import { notification } from 'antd';
import api from '../../../../api/axios';

const SessionDetails = () => {
    const { sessionId } = useParams();
    const navigate = useNavigate();

    const { isLoading, isError, data } = useQuery({
        queryKey: ["session", sessionId],
        queryFn: () => api.session.findSession(sessionId!),
        enabled: !!sessionId,
    });

    const deleteSessionMutation = useMutation({
        mutationFn: () => api.session.deleteSession(sessionId!),
        onSuccess: () => {
            notification.success({ message: "Session deleted successfully!" });
            navigate(-1);
        },
        onError: () => {
            notification.error({
                message: "Failed to delete session. Please try again.",
            });
        },
    });

    if (isLoading) return <p>Loading session details...</p>;
    if (isError) return <p>Error loading session details.</p>;

    const session = data?.data.data;
    const sessionLink = session?.sessionLink;

    return (
        <div>
            <p
                onClick={() => navigate(-1)}
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
                Back to Learning
            </p>
            <div className="d-flex flex-row gap-2">
                <div className="w-75">
                    <div>
                        <h2>{session?.title} <FiEdit /></h2>
                        <p>{session?.description}</p>
                    </div>
                    <div className="border px-3 py-3 rounded-4 w-50">
                        <h3>Session Details</h3>
                        <p><FiClock /> {session?.start} - {session?.end}</p>
                        <p><FiCalendar /> {session?.date}</p>
                        <a href={sessionLink} target="_blank" rel="noopener noreferrer">
                            <FiVideo /> {sessionLink}
                        </a>
                        <Button
                            action={() => window.open(sessionLink, '_blank')}
                            fill={true}
                            type="button"
                            border
                            outline="primary"
                        >
                            <FiVideo /> Join Session
                        </Button>
                    </div>
                </div>

                <div className="w-25 px-3">
                    <h5>Danger Zone</h5>
                    <p className="error-300"
                        onClick={() => deleteSessionMutation.mutate()}
                        style={{ cursor: 'pointer', color: 'red', textDecoration: 'underline' }}> Delete Session
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;

