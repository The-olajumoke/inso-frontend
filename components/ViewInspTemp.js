import React from "react";

const ViewInspTemp = ({
  title,
  setActiveCommentBox,
  inspId,
  setActivePostInspId,
}) => {
  return (
    <div
      className="mb-7 flex items-center justify-between h-40 w-full px-20 bg-gray-background   rounded-lg text-lg  text-black-postInsp outline-none cursor-pointer"
      onClick={() => {
        setActiveCommentBox(`${title}`);
      }}
    >
      <div className="flex items-center">
        <p
          className="text-black-analText"
          onClick={() => {
            setActiveCommentBox(`${title}`);
            setActivePostInspId(inspId);
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ViewInspTemp;
