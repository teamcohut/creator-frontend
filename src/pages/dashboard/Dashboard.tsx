import { useContext } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";

const Dashboard = () => {
  const { activeProgram } = useContext(ProgramContext);

  return <>{activeProgram.title ? <DashBoard /> : <SetupProgram />}</>;
};

export default Dashboard;
