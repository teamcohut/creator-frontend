import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgramContext } from '../../../../context/programs/ProgramContext';
import { useQuery } from '@tanstack/react-query';
import '../../style.css';
import api from '../../../../api/axios';
import SearchInput from '../../../atoms/inputs/SearchInput';
import TaskInfoCard from '../../../molecules/dashboard/TaskInfoCard';

const TaskDisplay = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);


  const { isLoading, isError, data } = useQuery({
    queryKey: ["track", activeCohort],
    queryFn: () => api.task.getAllTask(activeCohort._id),
    enabled: !!activeCohort._id,
  });
  console.log("all task", data?.data?.data)
  console.log(filteredTasks)


  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const now = new Date();

    let sessions = data?.data?.data || []

    if (filterType === "Upcoming") {
      sessions = sessions.filter((session: any) => new Date(session.date) > now);
    } else if (filterType === "Completed") sessions = sessions.filter((session: any) => new Date(session.date) < now);

    setFilteredTasks(
      sessions.filter(
        (task: any) =>
          task.title?.toLowerCase().includes(lowerCaseQuery) ||
          task.dueDate?.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [data, searchQuery, filterType]);
  return (
    <div className=" w-100 d-flex flex-column gap-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center gap-4'>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <h4 className="manrope-600 fs-h4 primary-950 m-0">Tasks</h4>
            <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
              {filteredTasks?.length || 0}
            </span>
          </div>

          <SearchInput
            id="session"
            label=""
            placeHolder="Search"
            onchange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "All" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"}`}
            onClick={() => setFilterType("All")}>
            All
          </button>
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "Upcoming" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"}`}
            onClick={() => setFilterType("Upcoming")}>
            Upcoming
          </button>
          <button
            className={`btn rounded-pill manrope-500 ${filterType === "Completed" ? "bg-secondary-450 primary-950" : "border-secondary dark-400"}`}
            onClick={() => setFilterType("Completed")}>
            Completed
          </button>
        </div>
      </div>

      {isLoading && <p>Loading tasks...</p>}
      {isError && <p className="error-text">{isError}</p>}
      {!isLoading && filteredTasks?.length === 0 && (
        <p>You do not have any tasks</p>
      )}
      <div className="task-grid">
        {filteredTasks?.map((tasks: any, i: any) => (

          <TaskInfoCard
            title={tasks.title || "No title available"}
            dueTime={tasks.dueTime || "No Link available yet"}
            dueDate={tasks.dueDate.split("T")[0]}
          />

        ))}
      </div>
    </div>
  )
}

export default TaskDisplay
