import React, { useState } from 'react';
import Button from '../../../atoms/Button';
import IndividualInvite from './IndividualInvite';

const InviteParticipants = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('individual');

    // Handler to switch tabs
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
                <div className="mt-4">
                    {activeTab === 'individual' ? (
                        <IndividualInvite />

                    ) : (
                        <div>
                            {/* Add Group Form */}
                            <div className="d-flex flex-column gap-4">
                                <label htmlFor="groupName" className="manrope-500 dark-700 fs-body">
                                    Group Name
                                </label>
                                <input
                                    id="groupName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter group name"
                                />
                                <label htmlFor="uploadList" className="manrope-500 dark-700 fs-body">
                                    Upload Participant List
                                </label>
                                <input
                                    id="uploadList"
                                    type="file"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="d-flex flex-column align-items-center gap-3 mt-4">
                    <Button
                        children="Invite"
                        action={() => { }}
                        type="button"
                        fill={true}
                    />
                </div>
            </form>
        </div>
    );
};

export default InviteParticipants;
