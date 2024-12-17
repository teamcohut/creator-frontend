import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthTemplate from "../../components/templates/AuthTemplate";
import ForgotPasswordForm from "../../components/organisms/forms/loginForm/ForgotPasswordForm";
import SuccessCard from "../../components/molecules/auth/SuccessCard";
import Button from "../../components/atoms/Button";
import { FiMail } from "react-icons/fi";

const ForgotPassword = () => {
  const [verified, setVerified] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const route = useParams();

  const verify = (email: string) => {
    setVerified(true);
    setEmail(email);
  };

  if (!verified) {
    return (
      <>
        <AuthTemplate
          title="The simplest solution is often the best solution."
          author="William of Ockham"
        >
          <ForgotPasswordForm verify={verify} />
        </AuthTemplate>
      </>
    );
  } else {
    return (
      <>
        <AuthTemplate
          title="The simplest solution is often the best solution."
          author="William of Ockham"
        >
          <SuccessCard
            title="You've got mail"
            description={``}
            icon={<FiMail className="fs-icon success-600" />}
          >
            <div className="w-auto d-flex flex-column align-items-center gap-5">
              <span className="manrope-500 dark-700 fs-body">
                A verification link has been sent to{" "}
                <span className="primary-700">{email}</span>. Please check your
                inbox and click the link to continue.
              </span>
              <div className="d-flex flex-column align-items-center gap-2">
                <small className="dark-500 manrope-500 fs-small">
                  Didn&apos;t get an email?
                </small>
                <Button
                  action={() => setVerified(false)}
                  children="Resend Email"
                  type="button"
                  fill={false}
                  border
                  outline="primary"
                  width={192}
                />
              </div>
            </div>
          </SuccessCard>
        </AuthTemplate>
      </>
    );
  }
};

export default ForgotPassword;
