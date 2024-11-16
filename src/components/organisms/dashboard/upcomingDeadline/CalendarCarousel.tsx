// CalendarCarousel.tsx
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface CalendarCarouselProps {
  dateArray: string[];
  activeDate: string;
  setActiveDate: (date: string) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const CalendarCarousel: React.FC<CalendarCarouselProps> = ({
  dateArray,
  activeDate,
  setActiveDate,
  handlePrev,
  handleNext,
}) => {
  return (
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
            <div className="day manrope-600">
              {new Date(date).toLocaleString('en-US', { weekday: 'short' })}
            </div>
            <div className="date manrope-600">{new Date(date).getDate()}</div>
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="carousel-button">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CalendarCarousel;
