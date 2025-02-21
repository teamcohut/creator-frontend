import React, { useState } from "react";
import { IDragnDrop } from "./types";
import "../style.css";
import uploadIcon from "../../../assets/icons/Upload-icon.svg"; // Updated import path

const DragNDropInput: React.FC<IDragnDrop> = (props) => {
  const { label, id, onchange, detail, value, accept, description } = props;

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      onchange?.(selectedFile);
    }
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
      setPreviewUrl(URL.createObjectURL(droppedFile));
      onchange?.(droppedFile);
    }
  };

  return (
    <div className="input-cont d-flex flex-column align-items-stretch w-100 gap-2">
      {label && (
        <label className="manrope-600 fs-body" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`dashed-border p-2 rounded-2 d-flex flex-column align-items-center justify-content-center text-center rounded-5 ${
          dragActive ? "drag-active" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="img-preview"
            height={100}
            width={100}
          />
        ) : (
          <>
            <img 
              src={uploadIcon} 
              alt="Upload" 
              height={150}
              width={150} 
              className="text-gray-400" 
              style={{ marginBottom: '-10px' }} 
            />

            <div className="text-center">
              <div className="text-muted fs-small text-center mb-0" style={{ fontSize: '0.875rem' }}>
                Drag and drop or <label htmlFor={id} className="btn-upload primary-600 cursor-pointer" style={{ textDecoration: 'none', fontSize: '0.875rem' }}>upload</label> your {detail || "file"} here
              </div>
              {file ? (
                <div>
                  <input
                    type="file"
                    id={id}
                    accept={accept}
                    className="file-input"
                    value={value}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <span className="primary-600 align-content-center">
                    {file.name}
                  </span>
                </div>
              ) : (
                <input
                  type="file"
                  id={id}
                  accept={accept}
                  className="file-input"
                  value={value}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DragNDropInput;
