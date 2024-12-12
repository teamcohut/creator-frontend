import { useContext } from "react";
import "./index.css";
import SetupProgram from "../../components/organisms/dashboard/SetupProgram/SetupProgram";
import DashBoard from "../../components/organisms/dashboard/MainDashboard/DashBoard";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios";

const Dashboard = () => {
  const { dispatch, programs } = useContext(ProgramContext);

  const { isPending, isError } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const response = await api.program.getPrograms();
      if (response.status === 200) {
        dispatch({ type: "PROGRAMS", payload: response.data.data });
      }
      if (response.data.data?.length > 0) {
        dispatch({ type: "ACTIVE_PROGRAM", payload: response.data.data[0] });
      }
      return response;
    },
  });

  if (isPending) {
    return <Skeleton loading />;
  }

  if (isError) {
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

  return <>{programs[0] ? <DashBoard /> : <SetupProgram />}</>;
};

export default Dashboard;
