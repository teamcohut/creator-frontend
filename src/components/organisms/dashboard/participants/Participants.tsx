import React, { useContext, useEffect, useState } from "react";
import { FiPlus, FiUsers } from "react-icons/fi";
import Button from "../../../atoms/Button";
import Header from "../Header";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import Table from "./Table";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api/axios";
import ParticipantModal from "../modals/ParticipantModal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { TModal } from "../../../../@types/dashboard.interface";
import "../../style.css"
import Pagination from "./Pagination";

const ParticipantsPage: React.FC = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [participants, setParticipants] = useState<any>()
  const [page, setPage] = useState<number>(1)
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(5)
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["participants", activeCohort],
    queryFn: () => api.participant.getParticipants(activeCohort._id, page),
    enabled: !!activeCohort._id,
  });

  console.log("number of participant", data);

  // const getParticipantsMutation = useMutation({
  //   mutationFn: (page: number) => api.participant.getParticipants(activeCohort._id, page),
  //   onSuccess: (data: any) => {
  //     setParticipants(data.data.data.participants)
  //   }
  // })

  useEffect(() => {
    data && setParticipants(data.data.data.participants)
  }, [data])


  useEffect(() => {
    refetch()
  }, [activeCohort, refetch, page])



  const header = [
    "Full Name",
    "Email address",
    "Track",
    "Status",
    "Time enrolled",
    "",
  ];

  return (
    <>
      <Header
        title="Participants"
        subtitle="View and manage your learners here"
      >
        <Button
          action={() =>
            setModal((prev) => ({ open: true, name: "participant" }))
          }
          fill
          gap
          type="button"
          border={false}
        >
          <FiPlus className="fs-body" />
          Invite Participant
        </Button>
      </Header>

      {!activeCohort._id ? (
        <p>There is no active cohort yet.</p>
      ) : isLoading ? (
        <p>Loading participants...</p>
      ) : isError ? (
        <p className="text-danger">Err... <br /> Something went wrong</p>
      ) : (
        <>
          <div className="h-100">
            <div className="overview-container d-flex">
              <OverviewCard
                icon={<FiUsers className="fs-h1 primary-300" />}
                title="Total Participants"
                iconBgColor="#ECF1FF4D"
                iconBorderColor="#ECF1FF"
                subtitle={data?.data.data.noOfParticipants}
              />
              <OverviewCard
                icon={<FiUsers className="fs-h1 primary-300" />}
                title="Enrolled Participants"
                iconBgColor="#ECF1FF4D"
                iconBorderColor="#ECF1FF"
                subtitle={(data?.data.data.noOfParticipants)}
              >

              </OverviewCard>

              <OverviewCard
                icon={<FiUsers className="fs-h1 success-300" />}
                title="Active Participants"
                iconBgColor="#E9FFF74D"
                iconBorderColor="#E9FFF7"
                subtitle={data?.data.data.noOfActiveParticipants}
              />
              <OverviewCard
                icon={<FiUsers className="fs-h1 error-300" />}
                title="Inactive Participants"
                iconBgColor="#FFF1F14D"
                iconBorderColor="#FFF1F14D"
                subtitle={data?.data.data.noInactiveParticipants}
              />
            </div>
            <div className="pb-5">
              <Table header={header} body={participants} count={data?.data.data.noOfParticipants} refresh={refetch} />
              <Pagination data={data?.data.data} end={end} setEnd={setEnd} start={start} setStart={setStart} page={page} setPage={setPage} />
            </div>
          </div>
        </>
      )}

      {modal.name === "participant" && (
        <ParticipantModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default ParticipantsPage;
