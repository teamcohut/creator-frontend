import React from "react";
import { IParticipant } from "../../../@types/participants.interface";
import "./index.css";
import Table from "../../../components/organisms/dashboard/Table";
import { FiPlus } from "react-icons/fi";
import Button from "../../../components/atoms/Button";
import Overview from "../../../components/organisms/dashboard/Overview";
import Header from "../../../components/organisms/dashboard/Header";
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

  const header = ["Full Name", "Email address", "Status", "Time enrolled", "" ]

  return (
    <>
      <Header title="Participants" subtitle="View and manage your learners here">
          <Button action={()=>{}} fill gap type="button" border={false}>
            <FiPlus className="fs-body" />
            Invite Learner
          </Button>
      </Header>
      <Overview />
      <Table header={header} body={participants} />
    </>
  );
};

export default ParticipantsPage;
