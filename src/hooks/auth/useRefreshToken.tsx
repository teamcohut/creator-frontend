import { useContext } from "react";
import { axiosPrivate } from "../../api/axios";
import { AuthContext } from "../../context/auth/AuthContext";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);

  const refresh = async () => {
    const response = await axiosPrivate.get("/auth/refresh-token"
    //     , {
    //     withCredentials: true,
    //     headers: {
    //         "Authorization" : `Bearer ${localStorage.getItem("auth-token")}`
    //     }
    // }
);
    
    if (response.data) {
      setAuth(() => response.data);
    } else {
      setAuth(null);
    }

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
