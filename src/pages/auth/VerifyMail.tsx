import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import AuthTemplate from "../../components/templates/AuthTemplate";
import SuccessCard from "../../components/molecules/auth/SuccessCard";
import Button from "../../components/atoms/Button";
import { FiLoader, FiShieldOff, FiUserCheck } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

const VerifyMail = () => {
  const navigate = useNavigate();

  // const route = useParams();
  // const { id } = route;
  const url = window.location.pathname; // e.g., "/users/123"
  const id = url.split("/").pop() ?? ""; // Extract the last segment

  const { isLoading, isError } = useQuery({
    queryKey: ["activate-account"],
    queryFn: async () => {
      const response = await api.auth.activateAccount(id);
      console.log("error from query", response.data);
      if (!response.data.error) {
        setTimeout(() => {
          navigate("/login");
        }, 60000);
      }
      return response;
    },
  });

  return (
    // <AuthTemplate
    //   title="Launch Your Learning Program In 5 Minutes"
    //   author="Cohut"
    // >
    //   {isLoading ? (
    //     <SuccessCard
    //       icon={<FiLoader className="spinner success-600 fs-icon " />}
    //       title="Verifying ..."
    //       description="Please wait a second while we verify your account"
    //     />
    //   ) : isError ? (
    //     <SuccessCard
    //       icon={<FiShieldOff className="error-300 fs-icon" />}
    //       title="Verification Failed!"
    //       description={`Your account could not be verified. \n The verification link you used has expired. To proceed, you can request for a new link to be sent to your mail.`}
    //     >
    //       <div className="w-50">
    //         <Button
    //           action={() => navigate("/resend-mail")}
    //           children="Resend Mail"
    //           type="button"
    //           fill={false}
    //           border
    //           outline="primary"
    //           gap
    //           width={192}
    //         />
    //       </div>
    //     </SuccessCard>
    //   ) : (
    //     <SuccessCard
    //       icon={<FiUserCheck className="success-600 fs-icon" />}
    //       title="Account Verified!"
    //       description="Your account has been successfully verified. You can now proceed to sign up"
    //     >
    //       <div className="w-auto">
    //         <Button
    //           action={() => {
    //             navigate("/login");
    //           }}
    //           children="Sign In"
    //           type="button"
    //           fill={false}
    //           border
    //           outline="primary"
    //         />
    //       </div>
    //     </SuccessCard>
    //   )}
    // </AuthTemplate>
    <></>
  );
};

export default VerifyMail;
