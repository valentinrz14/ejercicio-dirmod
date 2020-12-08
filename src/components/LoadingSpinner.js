import React from "react";
import ReactLoading from "react-loading";
import "./LoadingSpinner.scss";

// Spinner de Carga
const LoadingSpinner = () => {
  return (
    <div className="ec-loading-spinner">
      <ReactLoading type="bubbles" color="#0044cc"  />
    </div>
  );
};

export default LoadingSpinner;
