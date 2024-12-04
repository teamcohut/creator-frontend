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
    <div className="calendar-carousel w-100 d-flex align-items-center">
      <button onClick={handlePrev} className="carousel-button">
        <FiChevronLeft />
      </button>

      <div className="calendar-dates w-100 d-flex justify-content-around">
        {dateArray.map((date) => (
          <div
            key={date}
            className={`date-box d-flex flex-column align-items-center justify-content-center text-center ${date === activeDate && 'active'}`}
            onClick={() => setActiveDate(date)}
          >
            <span className="day manrope-600 fs-caption">
              {new Date(date).toLocaleString('en-US', { weekday: 'short' })}
            </span>
            <span className="date manrope-600 fs-body">{new Date(date).getDate()}</span>
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
