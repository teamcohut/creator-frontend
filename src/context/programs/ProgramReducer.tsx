import { IProgramState, TProgramAction } from "../../@types/program.interface"

export const programReducer = (state: IProgramState, action: TProgramAction): IProgramState => {
    switch (action.type) {
      case 'SETUP':
        return { program: action.payload }
    //   case 'LOGOUT':
    //     return { user: null }
      default:
        return state
    }
  } 