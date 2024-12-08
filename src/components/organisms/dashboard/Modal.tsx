import React, { FC, useEffect } from "react";
import "../style.css";
import { IModal } from "../../../@types/dashboard.interface";

const Modal: FC<IModal> = ({ open, setModalOpen, children }) => {
  useEffect(() => {
    setModalOpen(open);
  }, [open, setModalOpen]); // Re-render when `open` changes

  useEffect(() => {
    if (children === <></>) {
      setModalOpen(false);
    }
  }, [children, setModalOpen]);

  return (
    <>
      <div
        onClick={() => setModalOpen(false)}
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

// import React, { FC } from 'react';
// import './Modal.css';
// import { IModal } from '../../../../@types/dashboard.interface';

// const Modal: FC<IModal> = ({ open, children }) => {
//   return (
//     <>
//       <div
//         className={`modal-bg align-items-center justify-content-center ${open ? 'd-flex' : 'hidden'}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="modal-div w-fit h-fit">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

// import React, { FC, useState } from 'react'
// import '../style.css'
// import { IModal } from '../../../../@types/dashboard.interface'

// const Modal: FC<IModal> = ({ open, children }) => {
//   const [modalOpen, setmodalOpen] = useState(true)
//   return (
//     <>
//       <div onClick={() => setmodalOpen(false)} className={`modal-bg align-items-center justify-content-center ${modalOpen ? ' d-flex' : ' hidden'}`}>
//         <div onClick={() => { }} className='modal-div w-fit h-fit'>
//           {children}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Modal
