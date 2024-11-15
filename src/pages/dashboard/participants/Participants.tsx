import React from "react";
import { IParticipant } from "../../../@types/participants.interface";
import DashboardTemplate from "../../../components/templates/DashboardTemplate";
import "./index.css";
import ParticipantsTable from "../../../components/molecules/ParticipantsTable";
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
      <div>
        <div className="p-container">
          <div className="p-top"></div>
          <div className="p-middle"></div>
          <div className="p-bottom">
            <ParticipantsTable participants={participants} />
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default ParticipantsPage;
