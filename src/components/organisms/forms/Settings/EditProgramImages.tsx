import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { notification } from "antd";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { ISetupModal } from "../../../../@types/dashboard.interface";

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
  programData?: ProgramData;
  setCurrentStep?: (step: number) => void;
}

const EditProgramImages: FC<ISetupModal> = ({
  modalOpen,
  setModalOpen,
  setCurrentStep,
}) => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [banner, setBanner] = useState<string>("");
  const { dispatch, activeProgram } = useContext(ProgramContext);

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


  const updateProgramMutation = useMutation({
    mutationFn: (payload: any) => api.program.updateProgram(activeProgram?.id, payload),
    onSuccess: (data: any) => {
      dispatch({ type: "ACTIVE_PROGRAM", payload: data.data.data });
      setCurrentStep?.(3);
      setModalOpen(false, "");
    },
    onError: (error: any) => {
      notification.error({
        message: "Failed to update. Please try again.",
      });
    },
  });

  const handleProgramSubmit = async () => {

    const payload = {
      cover: banner,
      logo: thumbnail,
    };

    updateProgramMutation.mutate(payload);
    
  };

  return (
    <form className="form bg-white d-flex flex-column rounded-5 mx-auto">
      
      <div className="d-flex flex-column gap-2">
        <h1 className="manrope-600 primary-950 fs-h2">Edit Program Images</h1>
        <span className="manrope-500 dark-700 fs-body">
          Update the images associated with your learning program
        </span>
      </div>
      <div className="d-flex flex-column gap-4">
        <DragNDropInput
          label="Program Logo"
          id="thumbnail-upload"
          detail="Program's Logo"
          onchange={(file) => handleThumbnailChange(file)}
        />
        <div>
          <DragNDropInput
            label="Banner Image"
            id="banner-upload"
            detail="Program's Cover Image"
            onchange={(file) => handleBannerChange(file)}
          />
          <span className="fs-caption primary-400">
            Banner image will be displayed across your Program (png, jpg, jpeg)
          </span>
        </div>

      </div>
      {uploadImageMutation.isPending && <p>Uploading image...</p>}
      <div className="d-flex flex-column align-items-center gap-3">
        <Button
          children="Save Changes"
          action={handleProgramSubmit}
          type="button"
          fill={true}
          loading={updateProgramMutation.isPending}
          disabled={uploadImageMutation.isPending || updateProgramMutation.isPending}
        />
      </div>
    </form>
  );
};

export default EditProgramImages;
