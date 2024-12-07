import React, { ChangeEvent, useState } from "react";
import Button from "../../../atoms/Button";
import EmailInput from "../../../atoms/inputs/EmailInput";
import { Link } from "react-router-dom";
import "../../style.css";
import { useSignup } from "../../../../hooks/auth/useSignUp";
import { ISignupData } from "../../../../@types/auth.interface";
import PasswordInput from "../../../atoms/inputs/PasswordInput";


const SignUpForm: React.FC = () => {
  const [form, setForm] = useState<ISignupData>({
    email: "",
    password: "",
  });
  const [isvalid, setIsvalid] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const handleInputChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const confirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setIsvalid(e.target.value === form.password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = form;
    if (isvalid) {
      await signup(email, password);
      console.log("Form values:", form);
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <form
      className="form bg-white d-flex flex-column rounded-5"
      onSubmit={handleSubmit}
    >

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
          valid={isvalid}
          showStrength={false}
          onchange={confirmPassword}
          placeHolder="password"
        />

      </div>

      {error && <div>{error}</div>}

      <div className="d-flex flex-column align-items-center gap-3">

        <Button
          children="Create Account"
          type="submit"
          action={() => {}}
          fill={true}
        />

        <span className="">
          Already have an account?{" "}
          <Link className="primary-700 text-decoration-none" to={"/login"}>
            Sign in
          </Link>
        </span>

      </div>
      
    </form>
  );
};

export default SignUpForm;
