import { useContext } from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import SignupSuccess from "../../components/organisms/forms/signUpForm/SignupSuccess";
import SignUpForm from "../../components/organisms/forms/signUpForm";
import { AuthContext } from "../../context/auth/AuthContext";

const SignUp = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dispatch, user } = useContext(AuthContext);

  return (
    <>
      <AuthTemplate
        title={`Launch Your Learning Program In 5 Minutes`}
        author="Cohut"
      >
        {user ? <SignupSuccess /> : <SignUpForm />}
      </AuthTemplate>
    </>
  );
};

export default SignUp;
