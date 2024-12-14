import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosPublic } from "../../api/axios";
import AuthTemplate from "../../components/templates/AuthTemplate";
import SuccessCard from "../../components/molecules/auth/SuccessCard";
import Button from "../../components/atoms/Button";
import { FiLoader, FiShieldOff, FiUserCheck } from "react-icons/fi";

const VerifyMail = () => {
  const [status, setstatus] = useState<status>("loading");
  const navigate = useNavigate();

  const route = useParams();
  const { id } = route;

  useEffect(() => {
    verifyMail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyMail = async () => {
    try {
      const response = await axiosPublic.post(`/auth/activate-account/${id}`);
      if (!response) {
        navigate("/signup");
      }
      console.log(response);
      if (!response.data.error) {
        setstatus("verified");
        setTimeout(() => {
          navigate("/login");
        }, 60000);
      }
    } catch (error: any) {
      console.log(error);
      setstatus("error");
    }
  };

  if (status === "loading") {
    return (
      <AuthTemplate
        title="Launch Your Learning Program In 5 Minutes"
        author="Cohut"
      >
        <SuccessCard
          icon={<FiLoader className="spinner success-600 fs-icon " />}
          title="Verifying ..."
          description="Please wait a second while we verify your account"
        />
        :
      </AuthTemplate>
    );
  } else if (status === "verified") {
    return (
      <AuthTemplate
        title="Launch Your Learning Program In 5 Minutes"
        author="Cohut"
      >
        <SuccessCard
          icon={<FiUserCheck className="success-600 fs-icon" />}
          title="Account Verified!"
          description="Your account has been successfully verified. You can now proceed to sign up"
        >
          <div className="w-auto">
            <Button
              action={() => {
                navigate("/login");
              }}
              children="Sign In"
              type="button"
              fill={false}
              border
              outline="primary"
            />
          </div>
        </SuccessCard>
      </AuthTemplate>
    );
  } else if (status === "error") {
    return (
      <AuthTemplate
        title="Launch Your Learning Program In 5 Minutes"
        author="Cohut"
      >
        <SuccessCard
          icon={<FiShieldOff className="error-300 fs-icon" />}
          title="Verification Failed!"
          description={`Your account could not be verified. \n The verification link you used has expired. To proceed, you can request for a new link to be sent to your mail.`}
        >
          <div className="w-50">
            <Button
              action={() => navigate("/resend-mail")}
              children="Resend Mail"
              type="button"
              fill={false}
              border
              outline="primary"
              gap
              width={192}
            />
          </div>
        </SuccessCard>
      </AuthTemplate>
    );
  }

  return <></>;
};

type status = "loading" | "verified" | "error";

export default VerifyMail;
