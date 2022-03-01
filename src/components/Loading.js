import React from "react";

const Loading = () => {
  return (
    <div className="con d-flex justify-content-center align-items-center mt-5 pt-5">
      <div
        className="spinner-border text-primary d-flex mt-5"
        style={{ width: 244, height: 244 }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
