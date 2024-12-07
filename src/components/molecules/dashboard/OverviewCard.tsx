import React, { ReactElement } from "react";
import { IOverviewCard } from "../../../@types/dashboard.interface";
import "../style.css"

const OverviewCard: React.FC<IOverviewCard> = ({icon, title, subtitle, iconColor, iconBgColor, iconBorderColor, children}) => {
  return (
    <>
      <div className="overview-card d-flex align-items-start gap-3 p-3">
        <span className={`overview-icon p-3 ${iconColor}`} style={{ backgroundColor:  iconBgColor, border: `1px solid ${iconBorderColor}`}}>
          {
            React.cloneElement(icon as ReactElement<any>, {
              className: "fs-h1 ",
            })
          }
        </span>
        <div className="d-flex flex-column align-items-start gap-2">
          <span className="fs-body d-block no-wrap manrope-500 dark-400">{title}</span>
          <div className="w-100">
            <span className="fs-h4 d-block no-wrap manrope-600 primary-950">{subtitle}</span>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
