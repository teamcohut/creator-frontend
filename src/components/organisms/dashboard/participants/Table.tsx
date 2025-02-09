import React, { useContext, useEffect, useState } from "react";
import { FiAlertCircle, FiMoreVertical } from "react-icons/fi";
import StatusBadge from "../../../atoms/dashboard/StatusBadge";
import { ITable } from "../../../../@types/participants.interface";
import "../../style.css";
import SearchInput from "../../../atoms/inputs/SearchInput";
import Modal from "../../../templates/Modal";
import SettingsStatusCard from "../../forms/Settings/SettingsStatusCard";
import Button from "../../../atoms/Button";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../api/axios";
import { notification } from "antd";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import SendParticipantMail from "../../forms/Participants/SendParticipantMail";
import { FormatDate } from "../../../utils/FormatDateTime";


interface IParticipant {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  trackTitle: string;
  isActive: boolean;
  createdAt: string;
  title?: string; // Assuming these are optional for search
  subtitle?: string;
}

const Table: React.FC<ITable> = ({ header, body, count, refresh }) => {
  const [modal, setModal] = useState<IModal>({ open: false, modal: "" });
  const [email, setEmail] = useState("");
  const [participantId, setParticipantId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredParticipants, setFilteredParticipants] = useState<IParticipant[]>([]);
  const { activeProgram, activeCohort } = useContext(ProgramContext);

  // const [trackId, setTrackId] = useState<Array<string>>([]);
  // console.log('cohort: ', activeCohort);
  // useEffect(() => {
  //   let participant = filteredParticipants.find(el => el._id === participantId)
  //   let track = activeCohort.tracks.find((el: any) => el.title === participant?.trackTitle)

  //   console.log(track);

  //   setTrackId([track?._id])
  // }, [participantId])



  const handleDropdownAction = (action: TModal, email: string) => {
    // Action for a specific participant
    setEmail(email);
    setModal({ open: true, modal: action });
  };

  const openModal = (open: boolean, modal: TModal) => {
    setModal({ open, modal });
  };

  const removeMutation = useMutation({
    mutationFn: () => {
      return api.participant.removeParticipant(activeProgram._id, participantId);
    },
    onSuccess: (data: any) => {
      notification.open({
        message: "Participant removed",
      });
      setModal({ open: false, modal: "" });
      refresh && refresh();
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const removeParticipant = async () => {
    await removeMutation.mutate();
  };

  const graduateMutation = useMutation({
    mutationFn: () => {
      return api.participant.graduateParticipant(activeCohort._id, [participantId]);
    },
    onSuccess: (data: any) => {
      notification.open({
        message: "Successfully graduated",
      });
      setModal({ open: false, modal: "" });
      refresh && refresh();
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ?? error.response.data.message,
      });
    },
  });

  const graduateParticipant = async () => {
    await graduateMutation.mutate();
  };

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    body && setFilteredParticipants(
      body.filter(
        (participant: IParticipant) =>
          participant.title?.toLowerCase().includes(lowerCaseQuery) ||
          participant.subtitle?.toLowerCase().includes(lowerCaseQuery) ||
          participant.firstName.toLowerCase().includes(lowerCaseQuery) ||
          participant.lastName.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [body, searchQuery]);


  return (
    <>
      <div className="p-table w-100 h-100 pb-5">
        <div className="d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center gap-2">
            <h4 className="d-flex align-items-center gap-2 manrope-600 fs-h4 primary-950 align-content-center">
              Participants
              <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
                {count}
              </span>
            </h4>
          </div>

          <div>
            <SearchInput
              id="session"
              label=""
              placeHolder="Search"
              onchange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <table className="table-div w-100">
          <thead>
            <tr className="manrope-600 fs-body primary-950">
              {/* <th className="manrope-600 primary-950 fs-body">
                <input type="checkbox" name="" id="" />
              </th> */}
              {header.map((el, i) => (
                <th key={i}>{el}</th>
              ))}
            </tr>
          </thead>

          <tbody className="fs-body manrope-500 dark-700">
            {filteredParticipants?.map((participant, idx) => (
              <tr key={idx}>
                {/* <td>
                  <input type="checkbox" name="" id="" />
                </td> */}
                <td>
                  {participant.firstName} {participant.lastName}
                </td>
                <td>{participant.email}</td>
                <td>{participant.trackTitle}</td>
                <td>
                  <StatusBadge
                    status={participant.isActive ? "active" : "inactive"}
                  ></StatusBadge>
                </td>
                <td>{FormatDate(participant.createdAt)}</td>
                <td>
                  <div className="dropdown">
                    <FiMoreVertical
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    />
                    <ul className="dropdown-menu">
                      <button
                        onClick={() => {
                          setParticipantId(participant._id);
                          handleDropdownAction("mail", participant.email);
                        }}
                        className="dropdown-item cursor-pointer"
                      >
                        Send Mail
                      </button>
                      <button
                        onClick={() => {
                          setParticipantId(participant._id);
                          handleDropdownAction("graduate", participant.email);
                        }}
                        className="dropdown-item cursor-pointer"
                      >
                        Graduate
                      </button>
                      <button
                        onClick={() => {
                          setParticipantId(participant._id);
                          handleDropdownAction("remove", participant.email);
                        }}
                        className="dropdown-item cursor-pointer"
                      >
                        Remove
                      </button>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal.open && (
        <Modal open={modal.open} setModalOpen={openModal}>
          {modal.modal === "remove" ? (
            <SettingsStatusCard
              title="Confirm Removal"
              description={`Are you sure you want to remove ${email}? You will not be able to undo this action.`}
              icon={<FiAlertCircle className="warning-500 fs-icon" />}
            >
              <div className="d-flex gap-4">
                <Button
                  action={removeParticipant}
                  loading={removeMutation.isPending}
                  children="Remove Participant"
                  fill={false}
                  type="button"
                  border
                  outline="primary"
                />
                <Button
                  action={() => setModal({ open: false, modal: "" })}
                  children="Cancel"
                  fill
                  type="button"
                />
              </div>
            </SettingsStatusCard>
          ) : modal.modal === "graduate" ? (
            <SettingsStatusCard
              title="Confirm"
              description={`Are you sure you want to graduate ${email}? You will not be able to undo this action.`}
              icon={<FiAlertCircle className="warning-500 fs-icon" />}
            >
              <div className="d-flex gap-4">
                <Button
                  action={graduateParticipant}
                  loading={graduateMutation.isPending}
                  children="Graduate Participant"
                  fill={false}
                  type="button"
                  border
                  outline="primary"
                />
                <Button
                  action={() => setModal({ open: false, modal: "" })}
                  children="Cancel"
                  fill
                  type="button"
                />
              </div>
            </SettingsStatusCard>
          ) : modal.modal === "mail" ? (
            <SendParticipantMail
              email={email.split(",")}
              setModalOpen={openModal}
            />
          ) : (
            <></>
          )}
        </Modal>
      )}
    </>
  );
};

interface IModal {
  open: boolean;
  modal: TModal;
}
type TModal = "remove" | "mail" | "graduate" | "";

export default Table;
