import React from "react";

const ViewInspTemp = ({ title }) => {
  return (
    <div className="mb-7 flex items-center justify-between h-40 w-full px-20 bg-blue-postInsp rounded-lg text-lg  text-black-postInsp outline-none cursor-pointer">
      <div className="flex items-center">
        <h6
          className="text-black-analText"
          onClick={() => {
            // setViewInspirations(true);
            // setActiveViewInspiration(`${title}`);
          }}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

export default ViewInspTemp;
