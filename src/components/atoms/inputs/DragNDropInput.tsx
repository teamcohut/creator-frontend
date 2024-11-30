import React, { useState } from 'react';
import { ITextAreaInput, IDragnDrop } from './types';
import '../style.css';
import { FiImage } from 'react-icons/fi';

const DragNDropInput: React.FC<IDragnDrop> = (props) => {
    const { label, id, onchange, detail } = props;

    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        onchange?.(selectedFile);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            onchange?.(droppedFile);
        }
    };

    return (
        <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
            {label && <label className="manrope-600 fs-body" htmlFor={id}>{label}</label>}
            <div
                className={`dashed-border p-3 rounded-2 d-flex flex-column align-items-center justify-content-center text-center rounded-5 ${dragActive ? 'drag-active' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <FiImage className="h1 dark-400" />
                <p className="fs-caption">
                    {file ? (
                        <>
                            File uploaded: <span className="primary-600">{file.name}</span>
                        </>
                    ) : (
                        <>
                            Drag-n-drop or <span className="primary-600">Upload</span> your {detail}
                        </>
                    )}
                </p>
                <input
                    type="file"
                    id={id}
                    className="file-input"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor={id} className="btn-upload primary-600 mt-2">
                    {file ? 'Change File' : 'Browse File'}
                </label>
            </div>
        </div>
    );
};

export default DragNDropInput;
