import {
  FiBell,
  FiBookOpen,
  FiCheckCircle,
  FiHeadphones,
  FiLayout,
  FiTool,
  FiUsers,
} from "react-icons/fi";

export const NavList = [
  {
    icon: <FiLayout className="nav-icon" />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <FiUsers className="nav-icon" />,
    title: "Participants",
    path: "participants",
  },
  {
    icon: <FiBookOpen className="nav-icon" />,
    title: "Learning",
    path: "learning",
  }
];

export const SettingsList = [
  {
    icon: <FiTool className="nav-icon" />,
    title: "General",
    path: "generalSetting",
  },
  // {
  //   icon: <FiUser className="nav-icon" />,
  //   title: "Account Settings",
  //   path: "/#",
  // },
  {
    icon: <FiBell className="nav-icon" />,
    title: "Notifications",
    path: "/#",
  },
  // {
  //   icon: <FiMoon className="nav-icon" />,
  //   title: "Appearance",
  //   path: "/#",
  // },
];

export const HelpList = [
  {
    icon: <FiCheckCircle className="nav-icon" />,
    title: "FAQs",
    path: "/#",
  },
  {
    icon: <FiHeadphones className="nav-icon" />,
    title: "Support",
    path: "/#",
  },
];
