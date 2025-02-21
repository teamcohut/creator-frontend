import { useContext, useEffect, useState } from 'react';
import { ProgramContext } from '../../../../context/programs/ProgramContext';
import { useQuery } from '@tanstack/react-query';
import '../../style.css';
import api from '../../../../api/axios';
import SearchInput from '../../../atoms/inputs/SearchInput';
import TaskInfoCard from '../../../molecules/dashboard/TaskInfoCard';
import { TModal } from '../../../../@types/dashboard.interface';
import EditTask from '../../forms/Task/EditTask';
import Modal from '../../../templates/Modal';

const TaskDisplay = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [oneTask, setOneTask] = useState();
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });

  const setModalOpen = (name: TModal, open: boolean) => {
    setModal({name, open})
  }

  const openModal = (task: any) => {
    setOneTask(task)
    setModal({name: "task", open: true})
  }


  const { isLoading, isError, data } = useQuery({
    queryKey: ["track", activeCohort],
    queryFn: () => api.task.getAllTask(activeCohort._id),
    enabled: !!activeCohort._id,
  });


  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const now = new Date();

    let tasks = data?.data?.data || []

    if (filterType === "Upcoming") {
      tasks = tasks.filter((session: any) => new Date(session.date) > now);
    } else if (filterType === "Completed") tasks = tasks.filter((session: any) => new Date(session.date) < now);

    setFilteredTasks(
      tasks.filter(
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
            id="task"
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
        {filteredTasks?.map((task: any, i: any) => (

          <TaskInfoCard
            key={i}
            setModal={() => openModal(task)}
            title={task.title || "No title available"}
            dueTime={task.dueTime || "No Link available yet"}
            dueDate={task.dueDate.split("T")[0]}
          />

        ))}
      </div>
      
      {modal.name === "task" && (
        <Modal open={modal.open} setModalOpen={(open: boolean) => setModalOpen}>
          <EditTask task={oneTask} closeModal={()=> setModal({name: null, open: false})} />
        </Modal>
      )}
    </div>
  )
}

export default TaskDisplay
