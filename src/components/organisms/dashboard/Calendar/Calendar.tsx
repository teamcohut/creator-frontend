import React, { useContext, useEffect, useRef, useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import convertTimeToDate from "../../../utils/convertTimeToData";
import "./calendar.css";
import { useNavigate } from "react-router-dom";

const CalendarComponent: React.FC = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const navigate = useNavigate();
  const calendarRef = useRef<any>(null);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["session", activeCohort],
    queryFn: async () => {
      const response = await api.session.getSession(activeCohort._id);
      return response.data?.data && Array.isArray(response.data.data)
        ? response.data.data.map((item: any) => ({
          id: item.cohort,
          calendarId: item._id,
          title: item.title,
          category: "time",
          start: convertTimeToDate(item.start, item.date),
          end: convertTimeToDate(item.end, item.date),
        }))
        : [];
    },
    enabled: !!activeCohort._id,
  });

  useEffect(() => {
    const calendarInstance = calendarRef.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.on("clickSchedule", (event: any) => {
        navigate(`/sessions/${event.schedule.calendarId}`);
      });
    }

    // return () => {
    //   if (calendarInstance) {
    //     calendarInstance.off("clickSchedule");
    //   }
    // };
  }, [navigate]);

  if (isLoading) return <p>Loading calendar...</p>;
  if (isError) return <p>Failed to load calendar data.</p>;
  return (
    <div>
      <div className="d-flex flex-row justify-content-between py-5">
        <h1 className="manrope-600 primary-700 fs-h3">My Schedule</h1>
        <div className="d-flex flex-row gap-3">
          <button
            className="btn rounded-pill bg-secondary-450 manrope-500 primary-950"
            onClick={() => setView("month")}
          >
            Month View
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={() => setView("week")}
          >
            Week View
          </button>
          <button
            className="btn rounded-pill border-secondary manrope-500 dark-400"
            onClick={() => setView("day")}
          >
            Day View
          </button>
        </div>
      </div>
      <Calendar
        ref={calendarRef}
        height="900px"
        view={view}
        events={
          Array.isArray(data)
            ? data.map((event: any) => ({
              ...event,
              isReadOnly: true,
            }))
            : []
        }
        usageStatistics={false}
      />
    </div>
  );
};

export default CalendarComponent;
