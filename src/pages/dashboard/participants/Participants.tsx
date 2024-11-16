import React from "react";
import { IParticipant } from "../../../@types/participants.interface";
import DashboardTemplate from "../../../components/templates/DashboardTemplate";
import "./index.css";
import ParticipantsTable from "../../../components/molecules/ParticipantsTable";
import Header from "../../../components/organisms/dashboard/Header";
import Overview from "../../../components/organisms/dashboard/Overview";
import { FiPlus } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
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

  return (
    <DashboardTemplate>
      <Header title="Participants" subtitle="View and manage your learners here">
          <Button action={()=>{}} fill gap type="button" border={false}>
            <FiPlus className="fs-body" />
            Invite Learner
          </Button>
      </Header>
      <Overview />
      <ParticipantsTable participants={participants} />
    </DashboardTemplate>
  );
};

export default ParticipantsPage;
