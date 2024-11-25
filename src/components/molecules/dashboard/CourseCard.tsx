import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import StatusBadge from "../../atoms/dashboard/StatusBadge";
import PercentageBar from '../../atoms/dashboard/PercentageBar';
import '../style.css';

interface CourseCardProps {
  name: string;
  dateCreated: string;
  isActive: boolean;
  progress: number; 
}

const CourseCard: React.FC<CourseCardProps> = ({name, dateCreated, isActive, progress }) => {
  return (
    <div className="course-card w-100 d-flex justify-content-between align-items-center rounded-2 p-3">
      <div className="course-left d-flex align-items-center gap-3">
        <div className="icon secondary-50 bg-secondary-100 px-3 py-2"><FiBookOpen/></div>
        <div className="course-info">
          <h2 className='manrope-700 secondary-200 fs-body'>{name}</h2>
          <div className='d-flex flex-row justify-content-between'>
            <p className='manrope-400 secondary-400'>Date created: {dateCreated}</p>
            <StatusBadge status='active'/>
          </div>
        </div>
      </div>

      <div className="course-right d-flex flex-column align-items-start">
        <div className="progress-info d-flex align-items-center">
            <PercentageBar progress={progress} />
        </div>
        <button className="view-details">
            <span className=''>View Details</span> ➔
        </button>
        </div>
    </div>
  );
};

export default CourseCard;