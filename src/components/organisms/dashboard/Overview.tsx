import React from "react";
import OverviewCard from "../../molecules/dashboard/OverviewCard";
import { FiClock, FiInfo, FiUsers } from "react-icons/fi";
import WebsiteCard from "../../molecules/dashboard/WebsiteCard";
import PercentageBar from "../../atoms/dashboard/PercentageBar";
import "../style.css";

const Overview = () => {
  return (
    <>
      <div className="overview-container d-flex">
        <OverviewCard
          icon={<FiInfo />}
          title={"Program Status"}
          subtitle={"Inactive"}
          iconBgColor="#E7E7E733"
          iconBorderColor="#E7E7E7"
        />

        <OverviewCard
          icon={<FiClock />}
          title={"Program Duration"}
          subtitle={"5 Weeks"}
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF">
            <PercentageBar progress={25} />
          </OverviewCard>

        <OverviewCard
          icon={<FiUsers />}
          title={"Total Participants"}
          subtitle={"300"}
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
        />

        <WebsiteCard/>
      </div>
    </>
  );
};

export default Overview;
