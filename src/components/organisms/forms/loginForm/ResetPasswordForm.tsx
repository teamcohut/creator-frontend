import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../../atoms/inputs/PasswordInput";
import Button from "../../../atoms/Button";
import { IResetPasswordForm } from "../../../../@types/auth.interface";
import { axiosPublic } from "../../../../api/axios";
import { notification } from "antd";

const ResetPasswordForm: FC<IResetPasswordForm> = ({
  successful,
  token,
  id,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const confirmPassword = (e: string) => {
    if (e === password) {
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isvalid) {
      console.log("Passwords do not match");
      api.error({
        message: "Passwords do not match",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosPublic.post(
        `/auth/reset-password?token=${token}&id=${id}`,
        { newPassword: password }
      );

      if (!response.data.error) {
        console.log(response.data);
        api.error({
          message: response.data.message || response.data.errors[0],
        });
      }

      successful();
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      const message =
        error.response.data.message || error.response.data.errors[0];
      api.error({
        message,
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <form
        className="form bg-white d-flex flex-column rounded-5"
        onSubmit={handleSubmit}
        action=""
      >
        <Link
          className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
          to={"/"}
        >
          Cohut
        </Link>

        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">Reset Password.</h1>
          <span className="manrope-500 dark-700 fs-body">
            Now you have successfully verified your account, we advise that you
            change your password.
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <PasswordInput
            label="New password"
            id="password"
            valid={true}
            showStrength={true}
            onchange={(e: any) => setPassword(e.target.value)}
            placeHolder="password"
          />

          <PasswordInput
            label="Confirm password"
            id="cpassword"
            valid={isvalid}
            showStrength={false}
            onchange={(e: any) => confirmPassword(e.target.value)}
            placeHolder="password"
          />
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Reset Password"
            type="submit"
            fill
            action={() => {}}
            loading={isLoading}
          />
          <span>
            Remember your password?{" "}
            <Link className="primary-700 text-decoration-none" to={"/login"}>
              Sign in here
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordForm;
