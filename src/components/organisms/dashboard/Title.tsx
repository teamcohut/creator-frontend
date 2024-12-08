import { FC } from "react";
import { ITitle } from "../../../@types/dashboard.interface";
import "../style.css";
import StatusBadge from "../../atoms/dashboard/StatusBadge";

const Title: FC<ITitle> = ({ text, children }) => {
  return (
    <>
      <div className="dashboard-header d-flex justify-content-between align-items-start">
        <div className="d-flex flex-row align-items-center gap-3">
          <h3 className="manrope-500 fs-h3 primary-950">{text}</h3>
          <StatusBadge status={"active"}></StatusBadge>
        </div>
        <div className="d-flex align-items-center gap-4">{children}</div>
      </div>
    </>
  );
};

export default Title;
