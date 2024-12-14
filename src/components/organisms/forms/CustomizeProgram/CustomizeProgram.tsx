import React, { useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { notification } from "antd";
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
  setCurrentStep: (step: number) => void;
}

const CustomizeProgram: React.FC<CustomizeProgramProps> = ({
  programData,
  setCurrentStep,
}) => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const { dispatch } = useContext(ProgramContext);

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

  console.log({
    thumbnail,
    banner,
  });

  const createProgramMutation = useMutation({
    mutationFn: (payload: any) => api.program.createProgram(payload),
    onSuccess: (data: any) => {
      dispatch({ type: "ACTIVE_PROGRAM", payload: data.data.data });
      setCurrentStep(3);
    },
    onError: (error: any) => {
      notification.error({
        message: "Failed to create program. Please try again.",
      });
    },
  });

  const handleProgramSubmit = async () => {
    if (!thumbnail || !banner) {
      notification.warning({
        message: "Cover and logo must be uploaded before submission.",
      });
      return;
    }

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
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Customize Program</h1>
        <span className="manrope-500 dark-700 fs-body">
          Customize your program's timing to fit your learner's needs.
        </span>
      </div>
      <div className="d-flex flex-column gap-2">
        <DragNDropInput
          label="Upload Logo"
          id="thumbnail-upload"
          detail="Program's Logo"
          onchange={(file) => handleThumbnailChange(file)}
        />
        <DragNDropInput
          label="Banner Image"
          id="banner-upload"
          detail="Program's Cover Image"
          onchange={(file) => handleBannerChange(file)}
        />
      </div>
      {uploadImageMutation.isPending && <p>Uploading image...</p>}
      <div className="d-flex flex-column align-items-center gap-3">
        <Button
          children="Complete Setup"
          action={handleProgramSubmit}
          type="button"
          fill={true}
        />
      </div>
    </form>
  );
};

export default CustomizeProgram;
