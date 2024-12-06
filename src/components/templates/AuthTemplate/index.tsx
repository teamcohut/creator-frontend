import "./index.css";
import { FC } from "react";
import { IAuthTemplate } from "../../../@types/authtemplate.interface";
import Icon from "../../atoms/Icon";

const AuthTemplate: FC<IAuthTemplate> = ({ children, title }) => {
  return (
    <>
      <div className="form-template container-fluid">
        <div className="left-div d-none d-lg-flex flex-column justify-content-between align-items-start">
          <Icon fill="false" type="text-logo" size={130} />
          <h1 className="mt-auto text-white">{title}</h1>
        </div>
        <div className="form-container">{children}</div>
      </div>
    </>
  );
};

export default AuthTemplate;
