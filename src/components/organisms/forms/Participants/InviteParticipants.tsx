import { useContext, useState } from 'react';
import IndividualInvite from './IndividualInvite';
import GroupInvite from './GroupInvite';
import { ProgramContext } from '../../../../context/programs/ProgramContext';

const InviteParticipants = () => {
    const userData = JSON.parse(localStorage.getItem('user') || '')
    const { activeCohort } = useContext(ProgramContext)
    const tracks = userData?.programs?.[0]?.cohorts?.[0]?.tracks ?? activeCohort.tracks;
    const cohortId = userData?.programs?.[0]?.cohorts?.[0]?._id ?? activeCohort._id;


    const [activeTab, setActiveTab] = useState('individual');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
                <div className="d-flex flex-column gap-2">
                    <h1 className="manrope-600 primary-950 fs-h2">
                        Invite Participants
                    </h1>
                    <span className="manrope-500 dark-700 fs-body">
                        Add new participants to your cohort and send them invite to join.
                    </span>
                </div>

                <div className="d-flex gap-3 mt-4">
                    <p
                        className={`btn ${activeTab === 'individual' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleTabClick('individual')}
                    >
                        + Add Individual
                    </p>
                    <p
                        className={`btn ${activeTab === 'group' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleTabClick('group')}
                    >
                        + Add Group
                    </p>
                </div>

                {/* Conditional Rendering of Forms */}
                <div className="">
                    {activeTab === 'individual' ? (
                        <IndividualInvite tracks={tracks} cohortId={cohortId} />

                    ) : (
                        <GroupInvite tracks={tracks} cohortId={cohortId} />
                    )}
                </div>

                {/* Submit Button */}

            </form>
        </div>
    );
};

export default InviteParticipants;
