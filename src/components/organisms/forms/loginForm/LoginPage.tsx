import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../atoms/Button";
import EmailInput from "../../../atoms/inputs/EmailInput";
import PasswordInput from "../../../atoms/inputs/PasswordInput";
import "../../style.css";
import { notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.auth.login(payload);
    },
    onSuccess: (data: any) => {
      localStorage.setItem("user", JSON.stringify(data?.data?.data || ""));
      navigate("/");
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const handleSubmit = async () => {
    const payload = { email, password };
    await loginMutation.mutate(payload);
  };

  return (
    <>
      <div className="form bg-white d-flex flex-column rounded-5">
        <Link
          className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
          to={"/"}
        >
          Cohut
        </Link>
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">
            Sign in to your account.
          </h1>
          <span className="manrope-500 dark-700 fs-body">
            Get into your dashboard in less than 1 minute.
          </span>
        </div>
        <div className="d-flex flex-column gap-4">
          <EmailInput
            label="Email"
            id="email"
            onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="user@email.com"
          />

          <div className="d-flex flex-column gap-2">
            <PasswordInput
              label="Password"
              id="password"
              valid={true}
              showStrength={false}
              onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeHolder="password"
            />

            <span>
              <Link
                className="primary-700 fs-footer text-decoration-none"
                to={"/forgot-password"}
              >
                Forgot password?
              </Link>
            </span>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Sign in"
            type="submit"
            fill={true}
            action={handleSubmit}
            loading={loginMutation.isPending}
          />
          <span className="fs-footer">
            Don't have an account?{" "}
            <Link className="primary-700 text-decoration-none" to={"/signup"}>
              Create one here
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
