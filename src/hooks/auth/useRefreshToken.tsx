import { useContext } from "react";
import { axiosPrivate } from "../../api/axios";
import { AuthContext } from "../../context/auth/AuthContext";
import { useAuthContext } from "./useAuthContext";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);
  const { dispatch } = useAuthContext();

  const refresh = async () => {
    const response = await axiosPrivate.get("/auth/refresh-token");

    if (response.data) {
      dispatch({ type: "LOGIN", payload: response.data });
      setAuth(() => response.data);
    } else {
      dispatch({ type: "LOGIN", payload: response.data });
      setAuth(null);
    }

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
