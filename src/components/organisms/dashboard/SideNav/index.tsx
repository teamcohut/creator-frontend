import { FC, useContext, useState } from "react";
import NavLink from "../../../atoms/dashboard/NavLink";
import { NavList } from "./NavList";
import Icon from "../../../atoms/Icon";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiLogOut, FiPlus, FiSettings } from "react-icons/fi";
import "../../style.css";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";
import CohortsDropdown from "../../../molecules/dashboard/CohortsDropdown";
import { IStatus, TActiveModal } from "../../../../@types/dashboard.interface";
import Button from "../../../atoms/Button";

const SideNav: FC<IStatus> = ({ status }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<TActiveModal>(null);
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const { activeProgram, activeCohort } = useContext(ProgramContext);

  const openModal = (modal: TActiveModal) => {
    setActiveModal(modal);
    setModalOpen(true);
  };

  const ActionButton = () => {
    if (status === "pending") {
      return (
        <Button
          action={() => {}}
          children=""
          fill
          type="button"
          loading
          outline="primary"
        />
      );
    } else if (status === "error") {
      return <></>;
    } else {
      if (!activeProgram.title) {
        return (
          <button
            onClick={() => openModal("program")}
            className="setup-button no-wrap border-none rounded-4 manrope-500 fs-button w-100 d-flex align-items-center justify-content-start gap text-white"
            type="button"
          >
            <FiPlus className="fs-h2 plus-icon" />
            <span className="text-white">Setup Your Program</span>
          </button>
        );
      } else {
        if (!activeCohort.name) {
          return (
            <button
              onClick={() => openModal("cohort")}
              className="setup-button no-wrap border-none rounded-4 manrope-500 fs-button w-100 d-flex align-items-center justify-content-start gap text-white"
              type="button"
            >
              <FiPlus className="fs-h2 plus-icon" />
              <span className="text-white">Onboard New Cohort</span>
            </button>
          );
        } else {
          return <CohortsDropdown />;
        }
      }
    }
  };

  return (
    <>
      {modalOpen && activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {modalOpen && activeModal === "cohort" && (
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className={`sidenav-div ${navOpen && 'sidenav-open'}`}>
          <button onClick={()=>setNavOpen(!navOpen)} className="toggle-nav dark-50 rounded-pill d-flex align-items-center justify-content-start px-1">
            {
              navOpen?
              <FiChevronLeft />:
              <FiChevronRight />
            }
          </button>
        <div className="side-nav d-flex flex-column align-items-start justify-content-start gap-5">
          <Link className="logo-lg" to={"/"}>
            <Icon type="text-logo" fill={"true"} size={130} />
          </Link>
          {ActionButton()}
          <div className="w-100 d-flex flex-column align-items-center text-center gap-3">
            {NavList.map((el, i) => (
              <NavLink key={i} type={"link"} dropdownList={[]} path={el.path}>
                {el.icon}
                <span className="fs-body">{el.title}</span>
              </NavLink>
            ))}
          </div>
          <div className="w-100 d-flex flex-column gap-2 nav-tools">
            <hr />
            <NavLink type={"link"} dropdownList={[]} path={"settings"}>
              <FiSettings className="nav-icon" />
              <span>Settings</span>
            </NavLink>
            <NavLink type={"logout"} dropdownList={[]} path={""}>
              <FiLogOut className="nav-icon" />
              <span
                onClick={() => {
                  localStorage.removeItem("authToken");
                  window.location.href = "/login";
                }}
              >
                Sign Out
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
