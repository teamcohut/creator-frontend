import { FiBell, FiCalendar, FiCheckCircle, FiCheckSquare, FiHeadphones, FiLayers, FiLayout, FiMoon, FiTool, FiUser, FiUsers, FiVideo } from "react-icons/fi";

export const NavList = [
    {
        icon: <FiLayout className="nav-icon" />,
        title: "Dashboard",
        path: "/dashboard"
    }, {
        icon: <FiLayers className="nav-icon" />,
        title: "Curriculum",
        path: "curriculum"
    }, {
        icon: <FiUsers className="nav-icon" />,
        title: "Participants",
        path: "participants"
    }, {
        icon: <FiVideo className="nav-icon" />,
        title: "Sessions",
        path: "sessions"
    }, {
        icon: <FiCheckSquare className="nav-icon" />,
        title: "Assessments",
        path: "assessments"
    }, {
        icon: <FiCalendar className="nav-icon" />,
        title: "Calendar",
        path: "calendar"
    }
]

export const SettingsList = [
    {
        icon: <FiTool className="nav-icon" />,
        title: "Manage Program",
        path: "/#"
    }, {
        icon: <FiUser className="nav-icon" />,
        title: "Account Settings",
        path: "/#"
    }, {
        icon: <FiBell className="nav-icon" />,
        title: "Notifications",
        path: "/#"
    }, {
        icon: <FiMoon className="nav-icon" />,
        title: "Appearance",
        path: "/#"
    }
]

export const HelpList = [
    {
        icon: <FiCheckCircle className="nav-icon" />,
        title: "FAQs",
        path: "/#"
    }, {
        icon: <FiHeadphones className="nav-icon" />,
        title: "Support",
        path: "/#"
    }
]