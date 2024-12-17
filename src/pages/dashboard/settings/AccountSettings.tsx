import { useContext, useState } from "react";
import { TextInput2 } from "../../../components/atoms/inputs/TextInput";
import { FiEdit3, FiSave, FiTrash2, FiUser } from "react-icons/fi";
import DeactivateAccountModal from "../../../components/organisms/dashboard/modals/DeactivateAccountModal";
import { useMutation } from "@tanstack/react-query";
import api from "../../../api/axios";
import { notification } from "antd";
import EmailInput2 from "../../../components/atoms/inputs/EmailInput2";
import Button from "../../../components/atoms/Button";
import { TModal } from "../../../@types/dashboard.interface";
import PasswordInput from "../../../components/atoms/inputs/PasswordInput";
import ChangePasswordModal from "../../../components/organisms/dashboard/modals/ChangePasswordModal";
import { AuthContext } from "../../../context/auth/AuthContext";

const AccountSettings = () => {
  // const user = JSON.parse(localStorage.getItem("user") || "");
  const { user } = useContext(AuthContext);
  // const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);

  const setModalOpenState = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };

  // const hoverStyle = isHovered
  // ? {
  //     color: "var(--primary-800) !important",
  //     borderColor: "var(--primary-800) !important",
  //   }
  // : {};

  const updateAccountInfoMutation = useMutation({
    mutationFn: (payload: any) => api.user.update(payload),
    onSuccess: (data: any) => {
      notification.success({ message: "Account updated successfully" });
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  return (
    <>
      <div className="d-flex gap-133 align-items-start">
        <div className="d-flex flex-column w-60 gap-4">
          <div className="d-flex gap-4 ">
            <TextInput2
              id="first_name"
              label="First Name"
              placeHolder="First Name"
              value={firstName}
              onchange={(e) => setFirstName(e.target.value)}
              icon={<FiUser className="dark-300" />}
            />
            <TextInput2
              id="first_name"
              label="Last Name"
              placeHolder="Last Name"
              value={lastName}
              onchange={(e) => setLastName(e.target.value)}
              icon={<FiUser className="dark-300" />}
            />
          </div>

          <EmailInput2
            id="email"
            label="Email"
            value={email}
            placeholder={email}
            onchange={(e) => setEmail(e.target.value)}
          />

          <Button
            action={() => {
              updateAccountInfoMutation.mutate({ firstName, lastName, email });
            }}
            loading={updateAccountInfoMutation.isPending}
            type="button"
            outline="primary"
            fill={false}
            width={120}
            gap
            border
          >
            <FiSave />
            <span>Save</span>
          </Button>
          {/* <div className="pb-4"></div> */}
          <PasswordInput
            id="change-password"
            placeHolder=""
            label="Password"
            value="*********"
            icon={
              <span
                onClick={(e) =>
                  setModal((prev) => ({ open: true, name: "changepassword" }))
                }
              >
                <FiEdit3 color="#453BDB" />
              </span>
            }
            onchange={() => {}}
            valid={true}
          />
        </div>
        <div>
          <div>
            <h3 className="manrope-600 fs-h4 primary-950 pb-1">Role</h3>
            <p className="manrope-500 fs-body dark-700 pb-4">Owner</p>
          </div>

          <h4 className="manrope-600 fs-h4 primary-950 pb-1">Danger Zone</h4>
          <span
            style={{ cursor: "pointer" }}
            className="d-flex align-items-center gap-1 manrope-700 fs-body error-400"
            onClick={() =>
              setModal((prev) => ({ open: true, name: "deactivateaccount" }))
            }
          >
            Deactivate Account <FiTrash2 />
          </span>
        </div>
      </div>
      {modal.name === "deactivateaccount" && (
        <DeactivateAccountModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
      {modal.name === "changepassword" && (
        <ChangePasswordModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default AccountSettings;
