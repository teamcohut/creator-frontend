import { useState } from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import SignupSuccess from "../../components/organisms/forms/signUpForm/SignupSuccess";
import SignUpForm from "../../components/organisms/forms/signUpForm";

const SignUp = () => {
  const [signUpSuccess, setSignupSuccess] = useState(false);

  return (
    <>
      <AuthTemplate
        title={`Launch Your Learning Program In 5 Minutes`}
        author="Cohut"
      >
        {signUpSuccess ? (
          <SignupSuccess />
        ) : (
          <SignUpForm setSignupSuccess={setSignupSuccess} />
        )}
      </AuthTemplate>
    </>
  );
};

export default SignUp;
