import { FC, useContext, useState } from "react";
import NavLink from "../../../atoms/dashboard/NavLink";
import { HelpList, NavList, SettingsList } from "./NavList";
import Icon from "../../../atoms/Icon";
import { Link } from "react-router-dom";
import { FiHelpCircle, FiLogOut, FiPlus, FiSettings } from "react-icons/fi";
import "../../style.css";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import SetupProgramModal from "../modals/SetupProgramModal";
import SetupCohortModal from "../modals/SetupCohortModal";
import CohortsDropdown from "../../../molecules/dashboard/CohortsDropdown";
import { TActiveModal } from "../../../../@types/dashboard.interface";

const SideNav: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<TActiveModal>(null);
  const { activeProgram } = useContext(ProgramContext);

  const openModal = (modal: TActiveModal) => {
    setActiveModal(modal);
    setModalOpen(true);
  };

  const ActionButton = () => {
    if (!activeProgram) {
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
      if (activeProgram.cohorts.length < 1) {
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
  };

  return (
    <>
      {modalOpen && activeModal === "program" && (
        <SetupProgramModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {modalOpen && activeModal === "cohort" && (
        <SetupCohortModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="sidenav-div">
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
            <NavLink type={"dropdown"} dropdownList={SettingsList} path={""}>
              <FiSettings className="nav-icon" />
              <span>Settings</span>
            </NavLink>
            <NavLink type={"dropdown"} dropdownList={HelpList} path={""}>
              <FiHelpCircle className="nav-icon" />
              <span>Help</span>
            </NavLink>
            <NavLink type={"logout"} dropdownList={[]} path={""}>
              <FiLogOut className="nav-icon" />
              <span
                onClick={() => {
                  localStorage.removeItem("user");
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
