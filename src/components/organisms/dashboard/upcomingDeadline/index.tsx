import React, { useState } from 'react';
import './index.css';
import { FiCalendar } from 'react-icons/fi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Deadline {
  date: string; // "YYYY-MM-DD"
  title: string;
}

interface DeadlineCalendarProps {
  deadlines: Deadline[];
}

const DeadlineCalendar: React.FC<DeadlineCalendarProps> = ({ deadlines }) => {
  const [activeDate, setActiveDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [carouselOffset, setCarouselOffset] = useState(0); 
  const daysToShow = 7; 
  const today = new Date();

  
  const getDateArray = () => {
    const dates = [];
    for (let i = -Math.floor(daysToShow / 2) + carouselOffset; i <= Math.floor(daysToShow / 2) + carouselOffset; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const dateArray = getDateArray();

  
  const getDeadlinesForDate = (date: string) => {
    return deadlines.filter((deadline) => deadline.date === date);
  };

  
  const handlePrev = () => setCarouselOffset(carouselOffset - 1);
  const handleNext = () => setCarouselOffset(carouselOffset + 1);

  return (
    <div className="deadline-calendar">
      <div className="header ">
        <h3 className="title">Upcoming Deadlines <FiCalendar /></h3>
        <p>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
      </div>

      <div className="calendar-carousel">
        <button onClick={handlePrev} className="carousel-button">
          <FiChevronLeft />
        </button>

        <div className="calendar-dates">
          {dateArray.map((date) => (
            <div
              key={date}
              className={`date-box ${date === activeDate ? 'active' : ''}`}
              onClick={() => setActiveDate(date)}
            >
              <div className="day">{new Date(date).toLocaleString('en-US', { weekday: 'short' })}</div>
              <div className="date">{new Date(date).getDate()}</div>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="carousel-button">
          <FiChevronRight />
        </button>
      </div>

      <div className="deadline-details">
        {getDeadlinesForDate(activeDate).length > 0 ? (
          getDeadlinesForDate(activeDate).map((deadline, index) => (
            <div key={index} className="deadline-item d-flex flex-column">
              <span className="deadline-date">Due {new Date(deadline.date).toLocaleDateString()}</span>
              <span className="deadline-title">{deadline.title}</span>
            </div>
          ))
        ) : (
          <div className="no-deadlines">No deadlines</div>
        )}
      </div>
    </div>
  );
};

export default DeadlineCalendar;
