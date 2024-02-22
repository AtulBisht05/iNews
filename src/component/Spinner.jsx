import React from "react";
import Triplex from "./Triplex.gif";

const Spinner = () => {
  return (
    <div className="text-center my-4">
      <img src={Triplex} className="my-3 " alt="Loading..." />
    </div>
  );
};

export default Spinner;
