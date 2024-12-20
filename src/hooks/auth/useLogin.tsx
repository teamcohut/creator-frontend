import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { axiosPublic } from "../../api/axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosPublic.post("auth/login", {
        email,
        password,
      });
      const json = response.data.data;
      if (response.status === 200) {
        localStorage.setItem("user", json);
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);

        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return { login, error, isLoading };
};

// type SubmitForm = () => void;
