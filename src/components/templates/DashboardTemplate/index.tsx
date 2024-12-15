import { FC, useContext } from "react";
import SideNav from "../../organisms/dashboard/SideNav";
import "./index.css";
import { Outlet } from "react-router-dom";
import TopNav from "../../recycle/TopNav";
import { Skeleton } from "antd";
import { ProgramContext } from "../../../context/programs/ProgramContext";
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";

const DashboardTemplate: FC = () => {
  const { dispatch } = useContext(ProgramContext);

  const { isPending, isError } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response = await api.program.getPrograms();
      if (response.status === 200) {
        dispatch({ type: "PROGRAMS", payload: response.data.data });
      }
      if (response.data.data?.length > 0) {
        dispatch({ type: "ACTIVE_PROGRAM", payload: response.data.data[0] });
      }
      if (
        response.data.data?.length > 0 &&
        response.data.data[0]?.cohorts.length > 0
      ) {
        dispatch({
          type: "ACTIVE_COHORT",
          payload: response.data.data[0].cohorts[0],
        });
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

  return (
    <>
      <div className="dashboard-template d-flex w-100">
        <SideNav />
        <div className="h-100 content-area dashboard-body w-100">
          {/* <TopNav /> */}
          <div className="content outlet-div">
            <Outlet />
          </div>
          {/* <Checklist /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
