import React from 'react'
import DeadlineCalendar from '.';

const DeadlineDisplay = () => {
    const sampleDeadlines = [
        { date: "2024-05-20", title: "Final Project" },
        { date: "2024-11-13", title: "Submit Report" },
        { date: "2024-11-15", title: "Sub" },
        { date: "2024-11-15", title: "Inventing Report" },
        { date: "2024-11-15", title: "Submit Report" },
        { date: "2024-11-15", title: "Gyming" },
        { date: "2024-11-15", title: "Sky diving" },
        { date: "2024-11-15", title: "Tu se gre to" },



      ];
  return (
    <div>
        <DeadlineCalendar deadlines={sampleDeadlines} />

    </div>
  )
}

export default DeadlineDisplay