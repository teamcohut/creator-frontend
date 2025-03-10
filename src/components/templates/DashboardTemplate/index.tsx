import { FC, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ProgramContext } from "../../../context/programs/ProgramContext";
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";
import { TStatus } from "../../../@types/dashboard.interface";
import SideNav from "../../organisms/dashboard/SideNav";
import "./index.css";
import { AuthContext } from "../../../context/auth/AuthContext";
import ErrorUI from "../../../helpers/ErrorUI";

const DashboardTemplate: FC = () => {
  const { dispatch, activeCohort } = useContext(ProgramContext);
  const { dispatch: userDispatch } = useContext(AuthContext);
  const [status, setStatus] = useState<TStatus>("pending");

  const { isPending, isError, isSuccess } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const response = await api.program.getPrograms();
      if (response.status === 200) {
        dispatch({ type: "PROGRAMS", payload: response.data.data });
      }
      if (response.data.data?.length > 0) {
        localStorage.setItem('programId', response.data.data[0]._id)
        dispatch({ type: "ACTIVE_PROGRAM", payload: response.data.data[0] });
      }
      if (
        !activeCohort._id && response.data.data?.length > 0 &&
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

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await api.user.fetch();
      if (response.status === 200) {
        userDispatch({ type: "SET_USER", payload: response.data.data });
      }
      return response;
    },
  });

  useEffect(() => {
    if (isPending) {
      setStatus("pending");
    } else if (isError) {
      setStatus("error");
    } else if (isSuccess) {
      setStatus("success");
    }
  }, [isPending, isError, isSuccess]);

  return (
    <>
      <div className="dashboard-template d-flex w-100">
        <SideNav status={status} />
        <div className="h-100 content-area dashboard-body w-100">
          <div className="outlet-div">
            {isPending ? (
              <div className="bg-white h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border p-3 primary-700"></div>
              </div>
            ) : isError ? (
              <ErrorUI />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTemplate;
