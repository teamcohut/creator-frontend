import { useContext, useEffect } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useGetProgram } from "../../hooks/program/useGetProgram";
import { Skeleton } from "antd";
import { useGetCohorts } from "../../hooks/program/useGetCohorts";

const Dashboard = () => {
  const { activeProgram } = useContext(ProgramContext);
  const { getCohorts } = useGetCohorts();

  const { getProgram, error, isLoading } = useGetProgram();

  useEffect(() => {
    getProgram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeProgram) {
      getCohorts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProgram]);

  if (isLoading) {
    return <Skeleton loading />;
  }

  if (error) {
    return (
      <div>
        <div>
          <h3>Err...</h3>
          <p>Something went wrong ...</p>
        </div>
        <Skeleton loading avatar active paragraph title />
      </div>
    );
  }

  return <>{activeProgram ? <DashBoard /> : <SetupProgram />}</>;
};

export default Dashboard;
