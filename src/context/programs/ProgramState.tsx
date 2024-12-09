import { FC, useReducer } from "react"
import { ProgramContext } from "./ProgramContext"
import { programReducer } from "./ProgramReducer"
import { IProgramProvider } from "../../@types/program.interface"

export const ProgramContextProvider: FC<IProgramProvider> = ({ children }) => {
  const programDefault = {
    programs: null,
    activeProgram: null,
    cohorts: null,
    activeCohort: null,
    sessions: null,
    participants: null,
  }
  const [state, dispatch] = useReducer(programReducer, programDefault)

  return (
    <ProgramContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProgramContext.Provider>
  )
}