import React, { useContext, useEffect, useState } from "react";
import { FiPlus, FiUsers } from "react-icons/fi";
import Button from "../../../atoms/Button";
import Header from "../Header";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import PercentageBar from "../../../atoms/dashboard/PercentageBar";
import Table from "./Table";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api/axios";
import ParticipantModal from "../modals/ParticipantModal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";

const ParticipantsPage: React.FC = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [modal, setModal] = useState({ name: "", open: false } as {
    name: string;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: string) => {
    setModal({ name, open });
  };

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["participants"],
    queryFn: () => api.participant.getParticipants(activeCohort._id),
    enabled: !!activeCohort._id,
  });

  useEffect(() => {
    refetch()
  }, [activeCohort, refetch])
  
  

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
          Invite Learner
        </Button>
      </Header>

      {!activeCohort._id ? (
        <p>There is no active cohort yet.</p>
      ) : isLoading ? (
        <p>Loading participants...</p>
      ) : isError ? (
        <p className="text-danger">Error T austin sparks</p>
      ) : (
        <>
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
              // subtitle={participants.filter((p) => p.status === "active").length}
            >
              <PercentageBar
                progress={
                  (data?.data.data.noOfActiveParticipants /
                    data?.data.data.noOfParticipants) *
                  100
                }
              />
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

          <Table header={header} body={data?.data.data.participants} refresh={refetch} />
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
