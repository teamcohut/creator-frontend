import { useContext, useState } from "react";
import { axiosPrivate } from "../../api/axios";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useProgramContext } from "./useProgramContext";

export const useGetCohorts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useProgramContext();
  const { activeProgram } = useContext(ProgramContext);

  const getCohorts = async () => {
    setIsLoading(true);
    try {
      const response = await axiosPrivate.get(
        `/cohort/program/${activeProgram._id}`
      );

      dispatch({ type: "COHORTS", payload: response.data.data });
      dispatch({
        type: "ACTIVE_COHORT",
        payload: response.data.data[response.data.data.length - 1],
      });
      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };
  return { getCohorts, error, isLoading };
};
