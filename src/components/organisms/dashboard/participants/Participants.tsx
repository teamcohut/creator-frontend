import React, { useContext, useEffect, useState } from "react";
import { FiPlus, FiUsers } from "react-icons/fi";
import Button from "../../../atoms/Button";
import Header from "../Header";
import OverviewCard from "../../../molecules/dashboard/OverviewCard";
import Table from "./Table";
import { useQuery } from "@tanstack/react-query";
import api from "../../../../api/axios";
import ParticipantModal from "../modals/ParticipantModal";
import { ProgramContext } from "../../../../context/programs/ProgramContext";
import { TModal } from "../../../../@types/dashboard.interface";
import "../../style.css"

const ParticipantsPage: React.FC = () => {
  const { activeCohort } = useContext(ProgramContext);
  const [participants, setParticipants] = useState<any>()
  const [page, setPage] = useState<number>(1)
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(5)
  const [modal, setModal] = useState({ name: null, open: false } as {
    name: TModal;
    open: boolean;
  });

  const setModalOpenState = (open: boolean, name: TModal) => {
    setModal({ name, open });
  };

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["participants", activeCohort],
    queryFn: () => api.participant.getParticipants(activeCohort._id, page),
    enabled: !!activeCohort._id,
  });

  // const getParticipantsMutation = useMutation({
  //   mutationFn: (page: number) => api.participant.getParticipants(activeCohort._id, page),
  //   onSuccess: (data: any) => {
  //     setParticipants(data.data.data.participants)
  //   }
  // })

  useEffect(() => {
    data && setParticipants(data.data.data.participants)
  }, [data])


  useEffect(() => {
    refetch()
  }, [activeCohort, refetch, page])



  const header = [
    "Full Name",
    "Email address",
    "Track",
    "Status",
    "Time enrolled",
    "",
  ];

  return (
    <>
      <Header
        title="Participants"
        subtitle="View and manage your learners here"
      >
        <Button
          action={() =>
            setModal((prev) => ({ open: true, name: "participant" }))
          }
          fill
          gap
          type="button"
          border={false}
        >
          <FiPlus className="fs-body" />
          Invite Participant
        </Button>
      </Header>

      {!activeCohort._id ? (
        <p>There is no active cohort yet.</p>
      ) : isLoading ? (
        <p>Loading participants...</p>
      ) : isError ? (
        <p className="text-danger">Err... <br /> Something went wrong</p>
      ) : (
        <>
          <div className="h-100">
            <div className="overview-container d-flex">
              <OverviewCard
                icon={<FiUsers className="fs-h1 primary-300" />}
                title="Total Participants"
                iconBgColor="#ECF1FF4D"
                iconBorderColor="#ECF1FF"
                subtitle={data?.data.data.noOfParticipants}
              />
              <OverviewCard
                icon={<FiUsers className="fs-h1 primary-300" />}
                title="Enrolled Participants"
                iconBgColor="#ECF1FF4D"
                iconBorderColor="#ECF1FF"
                subtitle={(data?.data.data.noOfParticipants)}
              >

              </OverviewCard>

              <OverviewCard
                icon={<FiUsers className="fs-h1 success-300" />}
                title="Active Participants"
                iconBgColor="#E9FFF74D"
                iconBorderColor="#E9FFF7"
                subtitle={data?.data.data.noOfActiveParticipants}
              />
              <OverviewCard
                icon={<FiUsers className="fs-h1 error-300" />}
                title="Inactive Participants"
                iconBgColor="#FFF1F14D"
                iconBorderColor="#FFF1F14D"
                subtitle={data?.data.data.noInactiveParticipants}
              />
            </div>
            <div className="pb-5">
              <Table header={header} body={participants} count={data?.data.data.noOfParticipants} refresh={refetch} />
              <div className="d-flex justify-content-between align-items-center px-5">
                <span>Page {page} of {data?.data.data.totalPages}</span>
                <div className="d-flex align-items-center gap-2">
                  {
                    Array.from({ length: data?.data.data.totalPages })
                      .slice(start, end) // Extract the subset of the array
                      .map((el: any, i: number) => {
                        const pageNumber = start + i + 1; // Calculate the actual page number
                        return (
                          <button
                            key={pageNumber} // Add a unique key for React
                            onClick={() => {
                              // Adjust start and end when a page other than 1 or 2 is clicked
                              if (pageNumber > 2) {
                                setStart(pageNumber - 2); // Move the clicked page to the second position
                                setEnd(pageNumber + 3); // Show the next 3 pages
                              } else {
                                setStart(0); // Reset to the beginning for pages 1 and 2
                                setEnd(5); // Show the first 5 pages
                              }
                              setPage(pageNumber); // Update the current page
                            }}
                            className={`${pageNumber === page
                                ? "dark-950 active-page-btn"
                                : "dark-700 bg-white inactive-page-btn"
                              } rounded-2 manrope-500 fs-small page-btn`}
                          >
                            {pageNumber}
                          </button>
                        );
                      })
                  }

                  {
                    data?.data.data.totalPages > 5 && (
                      <>
                        <button
                          disabled
                          className="dark-700 bg-white inactive-page-btn rounded-2 manrope-500 fs-small page-btn">
                          ...
                        </button>
                        <button
                          onClick={() => setPage(data?.data.data.totalPages)}
                          className={`${data?.data.data.totalPages === page ? "dark-950 active-page-btn" : "dark-700 bg-white inactive-page-btn"} rounded-2 manrope-500 fs-small page-btn`}>
                          {data?.data.data.totalPages}
                        </button>
                      </>
                    )
                  }


                </div>
                <div></div>
              </div>
            </div>
          </div>
        </>
      )}

      {modal.name === "participant" && (
        <ParticipantModal
          modalOpen={modal.open}
          setModalOpen={setModalOpenState}
        />
      )}
    </>
  );
};

export default ParticipantsPage;
