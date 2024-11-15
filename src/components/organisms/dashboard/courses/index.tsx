import React from 'react';
import './index.css';
import { FiBookOpen } from 'react-icons/fi';

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
          <h2 className='manrope-700 secondary-200'>{name}</h2>
          <div className='d-flex flex-row justify-content-between'>
            <p className='manrope-400 secondary-400'>Date created: {dateCreated}</p>
            <span className={`status ${isActive ? 'active' : 'inactive'}`}>
                {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
          
        </div>
      </div>

      <div className="course-right d-flex flex-column align-items-start">
        <div className="progress-info d-flex align-items-center">
            <div className="progressbar">
              <div className="progres primary-700 align-items-center" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-percentage">{progress}%</span>
        </div>
        <button className="view-details">
            <span>View Details</span> ➔
        </button>
        </div>
    </div>
  );
};

export default CourseCard;
