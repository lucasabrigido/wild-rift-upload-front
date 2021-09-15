import React from "react";
import "./styles.scss";

import Dropzone from "react-dropzone";

export default function Upload({onChange, fileNames}) {
  return (
    <div className="container-upload">
      <Dropzone
        onDrop={onChange}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Arraste e solte as imagens ou clique para selecionar os arquivos</p>
            </div>
          );
        }}
      </Dropzone>
      <div>
        {/* <strong>Files:</strong> */}
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
