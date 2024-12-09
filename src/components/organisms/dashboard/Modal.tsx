import React, { FC } from "react";
import "../style.css";
import { IModal } from "../../../@types/dashboard.interface";

const Modal: FC<IModal> = ({ open, setModalOpen, children }) => {
  return (
    <>
      <div
        onClick={() => setModalOpen(false, "")}
        className={`modal-bg align-items-center justify-content-center ${
          open ? "d-flex" : "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          className="modal-div w-fit h-fit"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
