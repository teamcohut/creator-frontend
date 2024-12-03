// import React from 'react'
// import Button from '../../../atoms/Button'
// import { Link, useNavigate } from 'react-router-dom'
// import ProgressBar from '../../../molecules/auth/PregressBar'
// import { FiArrowLeft, FiImage } from 'react-icons/fi'
// import TextAreaInput from '../../../atoms/inputs/TextareaInput'
// import TextInput from '../../../atoms/inputs/TextInput'
// import FormFooter from '../../../molecules/auth/FormFooter'
// import '../../style.css'

// const ProgramDetail = () => {
//   const navigate = useNavigate();
//   const handleContinue = () => {
//     navigate('/customize-program');
//   };

//   return (
//     <>
//       <form className="form bg-white d-flex flex-column rounded-5 mx-auto" action="">
//         <ProgressBar
//           height={8}
//           length={2}
//           page={1}
//           absolute={true}
//           gap
//           rounded={false}
//         />
//         {/* <div className="w-100 d-flex justify-content-between">
//           <Link
//             className="primary-700 manrope-600 fs-h3 text-decoration-none d-flex d-lg-none"
//             to={"/"}
//           >
//             Cohut
//           </Link>
//           <span className="dark-700 back" onClick={() => navigate(-1)}>
//             <FiArrowLeft /> Back
//           </span>
//         </div> */}
//         <div className="d-flex flex-column gap-2">
//           <h1 className="manrope-600 primary-950 fs-h2">Program Details</h1>
//           <span className="manrope-500 dark-700 fs-body">
//             Lets input what makes your learning program special
//           </span>
//         </div>

//         <div className="d-flex flex-column gap-4">
//           <TextInput
//             label="Program Title"
//             id="programtitle"
//             placeHolder="Enter Title"
//             onchange={(e: any) => console.log(e.target.value)}
//           />

//           <TextAreaInput
//             label="Description"
//             id="description"
//             placeHolder="What is your program about?"
//             onchange={(e: any) => console.log(e.target.value)}
//           />

//           <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
//             <p className='manrope-600'>Program Format</p>
//             <div className='d-flex flex-row align-items-center gap-3 px-2'>
//               <p className='bg-secondary-450 secondary-200 px-3 py-1 rounded-5 manrope-500'>Hybrid</p>
//               <p>Virtual</p>
//               <p>Physical</p>
//             </div>
//           </div>

//           {/* <div className="dashed-border p-3 rounded-2 d-flex flex-column align-items-center justify-content-center text-center">
//             <FiImage className="h1 dark-400" />
//             <p className="fs-caption">
//               Drag-n-drop or <span className="primary-600">Upload</span>{" "}
//               Thumbnail image
//             </p>
//           </div>
//           <span className="fs-caption primary-400">(png,jpeg,jpg)</span> */}
//         </div>

//         <div className="d-flex flex-column align-items-center gap-3">
//           <Button
//             children="Continue"
//             action={handleContinue}
//             type="button"
//             fill={true}
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// export default ProgramDetail;








import React from "react";
import Button from "../../../atoms/Button";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextAreaInput from "../../../atoms/inputs/TextareaInput";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";

interface ProgramDetailProps {
  onContinue: () => void; // Add this prop
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ onContinue }) => {
  return (
    <>
      <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
        <ProgressBar
          height={8}
          length={2}
          page={1}
          absolute={true}
          gap
          rounded={false}
        />
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">Program Details</h1>
          <span className="manrope-500 dark-700 fs-body">
            Let’s input what makes your learning program special
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          <TextInput
            label="Program Title"
            id="programtitle"
            placeHolder="Enter Title"
            onchange={(e: any) => console.log(e.target.value)}
          />

          <TextAreaInput
            label="Description"
            id="description"
            placeHolder="What is your program about?"
            onchange={(e: any) => console.log(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={onContinue}
            type="button"
            fill={true}
          />
        </div>
      </form>
    </>
  );
};

export default ProgramDetail;
