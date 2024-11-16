import React, { useEffect, useRef } from 'react';
import { FiClock, FiMoreVertical } from 'react-icons/fi';
import "./index.css"

interface Deadline {
  date: string;
  title: string;
  color?: string;
}

interface DuedatesProps {
  deadline: Deadline;
  index: number;
  dropdownIndex: number | null;
  toggleDropdown: (index: number) => void;
}

const Duedates: React.FC<DuedatesProps> = ({ deadline, index, dropdownIndex, toggleDropdown }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownIndex === index && !dropdownRef.current?.contains(event.target as Node)) {
        toggleDropdown(-1); 
      }
    };

    if (dropdownIndex === index) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownIndex, index, toggleDropdown]);

  return (
    <div className="deadline-item d-flex flex-column position-relative">
      <div className="d-flex flex-row align-items-start">
        <FiClock className="me-2" style={{ color: deadline.color }} />
        <div className="d-flex flex-column">
          <span className="deadline-date" style={{ color: deadline.color }}>
            Due {new Date(deadline.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
          </span>
          <span className="deadline-title manrope-500 secondary-400">{deadline.title}</span>
        </div>
        <FiMoreVertical
          className="ms-auto primary-700"
          onClick={() => toggleDropdown(index)}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {dropdownIndex === index && (
        <div className="visible-dropdown" ref={dropdownRef}>
          <div className="dropdown-item">Assign Task</div>
          <div className="dropdown-item">Send Reminder</div>
        </div>
      )}
      <div className="vertical-line" />
    </div>
  );
};

export default Duedates;
