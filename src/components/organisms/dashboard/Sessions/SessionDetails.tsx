import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiCopy,
  FiEdit3,
  FiMapPin,
  FiTrash2,
  FiVideo,
} from "react-icons/fi";
import Button from "../../../atoms/Button";
import { notification } from "antd";
import api from "../../../../api/axios";
import { TModal } from "../../../../@types/dashboard.interface";
import EditSessionModal from "../modals/EditSessionModal";
import { formatDate } from "../../../utils/formatDate";
import { Copy } from "../../../../helpers/Copy";
import '../../style.css'

const SessionDetails = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });


  useEffect(() => {
    if (!modal.open) {
      localStorage.removeItem("sessionId")
    }
  }, [modal])
  

  const setModalOpen = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => api.session.findSession(sessionId!),
    enabled: !!sessionId,
  });

  const deleteSessionMutation = useMutation({
    mutationFn: () => api.session.deleteSession(sessionId!),
    onSuccess: () => {
      notification.success({ message: "Session deleted successfully!" });
      localStorage.removeItem("sessionId");
      navigate(-1);
    },
    onError: () => {
      notification.error({
        message: "Failed to delete session. Please try again.",
      });
    },
  });

  if (isLoading) return <p>Loading session details...</p>;
  if (isError) return <p>Error loading session details.</p>;
  // if (isSuccess) {
  //   localStorage.setItem("sessionId", data._id);
  // }

  const session = data?.data.data;
  const sessionLink = session?.sessionLink;
  // const zoomsession = session?.zoomStartSession;

  return (
    <>
      <div className="pt-5 d-flex flex-column gap-5">
        <p
          className="manrope-500 fs-body dark-700 d-flex align-items-center gap-1"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          <FiArrowLeft />
          Back to Learning
        </p>
        <div className="d-flex flex-column gap-5">
          <div className="border rounded-4 p-5 d-flex flex-column gap-5 w-75">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between">
                <h2 className="fs-h3 manrope-600 primary-950">
                  {session?.title}
                </h2>
                <div className="w-fit">
                  <Button
                    action={() =>{ 
                      setModalOpen(true, "session")
                      localStorage.setItem("sessionId", session._id)
                    }}
                    fill={false}
                    type="button"
                  >
                    <FiEdit3 className="fs-h3 primary-400" />
                  </Button>
                </div>
              </div>
              <p className="manrope-500 fs-body dark-700">
                {session?.description}
              </p>
            </div>
            <div className="d-flex flex-column gap-4">
              <p className="d-flex align-items-center gap-2 manrope-500 fs-body dark-700">
                <FiClock /> {session?.start} - {session?.end}
              </p>
              <p className="d-flex align-items-center gap-2 manrope-500 fs-body dark-700">
                <FiCalendar /> {formatDate(session?.date)}
              </p>
              {/* <p className="d-flex align-items-center gap-2 manrope-500 fs-body dark-700">
                <FiVideo />
                <Link
                  to={`${zoomsession}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://us04web.zoom.us
                </Link>
              </p> */}
              {/* {session?.location.name === "Physical" ? (
                <p className="d-flex align-items-center gap-2 manrope-500 fs-body dark-700">
                  <FiMapPin /> {session.location.address}
                </p>
              ) : ( */}
              <p className="d-flex align-items-center gap-2 manrope-500 fs-body dark-700 sessionLink">
                <FiMapPin />
                <Link
                  to={`${sessionLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nowrap"
                >
                  {sessionLink.substring(0, 32)}...
                </Link>
                <button className="border-none bg-transparent primary-500 copy"
                  onClick={() => {
                    Copy(sessionLink)
                  }
                  }>
                  <FiCopy />
                </button>
              </p>
              {/* )} */}
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="w-75">
                <Button
                  action={() => window.open(sessionLink, "_blank")}
                  fill={true}
                  type="button"
                  border
                  outline="primary"
                  gap
                >
                  <FiVideo /> Join Session
                </Button>
              </div>
              <div className="w-fit">
                <Button
                  action={deleteSessionMutation.mutate}
                  loading={deleteSessionMutation.isPending}
                  fill={false}
                  type="button"
                  customStyle={{ color: "var(--error-300" }}
                >
                  <FiTrash2 className="fs-h3" />
                </Button>
              </div>
            </div>
          </div>
          {/* <div>
                    <h2>Additional Resources</h2>
                    <span></span>
                </div> */}
        </div>
      </div>

      {modal.name === "session" && (
        <EditSessionModal modalOpen={modal.open} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default SessionDetails;
