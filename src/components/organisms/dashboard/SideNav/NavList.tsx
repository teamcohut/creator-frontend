import { FiBell, FiCalendar, FiCheckCircle, FiCheckSquare, FiHeadphones, FiLayers, FiLayout, FiMoon, FiTool, FiUser, FiUsers, FiVideo } from "react-icons/fi";

export const NavList = [
    {
        icon: <FiLayout className="nav-icon" />,
        title: "Dashboard",
        path: "/#"
    },{
        icon: <FiLayers className="nav-icon" />,
        title: "Curriculum",
        path: "/#"
    },{
        icon: <FiUsers className="nav-icon" />,
        title: "Participants",
        path: "/#"
    },{
        icon: <FiVideo className="nav-icon" />,
        title: "Sessions",
        path: "/#"
    },{
        icon: <FiCheckSquare className="nav-icon" />,
        title: "Assessments",
        path: "/#"
    },{
        icon: <FiCalendar className="nav-icon" />,
        title: "Calendar",
        path: "/#"
    }
]

export const SettingsList = [
    {
        icon: <FiTool className="nav-icon" />,
        title: "Manage Program",
        path: "/#"
    },{
        icon: <FiUser className="nav-icon" />,
        title: "Account Settings",
        path: "/#"
    },{
        icon: <FiBell className="nav-icon" />,
        title: "Notifications",
        path: "/#"
    },{
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
    },{
        icon: <FiHeadphones className="nav-icon" />,
        title: "Support",
        path: "/#"
    }
]