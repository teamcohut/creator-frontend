import { FC, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import EmailInput from "../../../atoms/inputs/EmailInput";
import TextInput from "../../../atoms/inputs/TextInput";
import Button from "../../../atoms/Button";
import api from "../../../../api/axios";
import RTEInput from "../../../atoms/inputs/RTEInput";
import {
  IDetails,
  ISendMailDTO,
} from "../../../../@types/participants.interface";

const SendParticipantMail: FC<ISendMailDTO> = ({ email, setModalOpen }) => {
  const [details, setDetails] = useState<IDetails>({
    emails: email,
    subject: "",
    content: "",
  });

  const sendMailMutation = useMutation({
    mutationFn: async (payload: any) => {
      await api.participant.sendParticipantMail(details);
    },
    onSuccess: () => {
      notification.success({
        message: "Mail sent successfully",
      });
      setModalOpen(false, "");
    },
    onError: (error) => {
      notification.error({
        message: error.message,
      });
    },
  });

  const handleSubmit = () => {
    if (details.subject === "") {
      notification.info({
        message: "Email Subject is required",
        placement: "top",
      });
      return;
    }
    if (
      details.content === "" ||
      details.content ===
      (`
        <p>
          <br />
        </p>`
      )
    ) {
      notification.info({
        message: "Email body cannot be empty",
        placement: "top",
      });
      return;
    }
    sendMailMutation.mutate(details);
  };

  return (
    <>
      <div className="form bg-white d-flex flex-column rounded-5">
        <div className="d-flex flex-column gap-2">
          <h1 className="manrope-600 primary-950 fs-h2">Email Participant</h1>
        </div>

        <div className="d-flex flex-column gap-4">
          <EmailInput
            label="To"
            id="email"
            value={email.join(", ")}
            onchange={() => { }}
            placeholder="user@email.com"
          />

          <TextInput
            label="Email Subject"
            id="subject"
            onchange={(e) =>
              setDetails({ ...details, subject: e.target.value })
            }
            placeHolder="Enter Subject"
          />

          <RTEInput
            id="body"
            label="Body"
            placeholder="What would you like to email this participant about?"
            onChange={(e) => setDetails({ ...details, content: String(e) })}
          />
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            children="Send Email"
            type="button"
            fill={true}
            action={handleSubmit}
            loading={sendMailMutation.isPending}
          />
        </div>
      </div>
    </>
  );
};

export default SendParticipantMail;
