import React, { useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { notification } from "antd";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { ProgramContext } from "../../../../context/programs/ProgramContext";

type ProgramData = {
  title: string;
  description: string;
  cover: any;
  logo: any;
  format: string;
  communities: string[];
  certificates: string[];
};

interface CustomizeProgramProps {
  programData: ProgramData;
  setProgramData: (data: any) => void;
  setCurrentStep: (step: number) => void;
  setSuccessful: (status: boolean) => void;
  closeModal: any;
  prevStep: any;
}

const CustomizeProgram: React.FC<CustomizeProgramProps> = ({
  programData,
  setProgramData,
  setCurrentStep,
  setSuccessful,
  closeModal,
  prevStep
}) => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [banner, setBanner] = useState<string>("");

  const uploadImageMutation = useMutation({
    mutationFn: (data: any) => api.program.uploadProgramImage(data.file),
    onSuccess: (data: any, variables) => {
      if (variables.type === "thumbnail") {
        setThumbnail(data.data.data.url);
      }
      if (variables.type === "banner") {
        setBanner(data.data.data.url);
      }
    },
    onError: (error: any) => {
      notification.error({
        message:
          error.response?.data?.message ||
          "An error occured while uploading file",
      });
    },
  });

  const handleThumbnailChange = async (file: any) => {
    uploadImageMutation.mutate({ type: "thumbnail", file });
  };

  const handleBannerChange = async (file: any) => {
    uploadImageMutation.mutate({ type: "banner", file });
  };

  const createProgramMutation = useMutation({
    mutationFn: (payload: any) => api.program.createProgram(payload),
    onSuccess: (data: any) => {
      localStorage.setItem('programId', data.data.data._id)
      setProgramData(data.data.data)
      setSuccessful(true);
      setCurrentStep(3);
    },
    onError: (error: any) => {
      notification.error({
        message: "Failed to create program. Please try again.",
      });
    },
  });

  const handleProgramSubmit = async () => {

    const payload = {
      ...programData,
      cover: banner,
      logo: thumbnail,
    };

    createProgramMutation.mutate(payload);
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      <ProgressBar
        height={8}
        length={2}
        page={2}
        absolute={true}
        gap
        rounded={false}
      />
      <div className="d-flex flex-row justify-content-between">
        <p className="" onClick={prevStep}><FiArrowLeft /> Back</p>
        <FiX className="fs-h3" onClick={closeModal} />
      </div>
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Customize Program</h1>
        <span className="manrope-500 dark-700 fs-body">
          Customize your program's timing to fit your learner's needs.
        </span>
      </div>
      <div className="d-flex flex-column gap-4">
        <DragNDropInput
          label="Program Logo (Optional)"
          id="thumbnail-upload"
          detail="Program's Logo"
          onchange={(file) => handleThumbnailChange(file)}
        />
        <div>
          <DragNDropInput
            label="Banner Image (Optional)"
            id="banner-upload"
            detail="Program's Cover Image"
            onchange={(file) => handleBannerChange(file)}
          />
          <span className="fs-caption primary-400">
            Banner image will be displayed across your Program (png, jpg, jpeg)
          </span>
        </div>

      </div>
      {/* {uploadImageMutation.isPending && <p>Uploading image...</p>} */}
      <div className="d-flex flex-column align-items-center gap-3">
        <Button
          children="Complete Setup"
          action={handleProgramSubmit}
          type="button"
          fill={true}
          loading={createProgramMutation.isPending}
          disabled={uploadImageMutation.isPending || createProgramMutation.isPending}
        />
      </div>
    </form>
  );
};

export default CustomizeProgram;
