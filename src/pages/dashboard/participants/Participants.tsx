import React, { useEffect } from "react";
import { FiPlus, FiUsers } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
import Header from "../../../components/organisms/dashboard/Header";
import OverviewCard from "../../../components/molecules/dashboard/OverviewCard";
import PercentageBar from "../../../components/atoms/dashboard/PercentageBar";
import Table from "../../../components/organisms/dashboard/Table";
import { useGetParticipants } from "../../../hooks/program/useGetParticipant";
import "./index.css";
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";

const ParticipantsPage: React.FC = () => {
  const { getParticipants, participants, isLoading, error } =
    useGetParticipants();

  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ["participants"],
    queryFn: () => api.participant.getParticipants("67573b6904cacee5b183a31f"),
  });

  console.log(data);

  useEffect(() => {
    getParticipants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button action={() => {}} fill gap type="button" border={false}>
          <FiPlus className="fs-body" />
          Invite Learner
        </Button>
      </Header>

      <div className="overview-container d-flex">
        <OverviewCard
          icon={<FiUsers className="fs-h1 primary-300" />}
          title="Total Participants"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
          subtitle={participants.length}
        />
        <OverviewCard
          icon={<FiUsers className="fs-h1 primary-300" />}
          title="Enrolled Participants"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
          // subtitle={participants.filter((p) => p.status === "active").length}
        >
          <PercentageBar progress={50} />
        </OverviewCard>
        <OverviewCard
          icon={<FiUsers className="fs-h1 success-300" />}
          title="Active Participants"
          iconBgColor="#E9FFF74D"
          iconBorderColor="#E9FFF7"
          // subtitle={participants.filter((p) => p.status === "active").length}
        />
        <OverviewCard
          icon={<FiUsers className="fs-h1 error-300" />}
          title="Inactive Participants"
          iconBgColor="#FFF1F14D"
          iconBorderColor="#FFF1F14D"
          // subtitle={participants.filter((p) => p.status === "inactive").length}
        />
      </div>

      {isLoading && <p>Loading participants...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!isLoading && participants.length === 0 && !error && (
        <p>No participants available at the moment.</p>
      )}

      <Table header={header} body={participants} />
    </>
  );
};

export default ParticipantsPage;
