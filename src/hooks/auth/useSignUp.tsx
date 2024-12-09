import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosPublic } from "../../api/axios";

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosPublic.post("/auth/register", {
        email,
        password,
      });
      const json = response.data;
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        console.log("signup successful:", response.data);
      }
      setIsLoading(false);
      return json;
    } catch (error: any) {
      console.log(error);
      return error.response || error.data;
    }
  };

  return { signup, error, isLoading };
};
