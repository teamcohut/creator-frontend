import { FC } from "react";
import SideNav from "../../organisms/dashboard/SideNav";
import "./index.css";
import { Outlet } from "react-router-dom";
import TopNav from "../../organisms/dashboard/TopNav";

const DashboardTemplate: FC = () => {
  return (
    <>
      <div className="dashboard-template d-flex w-100">
        <SideNav />
        <div className="h-100 content-area dashboard-body w-100">
          <TopNav />
          <div className="content outlet-div">
            <Outlet />
          </div>
          {/* <Checklist /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
