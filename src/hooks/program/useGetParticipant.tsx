import { useContext, useState, useRef } from "react";
import { axiosPrivate } from "../../api/axios";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useProgramContext } from "./useProgramContext";

export const useGetParticipants = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [participants, setParticipants] = useState([]);
    const { dispatch } = useProgramContext();
    const { activeProgram } = useContext(ProgramContext);
    const hasFetched = useRef(false);

    const getParticipants = async () => {
        if (hasFetched.current) return;

        setIsLoading(true);
        try {
            const response = await axiosPrivate.get(
                `/cohort/get-participants/${activeProgram._id}`
            );
            const fetchedParticipants = response.data.data;
            setParticipants(fetchedParticipants);

            dispatch({
                type: "PARTICIPANTS",
                payload: fetchedParticipants[fetchedParticipants.length - 1],
            });

            hasFetched.current = true;
            setIsLoading(false);
        } catch (err: any) {
            console.error(err);
            // setError("Unable to fetch participants. Please try again.");
            setIsLoading(false);
        }
    };

    return { getParticipants, participants, error, isLoading };
};

