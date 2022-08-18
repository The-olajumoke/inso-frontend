import React from "react";
const ProgressBar = ({ value}) => {
  return (
    <div>
      <progress  value={value} max={100} className="w-full" />
    </div>
  );
};

export default ProgressBar;
