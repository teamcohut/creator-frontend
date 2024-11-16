import React from "react";
import "./index.css";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import { FiClock, FiInfo, FiUsers } from "react-icons/fi";
import WebsiteCard from "../../../molecules/dashboard/WebsiteCard/WebsiteCard";

const Overview = () => {
  return (
    <>
      <div className="mcontainer">
        <OverviewCard
          icon={<FiInfo />}
          topText={"Program Status"}
          bottomText={"Inactive"}
          iconColor="#B0B0B0"
          iconBgColor="#E7E7E733"
          iconBorderColor="#E7E7E7"
        />

        <OverviewCard
          icon={<FiClock />}
          topText={"Program Duration"}
          bottomText={"5 Weeks"}
          iconColor="#9db0ff"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
        />

        <OverviewCard
          icon={<FiUsers />}
          topText={"Total Participants"}
          bottomText={"300"}
          iconColor="#9db0ff"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
        />

        <WebsiteCard/>
      </div>
    </>
  );
};

export default Overview;
