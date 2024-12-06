import "./index.css";
import { FC } from "react";
import { IAuthTemplate } from "../../../@types/authtemplate.interface";
import Logo from "../../atoms/Logo/Logo";

const AuthTemplate: FC<IAuthTemplate> = ({ children, title, author }) => {
  return (
    <>
      <div className="form-template container-fluid">
        <div className="left-div d-none d-lg-flex flex-column justify-content-between align-items-start">
          <Logo logo="logo-white" width={88.91} />
          <img width={400} src="/assets/images/auth-img.png" alt="Dashboard preview" />
          <div>
            <h1 className="manrope-300 fs-h1 mt-auto text-white">{title}</h1>
            <span className="manrope-500 fs-body dark-50">-{author}</span>
          </div>
        </div>
        <div className="form-container">{children}</div>
      </div>
    </>
  );
};

export default AuthTemplate;
