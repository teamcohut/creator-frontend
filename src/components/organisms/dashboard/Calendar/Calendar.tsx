import React, { useEffect, useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { fetchSchedules } from "./api";
import "./calendar.css";

type Event = {
  id: string;
  calendarId: string;
  title: string;
  category: "time" | "allday";
  start: string;
  end: string;
};

const CalendarComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [view, setView] = useState<"month" | "week" | "day">("month");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchSchedules();
        setEvents(data);
      } catch (error) {
        console.log("Failed to fetch events", error);
      }
    };

    loadEvents();
  }, []);

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
        height="900px"
        view={view}
        events={events.map((event) => ({
          ...event,
          isReadOnly: true, // Optional: makes events read-only
        }))}
        usageStatistics={false}
        onClickSchedule={(event: any) => {
          alert(`Event clicked: ${event.schedule.title}`);
        }}
      />
    </div>
  );
};

export default CalendarComponent;
