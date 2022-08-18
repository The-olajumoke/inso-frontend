import React from "react";
import Image from "next/image";

const PostingInspTemp = ({
  title,
  setActiveViewInspiration,
  setViewInspirations,
}) => {
  return (
    <div
      className="mb-7 flex items-center justify-between h-36 w-full px-20 py-9 bg-blue-postInsp rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
    >
      <div className="flex items-center">
        <span
          className="text-black-analText text-xs"
          onClick={() => {
            setViewInspirations(true);
            setActiveViewInspiration(`${title}`);
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default PostingInspTemp;
