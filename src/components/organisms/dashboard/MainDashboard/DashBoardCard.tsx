import { FiUsers, FiVideo } from "react-icons/fi";

export const generateCardData = (data: any) => [
  {
    icon: <FiUsers />,
    title: "Total Participants",
    subtitle: data?.noOfParticipants,
    iconColor: "primary-300",
    iconBgColor: "#ECF1FF",
  },
  {
    icon: <FiUsers />,
    title: "Active Participants",
    subtitle: data?.noOfActiveParticipants,
    iconColor: "success-300",
    iconBgColor: "#E9FFF7",
  },
  {
    icon: <FiVideo />,
    title: "Total Sessions",
    subtitle: data?.noOfSessions || 0,
    iconColor: "primary-300",
    iconBgColor: "#ECF1FF",
  },
];

