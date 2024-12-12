import React, { useState } from "react";
import Button from "../../../atoms/Button";
import EmailInput from "../../../atoms/inputs/EmailInput";
import { Link, useNavigate } from "react-router-dom";
import "../../style.css";
import { ISignupData } from "../../../../@types/auth.interface";
import { notification } from "antd";
import PasswordInput from "../../../atoms/inputs/PasswordInput";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../../../api/axios";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<ISignupData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.auth.signup(payload);
    },
    onSuccess: (data: any) => {
      localStorage.setItem("user", JSON.stringify(data?.data?.data || ""));
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    const { email, password } = form;
    await signupMutation.mutate({ email, password });
  };

  return (
    <div className="form bg-white d-flex flex-column rounded-5">
      <Link
        className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
        to={"/"}
      >
        Cohut
      </Link>

      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Create your account</h1>
        <span className="manrope-500 dark-700 fs-body">
          Launch your program in no time just by creating an account with us.
        </span>
      </div>

      <div className="d-flex flex-column gap-4">
        <EmailInput
          label="Email"
          id="email"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("email", e.target.value)
          }
          placeholder="user@email.com"
        />

        <PasswordInput
          label="Password"
          id="password"
          valid={true}
          showStrength={true}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("password", e.target.value)
          }
          placeHolder="password"
        />

        <PasswordInput
          label="Confirm Password"
          id="cpassword"
          valid={form.password === form.confirmPassword}
          showStrength={false}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("confirmPassword", e.target.value)
          }
          placeHolder="confirm password"
        />
      </div>

      {/* {error && <div>{error}</div>} */}

      <div className="d-flex flex-column align-items-center gap-3">
        <Button
          children="Create Account"
          type="submit"
          action={handleSubmit}
          fill={true}
          loading={signupMutation.isPending}
        />

        <span className="">
          Already have an account?{" "}
          <Link className="primary-700 text-decoration-none" to={"/login"}>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
