import { useContext, useEffect, useState } from "react";
import "../../style.css";
import InfoCard from "../../../molecules/dashboard/InfoCard";
import { FiMapPin, FiVideo } from "react-icons/fi";
import SearchInput from "../../../atoms/inputs/SearchInput";
import api from "../../../../api/axios";
import { useQuery } from "@tanstack/react-query";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { useNavigate } from "react-router-dom";

const SessionList = () => {
  const { activeCohort } = useContext(ProgramContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filteredSessions, setFilteredSessions] = useState([]);

  const trackId = activeCohort.tracks?.[0]?.id;

  const { isLoading, isError, data } = useQuery({
    queryKey: ["session", activeCohort],
    queryFn: () => api.session.getSession(activeCohort._id, trackId),
    enabled: !!activeCohort._id,
  });

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const now = new Date();

    let sessions = data?.data?.data || [];

    if (filterType === "Upcoming") {
      sessions = sessions.filter((session: any) => new Date(session.date) > now);
    } else if (filterType === "Completed") sessions = sessions.filter((session: any) => new Date(session.date) < now);

    setFilteredSessions(
      sessions.filter(
        (session: any) =>
          session.title?.toLowerCase().includes(lowerCaseQuery) ||
          session.subtitle?.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [data, searchQuery, filterType]);

  return (
    <div className="courseDisplay w-100 d-flex flex-column align-items-stretch gap-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <h4 className="manrope-600 fs-h4 primary-950 m-0">Sessions</h4>
          <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
            {filteredSessions?.length || 0}
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
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "All" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"
              }`}
            onClick={() => setFilterType("All")}
          >
            All
          </button>
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "Upcoming" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"
              }`}
            onClick={() => setFilterType("Upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "Completed" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"
              }`}
            onClick={() => setFilterType("Completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {isLoading && <p>Loading sessions...</p>}
      {isError && <p className="error-text">{isError}</p>}
      {!isLoading && filteredSessions?.length === 0 && (
        <p>You do not have a session</p>
      )}
      <div className="session-grid">
        {filteredSessions?.map((session: any, i: any) => (
          <div
            key={i}
            onClick={() => navigate(`/learning/${session._id}`)}
            style={{ cursor: "pointer" }}
          >
            <InfoCard
              title={session.title || "No title available"}
              subtitle={session.location.address || "No Link available yet"}
              dateOfSession={session.date || "Date not available"}
              infoCardIcon={
                session.location.name === "Online" ? (
                  <FiVideo color="#FF63CD" className="infoIcon fs-h2" />
                ) : (
                  <FiMapPin color="#FF63CD" className="infoIcon fs-h2" />
                )
              }
              infoCardIconBgColor="#FEF1FA"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionList;

