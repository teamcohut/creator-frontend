import React from 'react';
import PercentageBar from '../../atoms/dashboard/PercentageBar';
import '../style.css';
import { IinfoCardProps } from '../../../@types/dashboard.interface';
import { formatDate } from '../../utils/formatDate';


const InfoCard: React.FC<IinfoCardProps> = ({
  infoCardIcon,
  infoCardIconBgColor, title, subtitle, isActive, progress = 0, isProgressBar = false, dateOfSession }) => {
  return (
    <div className="info-card w-100 d-flex justify-content-between align-items-center rounded-4 p-3">
      <div className="card-left d-flex align-items-center gap-3">
        <div
          className="icon px-3 py-3 rounded-3"
          style={{ background: infoCardIconBgColor }}
        >
          {infoCardIcon}
        </div>
        <div className="card-info">
          <h2 className="manrope-700 secondary-200 fs-body">{title}</h2>
          <div className="d-flex flex-row justify-content-between gap-3">
            <p className="manrope-400 primary-500">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-start">
        <div className="d-flex align-items-center">
          {isProgressBar ? (
            <PercentageBar progress={progress} />
          ) : (
            <span className='fs-small manrope-600 primary-700'>{formatDate(dateOfSession!)}</span>
          )}
        </div>
        <button className="view-details">
          <span className="">View Details</span> ➔
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
