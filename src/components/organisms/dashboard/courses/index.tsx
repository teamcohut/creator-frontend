import React from 'react';
import './index.css';
import { FiBookOpen } from 'react-icons/fi';
import StatusBadge from "../../../atoms/dashboard/StatusBadge";
import PercentageBar from '../../../atoms/dashboard/PercentageBar';

interface CourseCardProps {
  name: string;
  dateCreated: string;
  isActive: boolean;
  progress: number; 
}

const CourseCard: React.FC<CourseCardProps> = ({name, dateCreated, isActive, progress }) => {
  return (
    <div className="course-card">
      <div className="course-left">
        <div className="icon secondary-50 bg-secondary-100 px-3 py-2"><FiBookOpen/></div>
        <div className="course-info">
          <h2 className='manrope-700 secondary-200 fs-body'>{name}</h2>
          <div className='d-flex flex-row justify-content-between'>
            <p className='manrope-400 secondary-400'>Date created: {dateCreated}</p>
            {/* <span className={`status ${isActive ? 'active' : 'inactive'}`}> */}
              <StatusBadge status='active'/>
            {/* </span> */}
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
