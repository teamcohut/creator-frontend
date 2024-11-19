import React, { useEffect, useState } from 'react';
import './index.css';
import { FiCalendar } from 'react-icons/fi';
import Duedates from './Duedates';
import CalendarCarousel from './CalendarCarousel';

interface Deadline {
  date: string;
  title: string;
  color?: string;
}

interface DeadlineCalendarProps {
  deadlines: Deadline[];
}

const DeadlineCalendar: React.FC<DeadlineCalendarProps> = ({ deadlines }) => {
  const [activeDate, setActiveDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const daysToShow = 7;
  const today = new Date();

  const [coloredDeadlines, setColoredDeadlines] = useState<Deadline[]>([]);

  useEffect(() => {
    const deadlinesWithColors = deadlines.map((deadline) => ({
      ...deadline,
      color: deadline.color || getRandomColor(),
    }));
    setColoredDeadlines(deadlinesWithColors);
  }, [deadlines]);

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
    return coloredDeadlines.filter((deadline) => deadline.date === date);
  };

  const handlePrev = () => setCarouselOffset(carouselOffset - 1);
  const handleNext = () => setCarouselOffset(carouselOffset + 1);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const toggleDropdown = (index: number): void => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="deadline-calendar">
      <div className='w-100 gap-2'>
        <div className="header w-100 d-flex align-items-center justify-content-between">
          <h4 className="manrope-600 fs-h4 primary-950 d-flex align-items-center gap-2">
            Upcoming Deadlines <FiCalendar className='fs-body primary-700' />
          </h4>
          <span className='manrope-400 fs-caption secondary-400'>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</span>
        </div>

        <CalendarCarousel
          dateArray={dateArray}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>

      <div className="deadline-details position-relative">
        {getDeadlinesForDate(activeDate).length > 0 ? (
          getDeadlinesForDate(activeDate).map((deadline, index) => (
            <Duedates
              key={index}
              deadline={deadline}
              index={index}
              dropdownIndex={dropdownIndex}
              toggleDropdown={toggleDropdown}
            />
          ))
        ) : (
          <div className="no-deadlines">No deadlines</div>
        )}
      </div>
    </div>
  );
};

export default DeadlineCalendar;

















// import React, { useEffect, useState } from 'react';
// import './index.css';
// import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import Duedates from './Duedates';

// interface Deadline {
//   date: string;
//   title: string;
//   color?: string;
// }

// interface DeadlineCalendarProps {
//   deadlines: Deadline[];
// }

// const DeadlineCalendar: React.FC<DeadlineCalendarProps> = ({ deadlines }) => {
//   const [activeDate, setActiveDate] = useState<string>(new Date().toISOString().split('T')[0]);
//   const [carouselOffset, setCarouselOffset] = useState(0);
//   const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

//   const daysToShow = 7;
//   const today = new Date();

//   const [coloredDeadlines, setColoredDeadlines] = useState<Deadline[]>([]);

//   useEffect(() => {
//     const deadlinesWithColors = deadlines.map((deadline) => ({
//       ...deadline,
//       color: deadline.color || getRandomColor(),
//     }));
//     setColoredDeadlines(deadlinesWithColors);
//   }, [deadlines]);

//   const getDateArray = () => {
//     const dates = [];
//     for (let i = -Math.floor(daysToShow / 2) + carouselOffset; i <= Math.floor(daysToShow / 2) + carouselOffset; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
//       dates.push(date.toISOString().split('T')[0]);
//     }
//     return dates;
//   };
//   const dateArray = getDateArray();

//   const getDeadlinesForDate = (date: string) => {
//     return coloredDeadlines.filter((deadline) => deadline.date === date);
//   };

//   const handlePrev = () => setCarouselOffset(carouselOffset - 1);
//   const handleNext = () => setCarouselOffset(carouselOffset + 1);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const toggleDropdown = (index: number): void => {
//     setDropdownIndex(dropdownIndex === index ? null : index);
//   };

//   return (
//     <div className="deadline-calendar">
//       <div className="header">
//         <h4 className="manrope-400 secondary-200">
//           Upcoming Deadlines <FiCalendar className='primary-700' />
//         </h4>
//         <p className='secondary-400'>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
//       </div>

//       <div className="calendar-carousel">
//         <button onClick={handlePrev} className="carousel-button">
//           <FiChevronLeft />
//         </button>

//         <div className="calendar-dates">
//           {dateArray.map((date) => (
//             <div
//               key={date}
//               className={`date-box ${date === activeDate ? 'active' : ''}`}
//               onClick={() => setActiveDate(date)}
//             >
//               <div className="day manrope-600">{new Date(date).toLocaleString('en-US', { weekday: 'short' })}</div>
//               <div className="date manrope-600">{new Date(date).getDate()}</div>
//             </div>
//           ))}
//         </div>

//         <button onClick={handleNext} className="carousel-button">
//           <FiChevronRight />
//         </button>
//       </div>

//       <div className="deadline-details position-relative">
//         {getDeadlinesForDate(activeDate).length > 0 ? (
//           getDeadlinesForDate(activeDate).map((deadline, index) => (
//             <Duedates
//               key={index}
//               deadline={deadline}
//               index={index}
//               dropdownIndex={dropdownIndex}
//               toggleDropdown={toggleDropdown}
//             />
//           ))
//         ) : (
//           <div className="no-deadlines">No deadlines</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DeadlineCalendar;