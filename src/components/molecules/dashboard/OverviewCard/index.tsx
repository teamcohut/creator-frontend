import React, { ReactElement } from "react";
import "./index.css"
import { IOverviewCard } from "../../../../@types/dashboard.interface";

const OverviewCard: React.FC<IOverviewCard> = ({icon, topText, bottomText, iconColor, iconBgColor, iconBorderColor}) => {
  return (
    <>
      <div className="card-container">
        <span className="icon" style={{ backgroundColor:  iconBgColor, border: `1px solid ${iconBorderColor}`}}>
         
          {React.cloneElement(icon as ReactElement<any>, {
            style: { color: iconColor },
            className: "wh",
          })}
        </span>
        <div className="width">
          <span className="fs-body dblock manrope-500 dark-400">{topText}</span>
          <span className="fs-h4 dblock manrope-600 primary-950">{bottomText}</span>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
