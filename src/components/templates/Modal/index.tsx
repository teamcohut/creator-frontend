import { FC, useEffect } from "react";
import "./style.css";
import { IModal } from "../../../@types/dashboard.interface";

const Modal: FC<IModal> = ({ open, setModalOpen, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setModalOpen(false, "");
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setModalOpen]);

  useEffect(() => {
    if (children === <></>) {
      setModalOpen(false, "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  if (!open) return null;

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
