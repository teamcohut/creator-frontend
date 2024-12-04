import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import FullName from "../../atoms/dashboard/FullName";
import StatusBadge from "../../atoms/dashboard/StatusBadge";
import { IAssessmentCard, IParticipant } from "../../../@types/participants.interface";
import "../style.css";

// const AssessmentCard: React.FC<IAssessmentCard> = ({ header, body }) => {
const AssessmentCard = () => {

    const assessments: IAssessmentCard[] = [
        {
            id: "1",
            title: "Temitope Aiyegbusi",
            course: "aiyegbusto@pe@gmail.com",
            date: "aiyegbusto@pe@gmail.com",
            status: "active",
            average: "90"
        },
        {
            id: "1",
            title: "Temitope Aiyegbusi",
            course: "aiyegbusto@pe@gmail.com",
            date: "aiyegbusto@pe@gmail.com",
            status: "active",
            average: "90"
        },
        {
            id: "1",
            title: "Temitope Aiyegbusi",
            course: "aiyegbusto@pe@gmail.com",
            date: "aiyegbusto@pe@gmail.com",
            status: "active",
            average: "90"
        }
    ];

    const header = ["Title", "Date", "Status", "Average", ""]


    return (
        <div className="p-table w-100">
            <table className="table-div w-100">
                <thead>
                    <tr className="manrope-600 fs-body primary-950">
                        {
                            header.map((el, i) => (
                                <th key={i}>{el}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="fs-body manrope-500 dark-700">
                    {assessments.map((assessment, i) => (
                        <tr key={i}>
                            <td>
                                <FullName fullName={assessment.title} />
                                <p>{assessment.course} </p>
                            </td>
                            <td>{assessment.date}</td>
                            <td>
                                <StatusBadge status={assessment.status}></StatusBadge>
                            </td>
                            <td>{assessment.average}</td>
                            <td>
                                <FiMoreVertical />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssessmentCard;
