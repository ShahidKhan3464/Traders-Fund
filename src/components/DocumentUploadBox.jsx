import React, { useState } from 'react';
import upload from '../images/icons/upload.svg';

const DocumentUploadBox = ({ handleUpload, uploadText, preview, innerClass }) => {
  const [drag, setDrag] = useState(false);

  const dragOver = event => {
    event.preventDefault();
    setDrag(true);
  };

  const dragEnter = event => {
    event.preventDefault();
    setDrag(true);
  };

  const dragLeave = event => {
    event.preventDefault();
    setDrag(false);
  };

  const inputId = `file-input-${uploadText.toLowerCase().replace(' ', '-')}`;

  return (
    <label
      htmlFor={inputId}
      onDrop={handleUpload}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={{ display: 'block', width: '100%' }}
    >
      <div className={`${innerClass}`}>
        <img src={upload} alt="" />
        <input id={inputId} type="file" accept="image/jpeg" onChange={handleUpload} style={{ display: 'none' }} />
        <p className="text-blue-600 underline cursor-pointer ">{uploadText}</p>
        <p className="font-bold text-black cursor-pointer ">or drag and drop</p>
        <div className="document-upload-box-text">SVG, PNG, JPG or GIF (max. 800 x 400px)</div>
      </div>
    </label>
  );
};

export default DocumentUploadBox;
