import { FC, useReducer } from "react";
import { ProgramContext } from "./ProgramContext";
import { programReducer } from "./ProgramReducer";
import { IProgramProvider } from "../../@types/program.interface";

export const ProgramContextProvider: FC<IProgramProvider> = ({ children }) => {
  const programDefault = {
    programs: [],
    activeProgram: {},
    cohorts: [],
    activeCohort: {},
    sessions: [],
    participants: [],
  };
  const [state, dispatch] = useReducer(programReducer, programDefault);

  return (
    <ProgramContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProgramContext.Provider>
  );
};
