import { FC, useContext, useState } from "react";
import Button from "../../../atoms/Button";
import ProgressBar from "../../../molecules/auth/PregressBar";
import TextInput from "../../../atoms/inputs/TextInput";
import "../../style.css";
import DragNDropInput from "../../../atoms/inputs/DragNDropInput";
import api from "../../../../api/axios";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { FiUploadCloud } from "react-icons/fi";

const UploadParticipants: FC<IUploadParticipants> = ({
  onSubmit,
  hasTrack,
}) => {
  const [track, setTrack] = useState("");
  const { activeCohort } = useContext(ProgramContext);

  console.log("activeCohort", activeCohort);

  const inviteParticipantsMutation = useMutation({
    mutationFn: (payload: File) =>
      api.participant.inviteGroupParticipant(activeCohort?._id, track, payload),
    onSuccess: () => {
      notification.success({ message: "Participants invited successfully!" });
    },
    onError: (error: any) => {
      notification.error({
        message: "Failed to invite participants. Please try again.",
      });
    },
  });

  const handleFileInput = async (file: File) => {
    if (file?.type !== "text/csv") {
      notification.warning({
        message: "File type not supported",
        description: "Please upload a CSV file.",
      });
      return;
    }

    if (!activeCohort?._id) {
      notification.warning({ message: "No active cohort detected." });
    }

    if (
      (activeCohort.hasTrack && !track) ||
      (activeCohort.hasTrack && track === "")
    ) {
      notification.warning({
        message: "You are required to specify a track to add participants",
      });
      return;
    }

    inviteParticipantsMutation.mutate(file);
  };

  return (
    <>
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
          <h1 className="manrope-600 primary-950 fs-h2">
            Upload Cohort Participants
          </h1>
          <span className="manrope-500 dark-700 fs-body">
            Upload a list of your learners based on their respective tracks
          </span>
        </div>

        <div className="d-flex flex-column gap-4">
          {activeCohort.hasTrack && (
            <div>
              <TextInput
                id="track"
                label="Learning Tracks"
                placeHolder="Enter Learning Track"
                onchange={(e) => setTrack(e.target.value)}
                value={track}
              />
            </div>
          )}

          <div>
            <DragNDropInput
              label="Upload Participants List"
              icon={<FiUploadCloud className="fs-small-icon dark-300" />}
              id="thumbnail-upload"
              detail="Cohort's list of Participants"
              onchange={(file: any) => handleFileInput(file)}
            />
            {inviteParticipantsMutation.isPending ? (
              <>Uploading file...</>
            ) : (
              <span className="fs-caption primary-400">
                A csv (Comma separated Values) File containing First names, Last
                names and Emails of Participants
              </span>
            )}
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Continue"
            action={onSubmit}
            type="button"
            fill={true}
            loading={inviteParticipantsMutation.isPending}
          />
        </div>
      </form>
    </>
  );
};

interface IUploadParticipants {
  onSubmit: () => void;
  hasTrack: boolean;
}

// interface ITracks {
//   name: string;
//   file: string;
// }

export default UploadParticipants;
