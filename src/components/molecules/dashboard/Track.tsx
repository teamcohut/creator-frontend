import React from "react";
import { FiX } from "react-icons/fi";

interface TrackProps {
    name: string;
    fileName: string;
    onRemove: () => void;
}

const Track: React.FC<TrackProps> = ({ name, fileName, onRemove }) => {
    return (
        <div className="d-flex flex-row w-100 px-2 py-2 justify-content-between gap-2 border rounded-5 align-content-center align-items-center">
            <p className="text-center">{name}</p>
            <div className="border rounded-5 px-2 d-flex align-items-center justify-content-center">
                <p>{fileName}</p>
            </div>
            <FiX onClick={onRemove} style={{ cursor: "pointer" }} />
        </div>
    );
};

export default Track;
