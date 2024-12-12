import { FC, useContext, useState } from "react";
import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
import Congratulations from "../../../molecules/dashboard/Congratulations";
import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
import api, { axiosPrivate } from "../../../../api/axios";
import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
import { useGetProgram } from "../../../../hooks/program/useGetProgram";
import Modal from "../../../templates/Modal";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { ProgramContext } from "../../../../context/programs/ProgramContext";

const SetupProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [programData, setProgramData] = useState<ProgramData>({
    title: "",
    description: "",
    cover: null,
    logo: null,
    format: "hybrid",
    communities: [],
    certificates: [],
  });
  const { dispatch } = useContext(ProgramContext)

  const updateProgramData = (data: Partial<ProgramData>) => {
    setProgramData((prev) => ({ ...prev, ...data }));
  };

  console.log("program data", programData);


  // Helper function to convert File to Base64
  const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const openModal = (modal: TModal) => {
    setCurrentStep(1);
    // setActiveModal(modal)
    setModalOpen(true, "program");
  };

  // Helper function to reset state
  const resetState = () => {
    setModalOpen(false, "");
    setProgramData({
      title: "",
      description: "",
      cover: null,
      logo: null,
      format: "hybrid",
      communities: [],
      certificates: [],
    });
    setCurrentStep(0);
  };

  const handleProgramDetailContinue = (data: {
    title: string;
    description: string;
  }) => {
    setProgramData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const createProgramMutation = useMutation({
    mutationFn: (payload: any) =>
      api.program.createProgram(payload),
    onSuccess: (data: any) => {
      dispatch({ type: "ACTIVE_PROGRAM", payload: data.data.data })
      setCurrentStep(3);
    },
    onError: (error: any) => {
      notification.error({
        message: "Failed to create program. Please try again.",
      });
    },
  });

  const handleProgramSubmit = async () => {
    if (!programData.cover || !programData.logo) {
      alert("Cover and logo must be uploaded before submission.");
      return;
    }
    const payload = {
      ...programData,
      cover: programData.cover,
      logo: programData.logo
    };

    createProgramMutation.mutate(payload)
  };

  return (
    <>
      <Modal open={modalOpen} setModalOpen={setModalOpen}>
        {currentStep === 1 && (
          <ProgramDetail onContinue={handleProgramDetailContinue} />
        )}
        {currentStep === 2 && (
          <CustomizeProgram
            programData={programData}
            onSubmit={handleProgramSubmit}
            updateProgramData={updateProgramData}
          />
        )}
        {currentStep === 3 && (
          <Congratulations clear={resetState} openModal={openModal} />
        )}
      </Modal>
    </>
  );
};

interface ProgramData {
  title: string;
  description: string;
  cover: File | null;
  logo: File | null;
  format: string;
  communities: string[];
  certificates: string[];
}

export default SetupProgramModal;


















// import { FC, useState } from "react";
// import CustomizeProgram from "../../forms/CustomizeProgram/CustomizeProgram";
// import Congratulations from "../../../molecules/dashboard/Congratulations";
// import ProgramDetail from "../../forms/CustomizeProgram/programdetails";
// import { axiosPrivate } from "../../../../api/axios";
// import { ISetupModal, TModal } from "../../../../@types/dashboard.interface";
// import { useGetProgram } from "../../../../hooks/program/useGetProgram";
// import Modal from "../../../templates/Modal";

// const SetupProgramModal: FC<ISetupModal> = ({ modalOpen, setModalOpen }) => {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [programData, setProgramData] = useState<ProgramData>({
//     title: "",
//     description: "",
//     cover: null,
//     logo: null,
//     format: "hybrid",
//     communities: [],
//     certificates: [],
//   });
//   const [isUploading, setIsUploading] = useState<boolean>(false);
//   const { getProgram } = useGetProgram();

//   const uploadFileToCloudinary = async (file: File): Promise<string> => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "your_upload_preset");

//     const response = await axiosPrivate.post(
//       "https://api.cloudinary.com/v1_1/your_cloudinary_account/image/upload",
//       formData
//     );

//     return response.data.secure_url;
//   };

//   const updateProgramDataWithFile = async (
//     file: File,
//     field: "cover" | "logo"
//   ) => {
//     setIsUploading(true);
//     try {
//       const url = await uploadFileToCloudinary(file);
//       setProgramData((prev) => ({ ...prev, [field]: url }));
//     } catch (error) {
//       console.error(`Error uploading ${field}:`, error);
//       alert(`Failed to upload ${field}. Please try again.`);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleFileChange = async (
//     event: React.ChangeEvent<HTMLInputElement>,
//     field: "cover" | "logo"
//   ) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       await updateProgramDataWithFile(file, field);
//     }
//   };

//   const resetState = () => {
//     setModalOpen(false, "");
//     setProgramData({
//       title: "",
//       description: "",
//       cover: null,
//       logo: null,
//       format: "hybrid",
//       communities: [],
//       certificates: [],
//     });
//     setCurrentStep(0);
//   };

//   const handleProgramDetailContinue = (data: {
//     title: string;
//     description: string;
//   }) => {
//     setProgramData((prev) => ({ ...prev, ...data }));
//     setCurrentStep(2);
//   };

//   const handleProgramSubmit = async () => {
//     if (!programData.cover || !programData.logo) {
//       alert("Please wait until the cover and logo are uploaded.");
//       return;
//     }

//     try {
//       const payload = { ...programData };
//       console.log("Submitting payload:", payload);

//       const response = await axiosPrivate.post("/program", payload);

//       console.log("Program created:", response.data);
//       getProgram();

//       setCurrentStep(3);
//     } catch (error) {
//       console.error("Error submitting program:", error);
//       alert("Failed to create the program. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Modal open={modalOpen} setModalOpen={setModalOpen}>
//         {currentStep === 1 && (
//           <ProgramDetail onContinue={handleProgramDetailContinue} />
//         )}
//         {currentStep === 2 && (
//           <CustomizeProgram
//             programData={programData}
//             onSubmit={handleProgramSubmit}
//             updateProgramData={setProgramData}
//             onFileChange={handleFileChange}
//             isUploading={isUploading}
//           />
//         )}
//         {currentStep === 3 && (
//           <Congratulations clear={resetState} openModal={openModal} />
//         )}
//       </Modal>
//     </>
//   );
// };

// interface ProgramData {
//   title: string;
//   description: string;
//   cover: string | null;
//   logo: string | null;
//   format: string;
//   communities: string[];
//   certificates: string[];
// }

// export default SetupProgramModal;