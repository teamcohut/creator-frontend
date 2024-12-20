import { IAuthState, TAuthAction } from "../../@types/auth.interface";

export const authReducer = (
  state: IAuthState,
  action: TAuthAction
): IAuthState => {
  switch (action.type) {
    case "LOGIN":
    case "SET_USER":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
