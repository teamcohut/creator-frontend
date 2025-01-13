import { FiCheckSquare } from "react-icons/fi";
import { ITasks } from "../../../@types/task.interface";
import { FC } from "react";

const TaskInfoCard: FC<ITasks> = ({ title, dueTime, dueDate }) => {
  return (
    <div
      className="task-info-card rounded-4 d-flex align-items-center"
      style={{
        border: "1px solid #ECF1FF",
        width: "290px",
        height: "100px",
        padding: "8px",
        margin: "0", // Ensure no extra spacing
        boxSizing: "border-box",
      }}
    >
      <div
        className="d-flex gap-2 w-100"
        style={{ alignItems: "center", overflow: "hidden" }}
      >
        {/* Icon Container */}
        <div
          className="d-flex rounded-2 align-items-center justify-content-center"
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: "#ECF1FF",
            flexShrink: 0,
          }}
        >
          <FiCheckSquare size={24} color="#9DB0FF" />
        </div>

        {/* Text Content */}
        <div
          className="d-flex flex-column p-0 m-0 justify-content-start gap-1"
          style={{
            width: "calc(100% - 64px)",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          <p
            className="fs-body manrope-700 primary-950 p-0 m-0"
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {title}
          </p>
          <p
            className="fs-caption dark-500 manrope-400"
            style={{ margin: 0, overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Due at: <span>{dueTime}, </span>
            <span>{dueDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskInfoCard;
