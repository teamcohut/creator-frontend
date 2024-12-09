import { IProgramState, TProgramAction } from "../../@types/program.interface"

export const programReducer = (state: IProgramState, action: TProgramAction): IProgramState => {
  switch (action.type) {
    case 'PROGRAMS':
      return { ...state, programs: action.payload }
    case 'ACTIVE_PROGRAM':
      return { ...state, activeProgram: action.payload }
    case 'COHORTS':
      return { ...state, cohorts: action.payload }
    case 'ACTIVE_COHORT':
      return { ...state, activeCohort: action.payload }
    case 'SESSIONS':
      return { ...state, sessions: action.payload }
    case 'PARTICIPANTS':
      return { ...state, participants: action.payload }
    default:
      return state
  }
} 