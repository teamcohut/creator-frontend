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
  const [filteredTasks, setFilteredTasks] = useState([]);


  const { isLoading, isError, data } = useQuery({
    queryKey: ["track", activeCohort],
    queryFn: () => api.task.getAllTask(activeCohort._id),
    enabled: !!activeCohort._id,
  });
  console.log(data?.data?.data?.[0])
  console.log(filteredTasks)


  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredTasks(
      data?.data?.data?.filter(
        (task: any) =>
          task.title?.toLowerCase().includes(lowerCaseQuery) ||
          task.dueDate?.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [data, searchQuery]);
  return (
    <div className=" w-100 d-flex flex-column gap-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <h4 className="manrope-600 fs-h4 primary-950 m-0">Tasks</h4>
          <span className="manrope-500 fs-footer primary-950 bg-secondary-450 px-2 py-1 rounded-4">
            {filteredTasks?.length || 0}
          </span>
        </div>

        <div>
          <SearchInput
            id="session"
            label=""
            placeHolder="Search"
            onchange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn rounded-pill bg-secondary-450 manrope-500 primary-950">
            All
          </button>
          <button className="btn rounded-pill border-secondary manrope-500 dark-400">
            Upcoming
          </button>
          <button className="btn rounded-pill border-secondary manrope-500 dark-400">
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
