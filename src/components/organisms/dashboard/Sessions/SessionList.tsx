import React, { useEffect, useState } from "react";
import "../../style.css";
import InfoCard from "../../../molecules/dashboard/InfoCard";
import { FiVideo } from "react-icons/fi";
import SearchInput from "../../../atoms/inputs/SearchInput";
import { useGetSession } from "../../../../hooks/program/useGetSession";

const SessionList = () => {
    const { getSessions, sessions, isLoading, error } = useGetSession();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSessions, setFilteredSessions] = useState([]);

    useEffect(() => {
        getSessions();
    }, [getSessions]);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        setFilteredSessions(
            sessions.filter((session: any) =>
                session.title?.toLowerCase().includes(lowerCaseQuery) ||
                session.subtitle?.toLowerCase().includes(lowerCaseQuery)
            )
        );
    }, [sessions, searchQuery]);

    return (
        <div className="courseDisplay w-100 d-flex flex-column align-items-stretch gap-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                    <h4 className="manrope-600 fs-h4 primary-950">Sessions</h4>
                    <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
                        {filteredSessions.length}
                    </span>
                </div>

                <div>
                    <SearchInput
                        id="session"
                        label=""
                        placeHolder="Search"
                        onchange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="d-flex align-items-center gap-2">
                    <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">
                        All
                    </button>
                    <button className="btn rounded-pill border-secondary manrope-500 dark-400">
                        Completed
                    </button>
                    <button className="btn rounded-pill border-secondary manrope-500 dark-400">
                        Upcoming
                    </button>
                </div>
            </div>

            {isLoading && <p>Loading sessions...</p>}
            {error && <p className="error-text">{error}</p>}
            {!isLoading && filteredSessions.length === 0 && (
                <p>No sessions found for your search query.</p>
            )}
            <div className="session-grid">
                {filteredSessions.map((session: any, i: any) => (
                    <InfoCard
                        key={i}
                        title={session.title || "No title available"}
                        subtitle={session.subtitle || "No subtitle available"}
                        isActive={session.isActive}
                        dateOfSession={session.dateOfSession || "Date not available"}
                        isOngoing
                        infoCardIcon={<FiVideo color="#FF63CD" className="infoIcon" />}
                        infoCardIconBgColor="#FEF1FA"
                    />
                ))}
            </div>
        </div>
    );
};

export default SessionList;