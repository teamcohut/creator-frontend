import { FiClock, FiUsers, FiVideo } from "react-icons/fi";
import PercentageBar from "../../../atoms/dashboard/PercentageBar";

export const cardData = [
  {
    icon: <FiClock />,
    title: "Cohort Duration",
    subtitle: "0",
    iconColor: "primary-300",
    iconBgColor: "#ECF1FF",
    children: <PercentageBar progress={25} />,
  },
  {
    icon: <FiUsers />,
    title: "Total Participants",
    subtitle: "0",
    iconColor: "primary-300",
    iconBgColor: "#ECF1FF",
    children: <PercentageBar progress={25} />,
  },
  {
    icon: <FiUsers />,
    title: "Active Participants",
    subtitle: "0",
    iconColor: "success-300",
    iconBgColor: "#E9FFF7",
    children: <PercentageBar progress={25} />,
  },
  {
    icon: <FiVideo />,
    title: "Total Sessions",
    subtitle: "0",
    iconColor: "primary-300",
    iconBgColor: "#ECF1FF",
    children: <PercentageBar progress={25} />,
  },
];
