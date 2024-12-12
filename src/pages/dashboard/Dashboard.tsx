import { useContext } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";

const Dashboard = () => {
  const { programs } = useContext(ProgramContext);

  return <>{programs[0] ? <DashBoard /> : <SetupProgram />}</>;
};

export default Dashboard;
