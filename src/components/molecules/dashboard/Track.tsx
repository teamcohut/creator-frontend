import React from "react";
import { FiX } from "react-icons/fi";

interface TrackProps {
    name: string;
    fileName: string;
    onRemove: () => void;
}

const Track: React.FC<TrackProps> = ({ name, fileName, onRemove }) => {
    return (
        <div className="d-flex flex-row w-100 px-4 py-2 justify-content-between gap-2 border rounded-5 align-content-center align-items-center">
            <span className="text-center">{name}</span>
            <div className="d-flex flex-row w-50 gap-4 justify-content-end align-items-center">
                <div className="border w-75 rounded-5 px-1 no-wrap overflow-x-hidden d-flex align-items-center justify-content-center">
                    <span className="no-wrap">{fileName}</span>
                </div>
                <button onClick={onRemove} className="border-none bg-transparent">
                    <FiX />
                </button>
            </div>

        </div>
    );
};

export default Track;
