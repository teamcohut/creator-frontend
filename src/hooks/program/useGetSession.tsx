import { useContext, useState, useRef } from "react";
import { axiosPrivate } from "../../api/axios";
import { ProgramContext } from "../../context/programs/ProgramContext";
import { useProgramContext } from "./useProgramContext";

export const useGetSession = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [sessions, setSessions] = useState([]);
    const { dispatch } = useProgramContext();
    const hasFetched = useRef(false);

    const getSessions = async () => {
        if (hasFetched.current) return;

        setIsLoading(true);
        try {
            const response = await axiosPrivate.get(`/sessions`);
            const fetchedSessions = response.data.data;
            setSessions(fetchedSessions);

            dispatch({
                type: "SESSIONS",
                payload: fetchedSessions[fetchedSessions.length - 1],
            });

            hasFetched.current = true;
            setIsLoading(false);
        } catch (error: any) {
            // setError(
            //     "Something went wrong while fetching sessions. Please try again later."
            // );
            setIsLoading(false);
        }
    };

    return { getSessions, sessions, error, isLoading };
};
