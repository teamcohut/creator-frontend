export { }

// import React from "react";
// import { FiMoreVertical } from "react-icons/fi";
// import FullName from "../../atoms/dashboard/FullName";
// import StatusBadge from "../../atoms/dashboard/StatusBadge";
// import { ITable } from "../../../@types/participants.interface";
// import "../style.css";

// const Table: React.FC<ITable> = ({ header, body }) => {
//   return (
//     <div className="p-table w-100">
//       <table className="table-div w-100">
//         <thead>
//           <tr className="manrope-600 fs-body primary-950">
//             {
//               header.map((el, i) => (
//                 <th key={i}>{el}</th>
//               ))
//             }
//           </tr>
//         </thead>
//         <tbody className="fs-body manrope-500 dark-700">
//           {body.map((participant, i) => (
//             <tr key={i}>
//               <td> <FullName fullName={participant.fullName} /> </td>
//               <td>{participant.email}</td>
//               <td>{participant.track}</td>
//               <td> <StatusBadge status={participant.status}></StatusBadge>  </td>
//               <td>{participant.enrollmentDate}</td>
//               <td> <FiMoreVertical />  </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;








// import React from "react";
// import { IParticipant } from "../../../@types/participants.interface";
// import "./index.css";
// import Table from "../../../components/organisms/dashboard/Table";
// import { FiPlus, FiUsers } from "react-icons/fi";
// import Button from "../../../components/atoms/Button";
// import Header from "../../../components/organisms/dashboard/Header";
// import OverviewCard from "../../../components/molecules/dashboard/OverviewCard";
// import PercentageBar from "../../../components/atoms/dashboard/PercentageBar";
// const ParticipantsPage: React.FC = () => {
//   const participants: IParticipant[] = [
//     {
//       id: "1",
//       fullName: "Temitope Aiyegbusi",
//       email: "aiyegbusto@pe@gmail.com",
//       track: 'software',
//       status: "active",
//       enrollmentDate: "Apr 12, 2023 | 09:32AM",
//       progress: 10,
//     },
//     {
//       id: "2",
//       fullName: "Ijeoma Odiaka",
//       email: "ijeomaodiaka@gmail.com",
//       track: 'software',
//       status: "active",
//       enrollmentDate: "Apr 12, 2023 | 09:32AM",
//       progress: 15,
//     },
//     {
//       id: "3",
//       fullName: "Sodiq Akinjobi",
//       email: "sodiqakinjobi@gmail.com",
//       track: 'software',
//       status: "inactive",
//       enrollmentDate: "Apr 12, 2023 | 09:32AM",
//       progress: 30,
//     },
//   ];

//   const header = ["Full Name", "Email address", "track", "Status", "Time enrolled", ""];

//   return (
//     <>
//       <Header
//         title="Participants"
//         subtitle="View and manage your learners here"
//       >
//         <Button action={() => { }} fill gap type="button" border={false}>
//           <FiPlus className="fs-body" />
//           Invite Learner
//         </Button>
//       </Header>
//       {/* <Overview /> */}
//       <div className="overview-container d-flex">
//         <OverviewCard
//           icon={<FiUsers className="fs-h1 primary-300" />}
//           title="Total Participants"
//           iconBgColor="#ECF1FF4D"
//           iconBorderColor="#ECF1FF"
//           subtitle={50}
//         />
//         <OverviewCard
//           icon={<FiUsers className="fs-h1 primary-300" />}
//           title="Enrolled Participants"
//           iconBgColor="#ECF1FF4D"
//           iconBorderColor="#ECF1FF"
//           subtitle={0}
//         >
//           <PercentageBar progress={0} />
//         </OverviewCard>
//         <OverviewCard
//           icon={<FiUsers className="fs-h1 success-300" />}
//           title="Active Participants"
//           iconBgColor="#E9FFF74D"
//           iconBorderColor="#E9FFF7"
//           subtitle={0}
//         />
//         <OverviewCard
//           icon={<FiUsers className="fs-h1 error-300" />}
//           title="Inactive Participants"
//           iconBgColor="#FFF1F14D"
//           iconBorderColor="#FFF1F14D"
//           subtitle={50}
//         />
//       </div>
//       <Table header={header} body={participants} />
//     </>
//   );
// };

// export default ParticipantsPage;



// import { useContext, useState, useRef } from "react";
// import { axiosPrivate } from "../../api/axios";
// import { ProgramContext } from "../../context/programs/ProgramContext";
// import { useProgramContext } from "./useProgramContext";

// export const useGetParticipants = () => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [participants, setParticipants] = useState([]);
//     const { dispatch } = useProgramContext();
//     const { activeProgram } = useContext(ProgramContext);
//     const hasFetched = useRef(false);

//     const getParticipants = async () => {
//         if (hasFetched.current) return;

//         setIsLoading(true);
//         try {
//             const response = await axiosPrivate.get(`
//                 /cohort/get-participants/${activeProgram._id}
//                 `);
//             const fetchedParticipants = response.data.data;
//             setParticipants(fetchedParticipants);

//             dispatch({
//                 type: "PARTICIPANTS",
//                 payload: fetchedParticipants[fetchedParticipants.length - 1],
//             });

//             hasFetched.current = true;
//             setIsLoading(false);
//         } catch (error: any) {
//             console.error(error);
//             // setError(
//             //     "Something went wrong while fetching sessions. Please try again later."
//             // );

//             setIsLoading(false);
//         }
//     };

//     return { getParticipants, participants, error, isLoading };
// };





// import React from "react";
// import "../../style.css";
// import InfoCard from "../../../molecules/dashboard/InfoCard";
// import { FiVideo } from "react-icons/fi";
// import { sessionDisplayList } from "./sessionDisplayList";
// import SearchInput from "../../../atoms/inputs/SearchInput";

// const SessionList = () => {
//     return (
//         <div className="courseDisplay w-100 d-flex flex-column align-items-stretch gap-3">
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-2">
//                     <h4 className="manrope-600 fs-h4 primary-950">Sessions </h4>
//                     <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
//                         4
//                     </span>
//                 </div>

//                 <div>
//                     <SearchInput
//                         id="session"
//                         label=""
//                         placeHolder="Search"
//                         onchange={(e) => console.log(e.target.value)}
//                     />
//                 </div>


//                 <div className="d-flex align-items-center gap-2">
//                     <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">
//                         All
//                     </button>
//                     <button className="btn rounded-pill border-secondary manrope-500 dark-400">
//                         Completed
//                     </button>
//                     <button className="btn rounded-pill border-secondary manrope-500 dark-400">
//                         Upcoming
//                     </button>
//                 </div>
//             </div>

//             {sessionDisplayList.map((el, i) => (
//                 <InfoCard
//                     title={el.title}
//                     subtitle={el.subtitle}
//                     isActive={el.isActive}
//                     dateOfSession={el.dateOfSession}
//                     isOngoing
//                     key={i}
//                     infoCardIcon={<FiVideo color="#FF63CD" />}
//                     infoCardIconBgColor="#FEF1FA"
//                 />
//             ))}
//         </div>
//     );
// };

// export default SessionList;



// import React, { useEffect } from "react";
// import "../../style.css";
// import InfoCard from "../../../molecules/dashboard/InfoCard";
// import { FiVideo } from "react-icons/fi";
// import SearchInput from "../../../atoms/inputs/SearchInput";
// import { useGetSession } from "../../../../hooks/program/useGetSession";

// const SessionList = () => {
//     const { getSessions, sessions, isLoading, error } = useGetSession();

//     useEffect(() => {
//         getSessions(); // Fetch sessions when the component mounts
//     }, [getSessions]);

//     return (
//         <div className="courseDisplay w-100 d-flex flex-column align-items-stretch gap-3">
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-2">
//                     <h4 className="manrope-600 fs-h4 primary-950">Sessions</h4>
//                     <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
//                         {sessions.length}
//                     </span>
//                 </div>

//                 <div>
//                     <SearchInput
//                         id="session"
//                         label=""
//                         placeHolder="Search"
//                         onchange={(e) => console.log(e.target.value)}
//                     />
//                 </div>

//                 <div className="d-flex align-items-center gap-2">
//                     <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">
//                         All
//                     </button>
//                     <button className="btn rounded-pill border-secondary manrope-500 dark-400">
//                         Completed
//                     </button>
//                     <button className="btn rounded-pill border-secondary manrope-500 dark-400">
//                         Upcoming
//                     </button>
//                 </div>
//             </div>

//             {isLoading && <p>Loading sessions...</p>}
//             {error && <p className="error-text">{error}</p>}
//             {sessions.map((session: any, i: any) => (
//                 <InfoCard
//                     key={i}
//                     title={session.title || "No title available"}
//                     subtitle={session.subtitle || "No subtitle available"}
//                     isActive={session.isActive}
//                     dateOfSession={session.dateOfSession || "Date not available"}
//                     isOngoing
//                     infoCardIcon={<FiVideo color="#FF63CD" />}
//                     infoCardIconBgColor="#FEF1FA"
//                 />
//             ))}
//         </div>
//     );
// };

// export default SessionList;


// import { useContext, useState } from "react";
// import { axiosPrivate } from "../../api/axios";
// import { ProgramContext } from "../../context/programs/ProgramContext";
// import { useProgramContext } from "./useProgramContext";

// export const useGetSession = () => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const { dispatch } = useProgramContext();
//     const { sessions } = useContext(ProgramContext);

//     const getSessions = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axiosPrivate.get(
//                 `/sessions`
//             );
//             console.log(sessions, response.data.data);

//             dispatch({
//                 type: "SESSIONS",
//                 payload: response.data.data[response.data.data.length - 1],
//             });
//             setIsLoading(false);
//         } catch (error: any) {
//             console.error(error);
//             setError(error.message);
//             setIsLoading(false);
//         }
//     };
//     return { getSessions, error, isLoading };
// };


// import { useContext, useState } from "react";
// import { axiosPrivate } from "../../api/axios";
// import { ProgramContext } from "../../context/programs/ProgramContext";
// import { useProgramContext } from "./useProgramContext";

// export const useGetSession = () => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);
//     const [sessions, setSessions] = useState([]);
//     const { dispatch } = useProgramContext();

//     const getSessions = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axiosPrivate.get(`sessions`);
//             const fetchedSessions = response.data.data;
//             setSessions(fetchedSessions);

//             dispatch({
//                 type: "SESSIONS",
//                 payload: fetchedSessions[fetchedSessions.length - 1],
//             });

//             setIsLoading(false);
//         } catch (error: any) {
//             console.error(error);
//             setError(error.message);
//             setIsLoading(false);
//         }
//     };

//     return { getSessions, sessions, error, isLoading };
// };


