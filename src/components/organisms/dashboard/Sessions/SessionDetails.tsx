import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FiArrowLeft, FiCalendar, FiClock, FiEdit3, FiMapPin, FiTrash2, FiVideo } from 'react-icons/fi';
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
    const sessionLink = session?.location.address;

    const date = new Date(session?.date);
    console.log(date);


    return (
        <>
            <div className='pt-5 d-flex flex-column gap-5'>
                <p
                    className='manrope-500 fs-body dark-700 d-flex align-items-center gap-1'
                    onClick={() => navigate(-1)}
                    style={{ cursor: 'pointer' }}
                >
                    <FiArrowLeft />
                    Back to Learning
                </p>
                <div className="d-flex flex-column gap-5">
                    <div className="border rounded-4 p-5 d-flex flex-column gap-5 w-75">
                        <div className='d-flex flex-column gap-2'>
                            <div className='d-flex justify-content-between'>
                                <h2 className='fs-h3 manrope-600 primary-950'>{session?.title}</h2>
                                <div className="w-fit">
                                    <Button action={() => { }} fill={false} type='button'>
                                        <FiEdit3 className='fs-h3 primary-400' />
                                    </Button>
                                </div>
                            </div>
                            <p className='manrope-500 fs-body dark-700'>{session?.description}</p>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <p className='d-flex align-items-center gap-2 manrope-500 fs-body dark-700'><FiClock /> {session?.start} - {session?.end}</p>
                            <p className='d-flex align-items-center gap-2 manrope-500 fs-body dark-700'><FiCalendar /> {session?.date}</p>
                            {
                                session?.location.name === 'Physical' ?
                                    <p className='d-flex align-items-center gap-2 manrope-500 fs-body dark-700'><FiMapPin /> {session.location.address}</p> :
                                    <p className='d-flex align-items-center gap-2 manrope-500 fs-body dark-700'>
                                        <FiVideo />
                                        <a href={sessionLink} target="_blank" rel="noopener noreferrer">
                                            {sessionLink}
                                        </a>
                                    </p>
                            }

                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="w-75">
                                <Button
                                    action={() => window.open(sessionLink, '_blank')}
                                    fill={true}
                                    type="button"
                                    border
                                    outline="primary"
                                    gap
                                >
                                    <FiVideo /> Join Session
                                </Button>
                            </div>
                            <div className='w-fit'>
                                <Button action={() => { }} fill={false} type='button' customStyle={{ color: 'var(--error-300' }} ><FiTrash2 className='fs-h3' /></Button>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                    <h2>Additional Resources</h2>
                    <span></span>
                </div> */}
                </div>
            </div>
            

            {
                
            }
        </>
    );
};

export default SessionDetails;

