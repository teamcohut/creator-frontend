import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../../api/axios';
import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { FiCalendar, FiCamera, FiClock, FiEdit } from 'react-icons/fi';
import Button from '../../../atoms/Button';


const SessionDetails = () => {
    const { sessionId } = useParams();
    const navigate = useNavigate();

    const { isLoading, isError, data } = useQuery({
        queryKey: ["session"],
        queryFn: () => api.session.findSession(sessionId!),
        enabled: !!sessionId,
    });

    if (isLoading) return <p>Loading session details...</p>;
    if (isError) return <p>Error: {isError}</p>;

    return (
        <div>
            <p>Back to Learning</p>
            <div className="d-flex flex-row gap-2">
                <div className="w-75">
                    <div>
                        <h2>{data?.data.data.title} <FiEdit /> </h2>
                        <p>{data?.data.data.description}</p>
                    </div>
                    <div className='border px-3 py-3 rounded-4 w-50'>
                        <h3>Session Details</h3>
                        <p><FiClock /> {data?.data.data.start} - {data?.data.data.end}</p>
                        <p><FiCalendar /> {data?.data.data.date}</p>
                        <a href={data?.data.data.sessionLink}><FiCamera /> {data?.data.data.sessionLink}</a>
                        <Button
                            action={() => { }}
                            fill={true}
                            type="button"
                            border
                            outline="primary"
                        ><FiCamera /> Join Session</Button>
                    </div>

                </div>

                <div className="w-25 px-3">
                    <h5>Danger Zone</h5>
                    <p className='error-300'>Delete Session</p>
                </div>
            </div>
        </div>
    );
};

export default SessionDetails;
