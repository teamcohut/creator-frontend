import Header from "../organisms/dashboard/Header";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";

const SessionResource = () => {
  return (
    <div className="border">
      <Header title="Resources" subtitle="">
        <></>
      </Header>

      <div className="d-flex flex-column position-relative">
        <div className="d-flex flex-row align-items-start">
          <FiBookOpen className="fs-h1 fushia-500" />
          <div className="d-flex flex-column">
            <span className="manrope-500 fs-body">
              <a href="www.google.com">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis, dolores!
              </a>
            </span>
            <span className="deadline-title manrope-500 secondary-400 fs-body">
              Session: Introduction to UI/UX Design
            </span>
          </div>
          <FiArrowRight
            className="ms-auto primary-700"
            onClick={() => { }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="vertical-line" />
      </div>
    </div>
  );
};

export default SessionResource;
