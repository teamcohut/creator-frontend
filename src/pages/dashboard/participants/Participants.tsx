import React from "react";
import { IParticipant } from "../../../@types/participants.interface";
import "./index.css";
import Table from "../../../components/organisms/dashboard/Table";
import { FiPlus, FiUsers } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
import Header from "../../../components/organisms/dashboard/Header";
import OverviewCard from "../../../components/molecules/dashboard/OverviewCard";
import PercentageBar from "../../../components/atoms/dashboard/PercentageBar";
const ParticipantsPage: React.FC = () => {
  const participants: IParticipant[] = [
    {
      id: "1",
      fullName: "Temitope Aiyegbusi",
      email: "aiyegbusto@pe@gmail.com",
      status: "active",
      enrollmentDate: "Apr 12, 2023 | 09:32AM",
      progress: 10,
    },
    {
      id: "2",
      fullName: "Ijeoma Odiaka",
      email: "ijeomaodiaka@gmail.com",
      status: "active",
      enrollmentDate: "Apr 12, 2023 | 09:32AM",
      progress: 15,
    },
    {
      id: "3",
      fullName: "Sodiq Akinjobi",
      email: "sodiqakinjobi@gmail.com",
      status: "inactive",
      enrollmentDate: "Apr 12, 2023 | 09:32AM",
      progress: 30,
    },
  ];

  const header = ["Full Name", "Email address", "Status", "Time enrolled", ""];

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
      {/* <Overview /> */}
      <div className="overview-container d-flex">
        <OverviewCard
          icon={<FiUsers className="fs-h1 primary-300" />}
          title="Total Participants"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
          subtitle={50}
        />
        <OverviewCard
          icon={<FiUsers className="fs-h1 primary-300" />}
          title="Enrolled Participants"
          iconBgColor="#ECF1FF4D"
          iconBorderColor="#ECF1FF"
          subtitle={0}
        >
          <PercentageBar progress={0} />
        </OverviewCard>
        <OverviewCard
          icon={<FiUsers className="fs-h1 success-300" />}
          title="Active Participants"
          iconBgColor="#E9FFF74D"
          iconBorderColor="#E9FFF7"
          subtitle={0}
        />
        <OverviewCard
          icon={<FiUsers className="fs-h1 error-300" />}
          title="Inactive Participants"
          iconBgColor="#FFF1F14D"
          iconBorderColor="#FFF1F14D"
          subtitle={50}
        />
      </div>
      <Table header={header} body={participants} />
    </>
  );
};

export default ParticipantsPage;
